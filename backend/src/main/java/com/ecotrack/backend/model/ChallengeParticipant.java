package com.ecotrack.backend.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Matches the real "challenge_participants" table exactly (see 10_challenge_participants.sql):
 *
 * CREATE TABLE challenge_participants (
 *     participant_id SERIAL PRIMARY KEY,
 *     challenge_id INTEGER NOT NULL REFERENCES challenges(challenge_id),
 *     user_id INTEGER NOT NULL REFERENCES users(id),
 *     joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 *     progress_value NUMERIC(10,2) DEFAULT 0,
 *     status VARCHAR(20) DEFAULT 'active',
 *     completed_at TIMESTAMP
 * );
 *
 * NOTE: there is no "user_name" column in this table (I'd wrongly assumed
 * one earlier) - so the leaderboard can only show userId for now. Once
 * your teammate's User entity exists, we can join to it to show real names.
 *
 * NOTE on status: plain text values like "active", "completed", "left" -
 * matches the DB default 'active', no Java enum needed.
 */
@Entity
@Table(name = "challenge_participants")
public class ChallengeParticipant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participant_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "challenge_id", nullable = false)
    private Challenge challenge;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "joined_at")
    private LocalDateTime joinedAt;

    @Column(name = "progress_value", precision = 10, scale = 2)
    private BigDecimal progressValue = BigDecimal.ZERO;

    @Column(length = 20)
    private String status = "active";

    @Column(name = "completed_at")
    private LocalDateTime completedAt;

    public ChallengeParticipant() {
    }

    @PrePersist
    protected void onCreate() {
        this.joinedAt = LocalDateTime.now();
    }

    // ----- getters and setters -----

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Challenge getChallenge() {
        return challenge;
    }

    public void setChallenge(Challenge challenge) {
        this.challenge = challenge;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public LocalDateTime getJoinedAt() {
        return joinedAt;
    }

    public BigDecimal getProgressValue() {
        return progressValue;
    }

    public void setProgressValue(BigDecimal progressValue) {
        this.progressValue = progressValue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCompletedAt() {
        return completedAt;
    }

    public void setCompletedAt(LocalDateTime completedAt) {
        this.completedAt = completedAt;
    }
}
