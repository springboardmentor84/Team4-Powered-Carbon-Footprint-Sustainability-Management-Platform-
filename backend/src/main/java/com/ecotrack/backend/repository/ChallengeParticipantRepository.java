package com.ecotrack.backend.repository;

import com.ecotrack.backend.model.ChallengeParticipant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;

public interface ChallengeParticipantRepository extends JpaRepository<ChallengeParticipant, Integer> {

    Optional<ChallengeParticipant> findByChallenge_IdAndUserId(Integer challengeId, Integer userId);

    List<ChallengeParticipant> findByUserId(Integer userId);

    List<ChallengeParticipant> findByChallenge_Id(Integer challengeId);

    long countByChallenge_Id(Integer challengeId);

    /**
     * Adds up reward_points from every COMPLETED participation, per user,
     * highest first. Powers the /leaderboard endpoint.
     * Each row in the result is: [0]=userId, [1]=totalPoints
     * (No username here - the table doesn't store one. Once User.java
     * exists we can join to it for real names.)
     */
    @Query("""
            select p.userId, sum(c.rewardPoints)
            from ChallengeParticipant p
            join p.challenge c
            where p.status = 'completed'
            group by p.userId
            order by sum(c.rewardPoints) desc
            """)
    List<Object[]> findLeaderboardRaw();
}
