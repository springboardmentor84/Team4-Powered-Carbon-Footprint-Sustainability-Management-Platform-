package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.CarbonEntryRequest;
import com.ecotrack.backend.dto.CarbonEntryResponse;
import com.ecotrack.backend.entity.CarbonEntry;
import com.ecotrack.backend.entity.Category;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.exception.ResourceNotFoundException;
import com.ecotrack.backend.exception.UnauthorizedAccessException;
import com.ecotrack.backend.repository.CarbonEntryRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Service layer for carbon entry business logic.
 *
 * Security model:
 *  - The currently authenticated user is resolved from the JWT via SecurityContextHolder.
 *  - All data-access queries are scoped to that user's ID.
 *  - Any attempt to access another user's entry throws UnauthorizedAccessException.
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CarbonEntryService {

    private final CarbonEntryRepository carbonEntryRepository;
    private final UserRepository userRepository;

    // ---------------------------------------------------------------------------
    // Default emission factors (kg CO2e per unit) used when the client does not
    // supply a carbonEmission value. These are rough industry averages — a real
    // platform would connect to a dedicated emission-factor API.
    // ---------------------------------------------------------------------------
    private static final Map<Category, Double> EMISSION_FACTORS = Map.of(
            Category.TRANSPORT,   0.21,   // 0.21 kg CO2e per km (average petrol car)
            Category.ELECTRICITY, 0.45,   // 0.45 kg CO2e per kWh (global average grid)
            Category.FOOD,        2.50,   // 2.50 kg CO2e per kg of food (mixed diet avg)
            Category.SHOPPING,    5.00,   // 5.00 kg CO2e per item (rough average)
            Category.TRAVEL,      0.255,  // 0.255 kg CO2e per km (economy flight)
            Category.WASTE,       0.50,   // 0.50 kg CO2e per kg of waste
            Category.OTHER,       1.00    // 1.00 kg CO2e per unit (generic fallback)
    );

    // -------------------------------------------------------------------------
    // Public API methods
    // -------------------------------------------------------------------------

    /**
     * Create a new carbon entry for the currently authenticated user.
     *
     * @param request DTO containing entry details
     * @return response DTO with the saved entry data
     */
    @Transactional
    public CarbonEntryResponse addEntry(CarbonEntryRequest request) {
        User currentUser = getAuthenticatedUser();

        double emission = resolveEmission(request);

        CarbonEntry entry = CarbonEntry.builder()
                .user(currentUser)
                .category(request.getCategory())
                .activity(request.getActivity())
                .value(request.getValue())
                .unit(request.getUnit())
                .carbonEmission(emission)
                .build();

        CarbonEntry saved = carbonEntryRepository.save(entry);
        return toResponse(saved);
    }

    /**
     * Return all carbon entries owned by the currently authenticated user.
     *
     * @return list of the user's entries as response DTOs
     */
    public List<CarbonEntryResponse> getAllEntries() {
        User currentUser = getAuthenticatedUser();
        return carbonEntryRepository.findByUser_Id(currentUser.getId())
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    /**
     * Return a single carbon entry by ID, ensuring it belongs to the current user.
     *
     * @param id the entry ID
     * @return the matching entry as a response DTO
     * @throws ResourceNotFoundException   if no entry exists with the given ID
     * @throws UnauthorizedAccessException if the entry belongs to a different user
     */
    public CarbonEntryResponse getEntryById(Long id) {
        User currentUser = getAuthenticatedUser();
        CarbonEntry entry = findEntryOwnedByUser(id, currentUser.getId());
        return toResponse(entry);
    }

    /**
     * Update an existing carbon entry. Only the owner can update their entry.
     *
     * @param id      the entry ID to update
     * @param request DTO with updated fields
     * @return the updated entry as a response DTO
     */
    @Transactional
    public CarbonEntryResponse updateEntry(Long id, CarbonEntryRequest request) {
        User currentUser = getAuthenticatedUser();
        CarbonEntry entry = findEntryOwnedByUser(id, currentUser.getId());

        entry.setCategory(request.getCategory());
        entry.setActivity(request.getActivity());
        entry.setValue(request.getValue());
        entry.setUnit(request.getUnit());
        entry.setCarbonEmission(resolveEmission(request));

        CarbonEntry updated = carbonEntryRepository.save(entry);
        return toResponse(updated);
    }

    /**
     * Delete a carbon entry. Only the owner can delete their entry.
     *
     * @param id the entry ID to delete
     */
    @Transactional
    public void deleteEntry(Long id) {
        User currentUser = getAuthenticatedUser();
        CarbonEntry entry = findEntryOwnedByUser(id, currentUser.getId());
        carbonEntryRepository.delete(entry);
    }

    // -------------------------------------------------------------------------
    // Private helpers
    // -------------------------------------------------------------------------

    /**
     * Resolve the carbon emission value:
     *  - Use the client-supplied value if provided and positive.
     *  - Otherwise calculate: value * emissionFactor for the category.
     */
    private double resolveEmission(CarbonEntryRequest request) {
        if (request.getCarbonEmission() != null && request.getCarbonEmission() > 0) {
            return request.getCarbonEmission();
        }
        double factor = EMISSION_FACTORS.getOrDefault(request.getCategory(), 1.0);
        return Math.round(request.getValue() * factor * 100.0) / 100.0;
    }

    /**
     * Retrieve the currently authenticated user from the security context.
     * The email stored as the JWT subject is used to look up the full User entity.
     */
    private User getAuthenticatedUser() {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName(); // returns the email (JWT subject)

        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Authenticated user not found: " + email));
    }

    /**
     * Find a carbon entry by ID and verify it is owned by the given user.
     * Uses the repository's scoped query as the first line of defense,
     * then falls back to a 404 or 403 depending on whether the entry exists at all.
     */
    private CarbonEntry findEntryOwnedByUser(Long entryId, Long userId) {
        // Check if the entry exists at all
        if (!carbonEntryRepository.existsById(entryId)) {
            throw new ResourceNotFoundException(
                    "Carbon entry not found with id: " + entryId);
        }
        // Entry exists — check ownership
        return carbonEntryRepository.findByIdAndUser_Id(entryId, userId)
                .orElseThrow(() -> new UnauthorizedAccessException(
                        "You do not have permission to access entry with id: " + entryId));
    }

    /**
     * Map a CarbonEntry entity to a CarbonEntryResponse DTO.
     */
    private CarbonEntryResponse toResponse(CarbonEntry entry) {
        return CarbonEntryResponse.builder()
                .id(entry.getId())
                .userId(entry.getUser().getId())
                .category(entry.getCategory())
                .activity(entry.getActivity())
                .value(entry.getValue())
                .unit(entry.getUnit())
                .carbonEmission(entry.getCarbonEmission())
                .createdAt(entry.getCreatedAt())
                .build();
    }
}
