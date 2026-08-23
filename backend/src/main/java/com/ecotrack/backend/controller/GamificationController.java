package com.ecotrack.backend.controller;

import com.ecotrack.backend.dto.GamificationResponse;
import com.ecotrack.backend.dto.LeaderboardResponse;
import com.ecotrack.backend.service.GamificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/gamification")
@RequiredArgsConstructor
public class GamificationController {
    private final GamificationService gamificationService;

    @GetMapping("/me")
    public GamificationResponse me(Principal principal) {
        return gamificationService.getProgress(principal.getName());
    }

    @GetMapping("/leaderboard")
    public List<LeaderboardResponse> leaderboard(Principal principal) {
        return gamificationService.getLeaderboard(principal.getName());
    }
}