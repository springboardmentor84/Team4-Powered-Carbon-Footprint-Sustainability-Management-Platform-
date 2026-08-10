package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.CarbonEntryRequest;
import com.ecotrack.backend.dto.CarbonEntryResponse;
import com.ecotrack.backend.entity.CarbonEntry;
import com.ecotrack.backend.entity.EmissionFactor;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.exception.ResourceNotFoundException;
import com.ecotrack.backend.exception.UnauthorizedAccessException;
import com.ecotrack.backend.repository.CarbonEntryRepository;
import com.ecotrack.backend.repository.EmissionFactorRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service layer for carbon entry business logic.
 *
 * Security model:
 *  - Authenticated user is resolved from the JWT via SecurityContextHolder.
 *  - All data queries are scoped to that user's ID.
 *  - Cross-user access throws UnauthorizedAccessException (HTTP 403).
 *
 * CO2 Calculation:
 *  carbonEmission = quantity × emissionFactor.factorValue  (rounded to 4 decimal places)
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CarbonEntryService {

    private final CarbonEntryRepository carbonEntryRepository;
    private final EmissionFactorRepository emissionFactorRepository;
    private final UserRepository userRepository;

    // -------------------------------------------------------------------------
    // Public API
    // -------------------------------------------------------------------------

    /**
     * Create a new carbon entry for the authenticated user.
     */
    @Transactional
    public CarbonEntryResponse addEntry(CarbonEntryRequest request) {
        User currentUser = getAuthenticatedUser();
        EmissionFactor factor = getEmissionFactor(request.getEmissionFactorId());

        LocalDate entryDate = request.getEntryDate() != null
                ? request.getEntryDate()
                : LocalDate.now();

        CarbonEntry entry = CarbonEntry.builder()
                .user(currentUser)
                .emissionFactor(factor)
                .quantity(request.getQuantity())
                .unit(request.getUnit())
                .entryDate(entryDate)
                .source(request.getSource())
                .notes(request.getNotes())
                .build();

        return toResponse(carbonEntryRepository.save(entry));
    }

    /**
     * Return all carbon entries owned by the authenticated user.
     */
    public List<CarbonEntryResponse> getAllEntries() {
        User currentUser = getAuthenticatedUser();
        return carbonEntryRepository.findByUser_Id(currentUser.getId())
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    /**
     * Return a single entry by ID (must belong to the authenticated user).
     */
    public CarbonEntryResponse getEntryById(Long id) {
        User currentUser = getAuthenticatedUser();
        return toResponse(findEntryOwnedByUser(id, currentUser.getId()));
    }

    /**
     * Update an existing entry (must belong to the authenticated user).
     */
    @Transactional
    public CarbonEntryResponse updateEntry(Long id, CarbonEntryRequest request) {
        User currentUser = getAuthenticatedUser();
        CarbonEntry entry = findEntryOwnedByUser(id, currentUser.getId());
        EmissionFactor factor = getEmissionFactor(request.getEmissionFactorId());

        entry.setEmissionFactor(factor);
        entry.setQuantity(request.getQuantity());
        entry.setUnit(request.getUnit());
        entry.setEntryDate(request.getEntryDate() != null ? request.getEntryDate() : entry.getEntryDate());
        entry.setSource(request.getSource());
        entry.setNotes(request.getNotes());

        return toResponse(carbonEntryRepository.save(entry));
    }

    /**
     * Delete an entry (must belong to the authenticated user).
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

    private User getAuthenticatedUser() {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Authenticated user not found: " + email));
    }

    private EmissionFactor getEmissionFactor(Long factorId) {
        return emissionFactorRepository.findById(factorId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Emission factor not found with id: " + factorId));
    }

    private CarbonEntry findEntryOwnedByUser(Long entryId, Long userId) {
        if (!carbonEntryRepository.existsById(entryId)) {
            throw new ResourceNotFoundException(
                    "Carbon entry not found with id: " + entryId);
        }
        return carbonEntryRepository.findByIdAndUser_Id(entryId, userId)
                .orElseThrow(() -> new UnauthorizedAccessException(
                        "You do not have permission to access entry with id: " + entryId));
    }

    /**
     * carbonEmission = quantity × factor.factorValue  (4 decimal places)
     */
    private BigDecimal calculateEmission(BigDecimal quantity, EmissionFactor factor) {
        return quantity.multiply(factor.getFactorValue())
                .setScale(4, RoundingMode.HALF_UP);
    }

    private CarbonEntryResponse toResponse(CarbonEntry entry) {
        return CarbonEntryResponse.builder()
                .id(entry.getId())
                .userId(entry.getUser().getId())
                .emissionFactorId(entry.getEmissionFactor().getId())
                .category(entry.getEmissionFactor().getCategory())
                .quantity(entry.getQuantity())
                .unit(entry.getUnit())
                .entryDate(entry.getEntryDate())
                .source(entry.getSource())
                .notes(entry.getNotes())
                .carbonEmission(calculateEmission(entry.getQuantity(), entry.getEmissionFactor()))
                .createdAt(entry.getCreatedAt())
                .updatedAt(entry.getUpdatedAt())
                .build();
    }
}
