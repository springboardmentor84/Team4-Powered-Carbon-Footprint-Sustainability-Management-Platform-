package com.ecotrack.backend.controller;

import com.ecotrack.backend.dto.CarbonEntryRequest;
import com.ecotrack.backend.dto.CarbonEntryResponse;
import com.ecotrack.backend.service.CarbonEntryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for carbon emission tracking endpoints.
 *
 * Base path : /carbon
 * Security  : All endpoints require a valid JWT (enforced by SecurityConfig).
 *             User isolation is enforced at the service layer.
 */
@RestController
@RequestMapping("/carbon")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CarbonEntryController {

    private final CarbonEntryService carbonEntryService;

    /**
     * POST /carbon
     * Create a new carbon entry for the authenticated user.
     *
     * @param request validated request body
     * @return 201 Created with the saved entry
     */
    @PostMapping
    public ResponseEntity<CarbonEntryResponse> addEntry(
            @Valid @RequestBody CarbonEntryRequest request) {

        CarbonEntryResponse response = carbonEntryService.addEntry(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    /**
     * GET /carbon
     * Retrieve all carbon entries belonging to the authenticated user.
     *
     * @return 200 OK with list of entries
     */
    @GetMapping
    public ResponseEntity<List<CarbonEntryResponse>> getAllEntries() {
        return ResponseEntity.ok(carbonEntryService.getAllEntries());
    }

    /**
     * GET /carbon/{id}
     * Retrieve a single carbon entry by ID (must belong to the authenticated user).
     *
     * @param id the entry ID
     * @return 200 OK with the entry, or 404/403 on failure
     */
    @GetMapping("/{id}")
    public ResponseEntity<CarbonEntryResponse> getEntryById(@PathVariable Long id) {
        return ResponseEntity.ok(carbonEntryService.getEntryById(id));
    }

    /**
     * PUT /carbon/{id}
     * Update an existing carbon entry (must belong to the authenticated user).
     *
     * @param id      the entry ID to update
     * @param request validated request body with updated fields
     * @return 200 OK with the updated entry
     */
    @PutMapping("/{id}")
    public ResponseEntity<CarbonEntryResponse> updateEntry(
            @PathVariable Long id,
            @Valid @RequestBody CarbonEntryRequest request) {

        return ResponseEntity.ok(carbonEntryService.updateEntry(id, request));
    }

    /**
     * DELETE /carbon/{id}
     * Delete a carbon entry (must belong to the authenticated user).
     *
     * @param id the entry ID to delete
     * @return 204 No Content on success
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntry(@PathVariable Long id) {
        carbonEntryService.deleteEntry(id);
        return ResponseEntity.noContent().build();
    }
}
