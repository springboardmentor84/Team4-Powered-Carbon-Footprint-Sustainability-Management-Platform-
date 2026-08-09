package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.CarbonActivityRequest;
import com.ecotrack.backend.entity.CarbonActivity;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.CarbonActivityRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarbonActivityService {

    private final CarbonActivityRepository carbonActivityRepository;
    private final UserRepository userRepository;

    // Save Activity
    public CarbonActivity saveActivity(CarbonActivityRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        CarbonActivity activity = CarbonActivity.builder()
                .category(request.getCategory())
                .description(request.getDescription())
                .quantity(request.getQuantity())
                .unit(request.getUnit())
                .carbonEmission(request.getCarbonEmission())
                .activityDate(request.getActivityDate())
                .user(user)
                .build();

        return carbonActivityRepository.save(activity);
    }

    // Get Logged-in User Activities
    public List<CarbonActivity> getUserActivities(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return carbonActivityRepository.findByUser(user);
    }
    // Delete User Activity
    public void deleteActivity(Long id, String email) {

        CarbonActivity activity = carbonActivityRepository
                .findByIdAndUserEmail(id, email)
                .orElseThrow(() ->
                        new RuntimeException("Activity not found for ID: " + id));

        carbonActivityRepository.delete(activity);
    }
}