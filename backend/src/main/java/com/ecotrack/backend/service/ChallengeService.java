package com.ecotrack.backend.service;

import com.ecotrack.backend.entity.Challenge;
import com.ecotrack.backend.entity.ChallengeParticipant;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.dto.ChallengeResponse;
import com.ecotrack.backend.repository.ChallengeParticipantRepository;
import com.ecotrack.backend.repository.ChallengeRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
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

        @Transactional
        public List<ChallengeResponse> getAllChallenges(String email) {
                User user = getUser(email);
                seedChallenges(user);

        List<Challenge> challenges =
                challengeRepository.findByStatus("active");

                return challenges.stream().map(challenge -> {
                        if (challenge.getXp() == 0 && challenge.getRewardPoints() != null) {
                                challenge.setXp(challenge.getRewardPoints());
                                challengeRepository.save(challenge);
                        }
                        ChallengeParticipant participant = participantRepository
                                        .findByChallengeAndUser(challenge, user)
                                        .filter(item -> "active".equals(item.getStatus()))
                                        .orElse(null);
                        return new ChallengeResponse(
                                        challenge.getId(), challenge.getName(), challenge.getCategory(),
                                        challenge.getDescription(),
                                        (int) participantRepository.countByChallengeAndStatus(challenge, "active"),
                                        challenge.getDaysLeft(), participant == null ? 0 : participant.getProgress(),
                                        participant != null, challenge.getReward(), challenge.getXp(),
                                        challenge.getDifficulty(), challenge.getBadgeId());
                }).toList();
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

                ChallengeParticipant existing = participantRepository.findByChallengeAndUser(challenge, user).orElse(null);
                if (existing != null) {
                        if ("active".equals(existing.getStatus())) {
                                throw new RuntimeException("Already joined this challenge");
                        }
                        existing.setStatus("active");
                        return participantRepository.save(existing);
        }

        ChallengeParticipant participant =
                ChallengeParticipant.builder()
                        .challenge(challenge)
                        .user(user)
                        .progress(0)
                        .status("active")
                        .xpAwarded(false)
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

        participant.setStatus("left");
        participant.setProgress(0);
        participant.setCompletedAt(null);
        participantRepository.save(participant);
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

        return participantRepository.findByUser(user).stream()
                .filter(item -> "active".equals(item.getStatus()))
                .toList();
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

                        if (Boolean.TRUE.equals(participant.getXpAwarded())) {
                                return participant;
                        }

            participant.setStatus("completed");

            if (participant.getCompletedAt() == null) {
                participant.setCompletedAt(
                        LocalDateTime.now()
                );
            }

                        user.setTotalXp(user.getTotalXp() + challenge.getXp());
                        participant.setXpAwarded(true);
                        userRepository.save(user);

        } else {

            participant.setStatus("active");
            participant.setCompletedAt(null);
        }

        return participantRepository.save(participant);
    }

        private User getUser(String email) {
                return userRepository.findByEmail(email)
                                .orElseThrow(() -> new RuntimeException("User not found"));
        }

        private void seedChallenges(User creator) {
                LocalDate today = java.time.LocalDate.now();
                createChallenge(creator, "Plastic-Free Week", "Avoid all single-use plastic for seven consecutive days.", "Waste Reduction", 4, 60, "Easy", "b1", today.plusDays(4));
                createChallenge(creator, "Cycle To Work", "Log at least 3 cycling commutes this month.", "Green Transportation", 11, 80, "Easy", null, today.plusDays(11));
                createChallenge(creator, "Energy Saving Challenge", "Reduce electricity draw by 10% versus last month.", "Renewable Energy", 18, 120, "Medium", "b2", today.plusDays(18));
                createChallenge(creator, "Tree Plantation Drive", "Plant and register at least one tree with photo proof.", "Climate Action", 25, 150, "Medium", null, today.plusDays(25));
                createChallenge(creator, "Water Conservation Week", "Cut household water use by 20% for a week.", "Water Conservation", 7, 70, "Easy", null, today.plusDays(7));
                createChallenge(creator, "Zero Waste Challenge", "Send nothing to landfill for two weeks straight.", "Waste Reduction", 13, 200, "Hard", "b3", today.plusDays(13));
        }

        private void createChallenge(User creator, String title, String description, String category,
                                                                 int days, int xp, String difficulty, String badgeId,
                                                                 java.time.LocalDate endDate) {
                if (challengeRepository.findByTitle(title).isPresent()) {
                        return;
                }
                challengeRepository.save(Challenge.builder()
                                .createdBy(creator).title(title).description(description).category(category)
                                .startDate(java.time.LocalDate.now()).endDate(endDate).rewardPoints(xp)
                                .xp(xp).difficulty(difficulty).badgeId(badgeId).status("active").build());
        }
}