package com.ecotrack.backend.service;

import com.ecotrack.backend.entity.Profile;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.ProfileRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final UserRepository userRepository;

    // Get profile by user email
    public Profile getProfile(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return profileRepository.findByUser(user)
                .orElseGet(() -> {

                    Profile profile = Profile.builder()
                            .user(user)
                            .build();

                    return profileRepository.save(profile);
                });
    }

    // Update profile
    public Profile updateProfile(
            String email,
            String fullName,
            String location) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Update name in users table
        user.setFullName(fullName);
        userRepository.save(user);

        // Find existing profile or create new one
        Profile profile = profileRepository.findByUser(user)
                .orElseGet(() -> Profile.builder()
                        .user(user)
                        .build());

        // Save location in profiles table
        if (location != null && !location.trim().isEmpty()) {

            String[] parts = location.split(",", 2);

            profile.setCity(parts[0].trim());

            if (parts.length > 1) {
                profile.setCountry(parts[1].trim());
            }
        }

        return profileRepository.save(profile);
    }
}