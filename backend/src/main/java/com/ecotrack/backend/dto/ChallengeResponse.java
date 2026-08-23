package com.ecotrack.backend.dto;

public record ChallengeResponse(
        Long id,
        String name,
        String category,
        String description,
        Integer participants,
        Integer daysLeft,
        Integer progress,
        boolean joined,
        String reward,
        Integer xp,
        String difficulty,
        String badgeId
)
{
}