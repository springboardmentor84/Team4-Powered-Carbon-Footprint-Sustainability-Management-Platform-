package com.ecotrack.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "carbon_engine_activity")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarbonEngineActivity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String activityType;

    private Double amount;

    private String unit;

    private Double emissionFactor;

    private Double carbonKg;

    private String email;

    private LocalDateTime calculatedAt;
}