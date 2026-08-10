package com.ecotrack.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Stores standard carbon emission factors per category and unit.
 * Maps to the "emission_factors" table (03_emission_factors.sql).
 * Used by CarbonEntry to calculate CO2 emissions accurately.
 */
@Entity
@Table(name = "emission_factors")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmissionFactor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Category name (e.g., "TRANSPORT", "ELECTRICITY").
     */
    @Column(nullable = false, length = 100)
    private String category;

    /**
     * The emission factor value (kg CO2e per unit).
     * e.g., 0.21 kg CO2e per km for petrol car.
     */
    @Column(name = "factor_value", nullable = false, precision = 10, scale = 4)
    private BigDecimal factorValue;

    /**
     * Unit of measurement (e.g., "km", "kWh", "kg").
     */
    @Column(nullable = false, length = 50)
    private String unit;

    /**
     * Human-readable description of this factor.
     */
    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
