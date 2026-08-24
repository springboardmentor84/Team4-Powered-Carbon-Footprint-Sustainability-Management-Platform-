package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.ChallengeRequest;
import com.ecotrack.backend.dto.ChallengeResponse;
import com.ecotrack.backend.dto.LeaderboardEntryResponse;
import com.ecotrack.backend.model.Challenge;
import com.ecotrack.backend.model.ChallengeParticipant;
import com.ecotrack.backend.repository.ChallengeParticipantRepository;
import com.ecotrack.backend.repository.ChallengeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ChallengeService {

    // XP/points thresholds for each badge level - tweak to match your Gamification module.
    private static final int ECO_WARRIOR_POINTS = 300;
    private static final int CLIMATE_HERO_POINTS = 600;
    private static final int PLANET_PROTECTOR_POINTS = 900;

    // Status values used in the "status" text columns.
    private static final String STATUS_ACTIVE = "active";
    private static final String STATUS_COMPLETED = "completed";
    private static final String STATUS_LEFT = "left";

    private final ChallengeRepository challengeRepository;
    private final ChallengeParticipantRepository participantRepository;

    public ChallengeService(ChallengeRepository challengeRepository,
                             ChallengeParticipantRepository participantRepository) {
        this.challengeRepository = challengeRepository;
        this.participantRepository = participantRepository;
    }

    // ---------- Create a challenge ----------

    public Challenge createChallenge(ChallengeRequest request) {
        Challenge challenge = new Challenge();
        challenge.setCreatedBy(request.getCreatedBy());
        challenge.setTitle(request.getTitle());
        challenge.setDescription(request.getDescription());
        challenge.setCategory(request.getCategory());
        challenge.setStartDate(request.getStartDate());
        challenge.setEndDate(request.getEndDate());
        if (request.getRewardPoints() != null) {
            challenge.setRewardPoints(request.getRewardPoints());
        }
        return challengeRepository.save(challenge);
    }

    // ---------- Browse challenges ----------

    public List<ChallengeResponse> listChallenges(String categoryFilter, Integer currentUserId) {
        List<Challenge> challenges = (categoryFilter == null)
                ? challengeRepository.findAll()
                : challengeRepository.findByCategory(categoryFilter);

        List<ChallengeResponse> result = new ArrayList<>();
        for (Challenge challenge : challenges) {
            result.add(toResponse(challenge, currentUserId));
        }
        return result;
    }

    public ChallengeResponse getChallenge(Integer challengeId, Integer currentUserId) {
        Challenge challenge = findChallengeOrThrow(challengeId);
        return toResponse(challenge, currentUserId);
    }

    private ChallengeResponse toResponse(Challenge challenge, Integer currentUserId) {
        long joinedCount = participantRepository.countByChallenge_Id(challenge.getId());

        String myStatus = null;
        BigDecimal myProgress = BigDecimal.ZERO;
        if (currentUserId != null) {
            Optional<ChallengeParticipant> mine =
                    participantRepository.findByChallenge_IdAndUserId(challenge.getId(), currentUserId);
            if (mine.isPresent() && !STATUS_LEFT.equals(mine.get().getStatus())) {
                myStatus = mine.get().getStatus();
                myProgress = mine.get().getProgressValue();
            }
        }
        return ChallengeResponse.from(challenge, joinedCount, myStatus, myProgress);
    }

    // ---------- Join / Leave / Progress / Complete ----------

    public void joinChallenge(Integer challengeId, Integer userId) {
        Challenge challenge = findChallengeOrThrow(challengeId);

        Optional<ChallengeParticipant> existing =
                participantRepository.findByChallenge_IdAndUserId(challengeId, userId);

        if (existing.isPresent() && !STATUS_LEFT.equals(existing.get().getStatus())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Already joined this challenge");
        }

        ChallengeParticipant participant = existing.orElseGet(ChallengeParticipant::new);
        participant.setChallenge(challenge);
        participant.setUserId(userId);
        participant.setStatus(STATUS_ACTIVE);
        participant.setProgressValue(BigDecimal.ZERO);
        participant.setCompletedAt(null);
        participantRepository.save(participant);
    }

    public void leaveChallenge(Integer challengeId, Integer userId) {
        ChallengeParticipant participant = findParticipantOrThrow(challengeId, userId);
        participant.setStatus(STATUS_LEFT);
        participantRepository.save(participant);
    }

    public void updateProgress(Integer challengeId, Integer userId, BigDecimal progressValue) {
        ChallengeParticipant participant = findParticipantOrThrow(challengeId, userId);
        participant.setProgressValue(progressValue);
        participantRepository.save(participant);
    }

    /** Matches the "Complete Task" button in the UI. */
    public void completeTask(Integer challengeId, Integer userId) {
        ChallengeParticipant participant = findParticipantOrThrow(challengeId, userId);
        participant.setStatus(STATUS_COMPLETED);
        participant.setCompletedAt(LocalDateTime.now());
        participantRepository.save(participant);
    }

    // ---------- Leaderboard ----------

    public List<LeaderboardEntryResponse> getLeaderboard() {
        List<Object[]> raw = participantRepository.findLeaderboardRaw();
        List<LeaderboardEntryResponse> leaderboard = new ArrayList<>();

        int rank = 1;
        for (Object[] row : raw) {
            Integer userId = (Integer) row[0];
            long totalPoints = ((Number) row[1]).longValue();
            leaderboard.add(new LeaderboardEntryResponse(rank, userId, totalPoints, badgeLevelFor(totalPoints)));
            rank++;
        }
        return leaderboard;
    }

    private String badgeLevelFor(long totalPoints) {
        if (totalPoints >= PLANET_PROTECTOR_POINTS) return "Planet Protector";
        if (totalPoints >= CLIMATE_HERO_POINTS) return "Climate Hero";
        if (totalPoints >= ECO_WARRIOR_POINTS) return "Eco Warrior";
        return "Green Beginner";
    }

    // ---------- helpers ----------

    private Challenge findChallengeOrThrow(Integer challengeId) {
        return challengeRepository.findById(challengeId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Challenge not found"));
    }

    private ChallengeParticipant findParticipantOrThrow(Integer challengeId, Integer userId) {
        return participantRepository.findByChallenge_IdAndUserId(challengeId, userId)
                .filter(p -> !STATUS_LEFT.equals(p.getStatus()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "You haven't joined this challenge"));
    }
}
