package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.CarbonActivityRequest;
import com.ecotrack.backend.entity.CarbonActivity;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.CarbonActivityRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * CarbonEntryService — delegates to CarbonActivity entity and repository.
 * Provides add, list, delete and recommendation logic for carbon entries.
 */
@Service
@RequiredArgsConstructor
public class CarbonEntryService {

    private final CarbonActivityRepository carbonActivityRepository;
    private final UserRepository userRepository;

    public CarbonActivity addEntry(CarbonActivityRequest request) {
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

    public List<CarbonActivity> getAllEntries(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return carbonActivityRepository.findByUser(user);
    }

    public void deleteEntry(Long id) {
        carbonActivityRepository.findById(id)
                .ifPresent(carbonActivityRepository::delete);
    }
}
