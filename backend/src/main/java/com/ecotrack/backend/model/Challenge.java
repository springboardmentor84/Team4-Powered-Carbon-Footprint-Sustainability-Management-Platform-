package com.ecotrack.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Matches the real "challenges" table exactly (see 09_challenges.sql):
 *
 * CREATE TABLE challenges (
 *     challenge_id SERIAL PRIMARY KEY,
 *     created_by INTEGER NOT NULL REFERENCES users(id),
 *     title VARCHAR(150) NOT NULL,
 *     description TEXT,
 *     category VARCHAR(100),
 *     start_date DATE NOT NULL,
 *     end_date DATE,
 *     reward_points INTEGER DEFAULT 0,
 *     status VARCHAR(20) DEFAULT 'active',
 *     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 * );
 *
 * NOTE: category and status are plain text (not Java enums) because the
 * database doesn't restrict their values with a CHECK constraint - this
 * also matches the frontend, which sends human-readable strings like
 * "Waste Reduction" directly.
 *
 * NOTE on created_by: stored as a plain Integer (the id of the user who
 * created this challenge) instead of a @ManyToOne to User, so this file
 * compiles without needing your teammate's User entity yet.
 */
@Entity
@Table(name = "challenges")
public class Challenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "challenge_id")
    private Integer id;

    @Column(name = "created_by", nullable = false)
    private Integer createdBy;

    @Column(nullable = false, length = 150)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(length = 100)
    private String category;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "reward_points")
    private Integer rewardPoints = 0;

    @Column(length = 20)
    private String status = "active";

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Challenge() {
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    /** Used by the DTO layer to compute "4 days left". Returns 0 if no end_date is set. */
    public long daysLeft() {
        if (endDate == null) return 0;
        long days = java.time.temporal.ChronoUnit.DAYS.between(LocalDate.now(), endDate);
        return Math.max(days, 0);
    }

    // ----- getters and setters -----

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Integer getRewardPoints() {
        return rewardPoints;
    }

    public void setRewardPoints(Integer rewardPoints) {
        this.rewardPoints = rewardPoints;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
