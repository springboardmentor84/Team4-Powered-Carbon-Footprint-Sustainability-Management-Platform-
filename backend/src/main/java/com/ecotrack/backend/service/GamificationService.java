package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.GamificationResponse;
import com.ecotrack.backend.dto.LeaderboardResponse;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.ChallengeParticipantRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GamificationService {
    private static final List<GamificationResponse.LevelResponse> LEVELS = List.of(
            new GamificationResponse.LevelResponse(1, "Green Beginner", 0),
            new GamificationResponse.LevelResponse(2, "Eco Warrior", 250),
            new GamificationResponse.LevelResponse(3, "Climate Hero", 600),
            new GamificationResponse.LevelResponse(4, "Planet Protector", 1000));

    private final UserRepository userRepository;
    private final ChallengeParticipantRepository participantRepository;

    @Transactional(readOnly = true)
    public GamificationResponse getProgress(String email) {
        User user = user(email);
        int xp = user.getTotalXp();
        GamificationResponse.LevelResponse current = levelFor(xp);
        int currentIndex = LEVELS.indexOf(current);
        GamificationResponse.LevelResponse next = currentIndex < LEVELS.size() - 1
                ? LEVELS.get(currentIndex + 1) : null;
        int progress = next == null ? 100 : Math.min(100,
                Math.max(0, Math.round((xp - current.minXp()) * 100f / (next.minXp() - current.minXp()))));
        long completed = participantRepository.countByUserAndStatus(user, "completed");
        List<GamificationResponse.BadgeResponse> badges = List.of(
                new GamificationResponse.BadgeResponse("b1", "Green Beginner", completed > 0, "Complete your first community challenge."),
                new GamificationResponse.BadgeResponse("b2", "Eco Warrior", xp >= 250, "Reach 250 XP."),
                new GamificationResponse.BadgeResponse("b3", "Sustainability Champion", completed >= 5, "Complete 5 community challenges."),
                new GamificationResponse.BadgeResponse("b4", "Climate Hero", xp >= 600, "Reach 600 XP."),
                new GamificationResponse.BadgeResponse("b5", "Planet Protector", xp >= 1000, "Reach 1000 XP."),
                new GamificationResponse.BadgeResponse("b6", "Goal Getter", false, "Achieve your first sustainability goal."));
        return new GamificationResponse(xp, current, next, progress, badges);
    }

    @Transactional(readOnly = true)
    public List<LeaderboardResponse> getLeaderboard(String email) {
                List<LeaderboardResponse> rows = userRepository.findByActiveTrueOrderByTotalXpDesc().stream()
                .map(user -> new LeaderboardResponse(0, user.getFullName(), user.getTotalXp(),
                        levelFor(user.getTotalXp()).name(), user.getEmail().equalsIgnoreCase(email)))
                                .toList();
                return java.util.stream.IntStream.range(0, rows.size())
                                .mapToObj(index -> {
                                        LeaderboardResponse row = rows.get(index);
                                        return new LeaderboardResponse(index + 1, row.name(), row.xp(), row.level(), row.isYou());
                                }).toList();
    }

    private User user(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    private GamificationResponse.LevelResponse levelFor(int xp) {
        return LEVELS.stream().filter(level -> xp >= level.minXp())
                .reduce((first, second) -> second).orElse(LEVELS.get(0));
    }
}