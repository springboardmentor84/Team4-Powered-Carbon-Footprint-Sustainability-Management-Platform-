package com.ecotrack.backend.controller;

import com.ecotrack.backend.dto.CarbonActivityRequest;
import com.ecotrack.backend.entity.CarbonActivity;
import com.ecotrack.backend.service.CarbonActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carbon")
@RequiredArgsConstructor

public class CarbonActivityController {

    private final CarbonActivityService carbonActivityService;

    // Save Activity
    @PostMapping("/add")
    public ResponseEntity<CarbonActivity> saveActivity(
            @RequestBody CarbonActivityRequest request) {

        return ResponseEntity.ok(
                carbonActivityService.saveActivity(request)
        );
    }

    // Get User Activities
    @GetMapping("/user/{email}")
    public ResponseEntity<List<CarbonActivity>> getUserActivities(
            @PathVariable String email) {

        return ResponseEntity.ok(
                carbonActivityService.getUserActivities(email)
        );
    }
    // Delete Activity
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteActivity(
            @PathVariable Long id,
            @RequestParam String email) {

        carbonActivityService.deleteActivity(id, email);

        return ResponseEntity.ok("Activity deleted successfully");
    }
}