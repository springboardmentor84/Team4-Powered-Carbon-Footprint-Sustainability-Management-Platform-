package com.ecotrack.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Stores periodic eco/sustainability scores for users.
 * Maps to the "eco_scores" table (14_eco_scores.sql).
 */
@Entity
@Table(name = "eco_scores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EcoScore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    /**
     * Calculated eco score (0–100 scale).
     */
    @Column(nullable = false, precision = 5, scale = 2)
    private BigDecimal score;

    /**
     * Period this score represents (first day of the month for monthly scores).
     */
    @Column(name = "score_date", nullable = false)
    private LocalDate scoreDate;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
