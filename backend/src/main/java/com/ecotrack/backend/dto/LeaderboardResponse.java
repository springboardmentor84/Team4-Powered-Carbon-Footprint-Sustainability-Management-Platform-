package com.ecotrack.backend.dto;

public record LeaderboardResponse(
        Integer rank,
        String name,
        Integer xp,
        String level,
        boolean isYou
) {
}