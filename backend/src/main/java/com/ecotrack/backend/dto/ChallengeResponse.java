package com.ecotrack.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChallengeResponse {

    private Long id;

    private String name;

    private String category;

    private String description;

    private Integer daysLeft;

    private Long participants;

    private Integer rewardPoints;

    private String reward;

    private Integer progress;

    private Boolean joined;

    private String status;
}