package com.ecotrack.backend.dto;

import java.util.List;

public record GamificationResponse(
        Integer totalXp,
        LevelResponse currentLevel,
        LevelResponse nextLevel,
        Integer levelProgressPct,
        List<BadgeResponse> badges
) {
    public record LevelResponse(Integer level, String name, Integer minXp) {}
    public record BadgeResponse(String id, String name, boolean earned, String description) {}
}