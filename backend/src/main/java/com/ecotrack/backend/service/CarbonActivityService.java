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

    // Delete Activity
    // Delete Activity
    public void deleteActivity(Long id) {

        carbonActivityRepository.findById(id).ifPresent(activity -> {
            carbonActivityRepository.delete(activity);
        });
    }
    // Generate personalized recommendation
    public String getRecommendation(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<CarbonActivity> activities =
                carbonActivityRepository.findByUser(user);

        if (activities.isEmpty()) {
            return "Start logging your activities to receive personalized sustainability recommendations.";
        }

        // Calculate total emission for each category
        java.util.Map<String, Double> categoryEmissions =
                new java.util.HashMap<>();

        for (CarbonActivity activity : activities) {

            String category = activity.getCategory();
            Double emission = activity.getCarbonEmission();

            if (category == null || emission == null) {
                continue;
            }

            categoryEmissions.put(
                    category,
                    categoryEmissions.getOrDefault(category, 0.0) + emission
            );
        }

        if (categoryEmissions.isEmpty()) {
            return "Keep making sustainable choices to reduce your carbon footprint.";
        }

        // Find category with highest emission
        String highestCategory = null;
        double highestEmission = 0;

        for (java.util.Map.Entry<String, Double> entry :
                categoryEmissions.entrySet()) {

            if (entry.getValue() > highestEmission) {
                highestEmission = entry.getValue();
                highestCategory = entry.getKey();
            }
        }

        if (highestCategory == null) {
            return "Keep making sustainable choices to reduce your carbon footprint.";
        }

        // Generate recommendation
        switch (highestCategory.toLowerCase()) {

            case "transportation":
                return "Your transportation emissions are high. Try using public transport, cycling, or walking for short-distance travel.";

            case "electricity":
            case "electricity usage":
                return "Your electricity emissions are high. Switch off unused appliances, use LED bulbs, and choose energy-efficient devices.";

            case "food":
                return "Your food-related emissions are high. Try eating more plant-based meals and reducing high-carbon food choices.";

            case "waste":
                return "Your waste emissions are high. Reduce single-use products, reuse items, and recycle whenever possible.";

            case "water":
                return "Your water-related impact is high. Reduce water wastage by fixing leaks and using water efficiently.";

            case "shopping":
                return "Your shopping-related impact is high. Choose durable products, avoid unnecessary purchases, and prefer eco-friendly products.";

            case "travel":
                return "Your travel emissions are high. Consider public transport, carpooling, or lower-carbon travel options.";

            default:
                return "Your " + highestCategory +
                        " activities contribute significantly to your footprint. Try choosing more sustainable alternatives.";
        }
    }
}