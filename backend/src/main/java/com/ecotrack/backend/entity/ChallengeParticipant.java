package com.ecotrack.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(
        name = "challenge_participants",
        uniqueConstraints = {
                @UniqueConstraint(
                        columnNames = {
                                "challenge_id",
                                "user_id"
                        }
                )
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChallengeParticipant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participant_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(
            name = "challenge_id",
            nullable = false
    )
    private Challenge challenge;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(
            name = "user_id",
            nullable = false
    )
        @JsonIgnore
    private User user;

    @Column(
            name = "progress_value",
            nullable = false
    )
    private Integer progress;

    @Column(name = "joined_at")
    private LocalDateTime joinedAt;

    @Column(name = "status", length = 20)
    private String status;

    @Column(name = "completed_at")
    private LocalDateTime completedAt;

        @Column(name = "xp_awarded", nullable = false)
        private Boolean xpAwarded;

    @PrePersist
    public void prePersist() {

        if (progress == null) {
            progress = 0;
        }

        if (joinedAt == null) {
            joinedAt = LocalDateTime.now();
        }

        if (status == null) {
            status = "active";
        }

                if (xpAwarded == null) {
                        xpAwarded = false;
                }
    }
}