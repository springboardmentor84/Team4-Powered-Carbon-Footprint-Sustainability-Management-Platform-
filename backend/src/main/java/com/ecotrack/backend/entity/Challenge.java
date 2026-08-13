package com.ecotrack.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Entity
@Table(name = "challenges")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Challenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "challenge_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "created_by", nullable = false)
    @JsonIgnore
    private User createdBy;

    @Column(name = "title", nullable = false, length = 150)
    private String title;

    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "category", nullable = false, length = 100)
    private String category;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "reward_points")
    private Integer rewardPoints;

    @Column(name = "status", length = 20)
    private String status;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    /*
     * This value is not stored directly in challenges table.
     * It is calculated from challenge_participants table.
     */
    @Transient
    private Integer participants;

    @PrePersist
    public void prePersist() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }

        if (rewardPoints == null) {
            rewardPoints = 0;
        }

        if (status == null) {
            status = "active";
        }
    }

    /*
     * Angular expects "name"
     */
    @JsonProperty("name")
    public String getName() {
        return title;
    }

    /*
     * Angular expects "daysLeft"
     */
    @JsonProperty("daysLeft")
    public Integer getDaysLeft() {

        if (endDate == null) {
            return 0;
        }

        long days = ChronoUnit.DAYS.between(
                LocalDate.now(),
                endDate
        );

        return (int) Math.max(days, 0);
    }

    /*
     * Angular expects "reward"
     */
    @JsonProperty("reward")
    public String getReward() {
        return rewardPoints + " pts";
    }

    /*
     * Angular expects "active"
     */
    @JsonProperty("active")
    public Boolean getActive() {
        return "active".equalsIgnoreCase(status);
    }
}