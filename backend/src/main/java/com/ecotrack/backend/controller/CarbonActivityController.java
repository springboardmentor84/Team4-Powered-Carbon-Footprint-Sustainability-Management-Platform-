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
@CrossOrigin(origins = "http://localhost:4200")
public class CarbonActivityController {

    private final CarbonActivityService carbonActivityService;

    // Add activity
    @PostMapping("/add")
    public ResponseEntity<CarbonActivity> addActivity(
            @RequestBody CarbonActivityRequest request) {

        return ResponseEntity.ok(
                carbonActivityService.saveActivity(request)
        );
    }

    // Get user's activities
    @GetMapping("/user/{email}")
    public ResponseEntity<List<CarbonActivity>> getUserActivities(
            @PathVariable String email) {

        return ResponseEntity.ok(
                carbonActivityService.getUserActivities(email)
        );
    }

    // Delete activity
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteActivity(
            @PathVariable Long id) {

        carbonActivityService.deleteActivity(id);

        return ResponseEntity.ok("Activity deleted successfully");
    }
    // Get personalized recommendation
    @GetMapping("/recommendation/{email}")
    public ResponseEntity<String> getRecommendation(
            @PathVariable String email) {

        return ResponseEntity.ok(
                carbonActivityService.getRecommendation(email)
        );
    }
}