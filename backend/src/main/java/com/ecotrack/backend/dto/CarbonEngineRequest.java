package com.ecotrack.backend.dto;

import lombok.Data;

@Data
public class CarbonEngineRequest {

    private String activityType;

    private Double amount;

    private String unit;

    private String email;
}