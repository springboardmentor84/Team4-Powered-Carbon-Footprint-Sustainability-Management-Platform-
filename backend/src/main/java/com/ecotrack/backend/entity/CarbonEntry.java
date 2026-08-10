package com.ecotrack.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

/**
 * Entity representing a single carbon emission record logged by a user.
 * Maps to the "carbon_entries" table in PostgreSQL.
 */
@Entity
@Table(name = "carbon_entries")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarbonEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The user who created this entry.
     * LAZY fetch to avoid loading the full user object on every query.
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    /**
     * Category of the carbon-emitting activity (e.g., TRANSPORT, FOOD).
     * Stored as a STRING for human-readable database values.
     */
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private Category category;

    /**
     * Description of the specific activity (e.g., "Car ride", "Flight to NYC").
     */
    @Column(nullable = false, length = 255)
    private String activity;

    /**
     * Numeric value of the activity (e.g., 20 km, 5 kg of beef).
     */
    @Column(nullable = false)
    private Double value;

    /**
     * Unit of the value (e.g., "km", "kg", "kWh").
     */
    @Column(nullable = false, length = 50)
    private String unit;

    /**
     * Calculated carbon emission in kg CO2 equivalent.
     */
    @Column(name = "carbon_emission", nullable = false)
    private Double carbonEmission;

    /**
     * Timestamp of when this entry was created. Set automatically.
     */
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
