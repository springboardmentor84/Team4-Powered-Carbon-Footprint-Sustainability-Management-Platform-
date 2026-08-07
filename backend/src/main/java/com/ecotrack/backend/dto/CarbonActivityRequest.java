package com.ecotrack.backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class CarbonActivityRequest {

    private String category;

    private String description;

    private Double quantity;

    private String unit;

    private Double carbonEmission;

    private LocalDate activityDate;

    private String email;
}