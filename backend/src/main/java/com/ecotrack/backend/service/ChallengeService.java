package com.ecotrack.backend.service;

import com.ecotrack.backend.entity.Challenge;
import com.ecotrack.backend.entity.ChallengeParticipant;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.ChallengeParticipantRepository;
import com.ecotrack.backend.repository.ChallengeRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChallengeService {

    private final ChallengeRepository challengeRepository;
    private final ChallengeParticipantRepository participantRepository;
    private final UserRepository userRepository;


    // =========================================================
    // GET ALL ACTIVE CHALLENGES
    // =========================================================

    @Transactional(readOnly = true)
    public List<Challenge> getAllChallenges() {

        List<Challenge> challenges =
                challengeRepository.findByStatus("active");

        for (Challenge challenge : challenges) {

            int participantCount =
                    (int) participantRepository
                            .countByChallenge(challenge);

            challenge.setParticipants(participantCount);
        }

        return challenges;
    }


    // =========================================================
    // JOIN CHALLENGE
    // =========================================================

    @Transactional
    public ChallengeParticipant joinChallenge(
            Long challengeId,
            String email
    ) {

        Challenge challenge =
                challengeRepository
                        .findById(challengeId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Challenge not found"
                                )
                        );

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );

        if (participantRepository
                .existsByChallengeAndUser(
                        challenge,
                        user
                )) {

            throw new RuntimeException(
                    "Already joined this challenge"
            );
        }

        ChallengeParticipant participant =
                ChallengeParticipant.builder()
                        .challenge(challenge)
                        .user(user)
                        .progress(0)
                        .status("active")
                        .build();

        return participantRepository.save(participant);
    }


    // =========================================================
    // LEAVE CHALLENGE
    // =========================================================

    @Transactional
    public void leaveChallenge(
            Long challengeId,
            String email
    ) {

        Challenge challenge =
                challengeRepository
                        .findById(challengeId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Challenge not found"
                                )
                        );

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );

        ChallengeParticipant participant =
                participantRepository
                        .findByChallengeAndUser(
                                challenge,
                                user
                        )
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "You have not joined this challenge"
                                )
                        );

        participantRepository.delete(participant);
    }


    // =========================================================
    // GET USER'S CHALLENGES
    // =========================================================

    @Transactional(readOnly = true)
    public List<ChallengeParticipant> getUserChallenges(
            String email
    ) {

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );

        return participantRepository.findByUser(user);
    }


    // =========================================================
    // UPDATE PROGRESS
    // =========================================================

    @Transactional
    public ChallengeParticipant updateProgress(
            Long challengeId,
            String email,
            Integer progress
    ) {

        if (progress == null) {
            throw new RuntimeException(
                    "Progress cannot be null"
            );
        }

        if (progress < 0 || progress > 100) {
            throw new RuntimeException(
                    "Progress must be between 0 and 100"
            );
        }

        Challenge challenge =
                challengeRepository
                        .findById(challengeId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Challenge not found"
                                )
                        );

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );

        ChallengeParticipant participant =
                participantRepository
                        .findByChallengeAndUser(
                                challenge,
                                user
                        )
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "You have not joined this challenge"
                                )
                        );

        participant.setProgress(progress);

        if (progress == 100) {

            participant.setStatus("completed");

            if (participant.getCompletedAt() == null) {
                participant.setCompletedAt(
                        LocalDateTime.now()
                );
            }

        } else {

            participant.setStatus("active");
            participant.setCompletedAt(null);
        }

        return participantRepository.save(participant);
    }
}