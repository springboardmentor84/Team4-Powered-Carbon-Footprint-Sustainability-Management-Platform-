package com.ecotrack.backend.controller;

import com.ecotrack.backend.entity.Recommendation;
import com.ecotrack.backend.service.RecommendationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommendations")
@RequiredArgsConstructor
@CrossOrigin
public class RecommendationController {

    private final RecommendationService recommendationService;

    @PostMapping("/generate")
    public Recommendation generateRecommendation(
            @RequestParam String email) {

        return recommendationService.generateRecommendation(email);
    }

    @GetMapping
    public List<Recommendation> getUserRecommendations(
            @RequestParam String email) {

        return recommendationService.getUserRecommendations(email);
    }
}