package com.ecotrack.backend.service;

import com.ecotrack.backend.entity.CarbonActivity;
import com.ecotrack.backend.entity.Recommendation;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.CarbonActivityRepository;
import com.ecotrack.backend.repository.RecommendationRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class RecommendationService {

    private final RecommendationRepository recommendationRepository;
    private final CarbonActivityRepository carbonActivityRepository;
    private final UserRepository userRepository;
    private final OllamaService ollamaService;

    public Recommendation generateRecommendation(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<CarbonActivity> activities =
                carbonActivityRepository.findByUser(user);

        if (activities.isEmpty()) {

            return saveRecommendation(
                    user,
                    "General",
                    "Start logging your carbon activities to receive personalized sustainability recommendations.",
                    0.0
            );
        }

        Map<String, Double> categoryEmissions = new HashMap<>();

        for (CarbonActivity activity : activities) {

            if (activity.getCategory() == null ||
                    activity.getCarbonEmission() == null) {
                continue;
            }

            categoryEmissions.merge(
                    activity.getCategory(),
                    activity.getCarbonEmission(),
                    Double::sum
            );
        }

        if (categoryEmissions.isEmpty()) {

            return saveRecommendation(
                    user,
                    "General",
                    "Keep logging your activities to receive personalized sustainability recommendations.",
                    0.0
            );
        }

        Map.Entry<String, Double> highest =
                categoryEmissions.entrySet()
                        .stream()
                        .max(Map.Entry.comparingByValue())
                        .orElseThrow();

        String category = highest.getKey();
        double emission = highest.getValue();

        String recommendationText =
                ollamaService.generateRecommendation(category, emission);

        double impactScore =
                calculateImpactScore(emission);

        return saveRecommendation(
                user,
                category,
                recommendationText,
                impactScore
        );
    }



    private double calculateImpactScore(double emission) {

        if (emission >= 50) {
            return 90.0;
        }

        if (emission >= 30) {
            return 70.0;
        }

        if (emission >= 15) {
            return 50.0;
        }

        return 30.0;
    }

    private Recommendation saveRecommendation(
            User user,
            String category,
            String text,
            double impactScore) {

        Recommendation recommendation = Recommendation.builder()
                .user(user)
                .category(category)
                .recommendationText(text)
                .impactScore(impactScore)
                .isRead(false)
                .generatedAt(LocalDateTime.now())
                .build();

        return recommendationRepository.save(recommendation);
    }

    public List<Recommendation> getUserRecommendations(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return recommendationRepository
                .findByUserOrderByGeneratedAtDesc(user);
    }
}