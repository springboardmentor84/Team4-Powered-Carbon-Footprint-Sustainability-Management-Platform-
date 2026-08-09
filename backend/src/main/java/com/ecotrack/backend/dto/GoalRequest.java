package com.ecotrack.backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class GoalRequest {

    private String title;

    private String type;

    private Double targetKg;

    private Double currentKg;

    private String unit;

    private LocalDate startDate;

    private LocalDate endDate;

    private String status;

    private String email;
}