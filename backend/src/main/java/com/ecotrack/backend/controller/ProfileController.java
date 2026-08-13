package com.ecotrack.backend.controller;

import com.ecotrack.backend.entity.Profile;
import com.ecotrack.backend.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor
public class ProfileController {

    private final ProfileService profileService;

    // Get logged-in user's profile
    @GetMapping("/{email}")
    public ResponseEntity<Profile> getProfile(
            @PathVariable String email) {

        return ResponseEntity.ok(
                profileService.getProfile(email)
        );
    }

    // Update profile
    @PutMapping("/{email}")
    public ResponseEntity<Profile> updateProfile(
            @PathVariable String email,
            @RequestParam String fullName,
            @RequestParam String location) {

        return ResponseEntity.ok(
                profileService.updateProfile(
                        email,
                        fullName,
                        location
                )
        );
    }
}
