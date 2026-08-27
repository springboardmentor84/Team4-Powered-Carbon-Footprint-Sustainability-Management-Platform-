package com.ecotrack.backend.controller;

import com.ecotrack.backend.dto.CarbonActivityRequest;
import com.ecotrack.backend.entity.CarbonActivity;
import com.ecotrack.backend.service.CarbonEntryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * CarbonEntryController — REST endpoints for carbon entry management.
 * Base path mirrors CarbonActivityController for frontend compatibility.
 */
@RestController
@RequestMapping("/carbon/entries")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class CarbonEntryController {

    private final CarbonEntryService carbonEntryService;

    @PostMapping("/add")
    public ResponseEntity<CarbonActivity> addEntry(
            @RequestBody CarbonActivityRequest request) {
        return ResponseEntity.ok(carbonEntryService.addEntry(request));
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<List<CarbonActivity>> getAllEntries(
            @PathVariable String email) {
        return ResponseEntity.ok(carbonEntryService.getAllEntries(email));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEntry(@PathVariable Long id) {
        carbonEntryService.deleteEntry(id);
        return ResponseEntity.ok("Entry deleted successfully");
    }
}
