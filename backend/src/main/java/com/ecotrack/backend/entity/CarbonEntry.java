package com.ecotrack.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Represents a single carbon footprint entry logged by a user.
 * Maps to the "carbon_entries" table (04_carbon_entries.sql).
 *
 * Links to:
 *  - User       (ManyToOne) — the owner of the entry
 *  - EmissionFactor (ManyToOne) — the factor used to calculate CO2
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
     * The user who logged this entry.
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    /**
     * The emission factor used to calculate CO2 for this entry.
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "emission_factor_id", nullable = false)
    private EmissionFactor emissionFactor;

    /**
     * Amount of the activity (e.g., 20 km, 5 kg).
     */
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal quantity;

    /**
     * Unit of the quantity (e.g., "km", "kg", "kWh").
     */
    @Column(nullable = false, length = 50)
    private String unit;

    /**
     * Date of the activity.
     */
    @Column(name = "entry_date", nullable = false)
    private LocalDate entryDate;

    /**
     * Source/description of the activity (e.g., "Car", "Flight", "Beef").
     */
    @Column(length = 100)
    private String source;

    /**
     * Optional additional notes.
     */
    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
