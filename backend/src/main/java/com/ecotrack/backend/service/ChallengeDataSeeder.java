package com.ecotrack.backend.service;

import com.ecotrack.backend.model.Challenge;
import com.ecotrack.backend.repository.ChallengeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

/**
 * Runs once on startup and inserts sample challenges (Plastic-Free Week,
 * Cycle To Work, etc.) IF the challenges table is empty - so you have real
 * data in the Angular Challenges page without manually calling
 * POST /api/challenges six times.
 *
 * IMPORTANT: challenges.created_by is a required foreign key to users(id).
 * This seeder assumes a user with id = 1 already exists in your database
 * (e.g. an admin account created by your teammate's auth module). If no
 * such user exists yet, seeding will fail - that's caught below and logged
 * as a warning instead of crashing the whole app, so you can still run and
 * test everything else while your teammate finishes the User table.
 *
 * Safe to delete once real challenges exist in the database.
 */
@Component
public class ChallengeDataSeeder implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(ChallengeDataSeeder.class);

    // Change this if your first real user's id isn't 1.
    private static final Integer SEED_CREATED_BY_USER_ID = 1;

    private final ChallengeRepository challengeRepository;

    public ChallengeDataSeeder(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    @Override
    public void run(String... args) {
        if (challengeRepository.count() > 0) {
            return; // already seeded
        }

        try {
            seedAll();
        } catch (Exception e) {
            log.warn("Skipped seeding sample challenges - likely because user id={} doesn't exist yet " +
                    "in the users table. This is fine, it just means you won't see sample data until " +
                    "at least one user exists. Error: {}", SEED_CREATED_BY_USER_ID, e.getMessage());
        }
    }

    private void seedAll() {
        LocalDate today = LocalDate.now();

        save("Plastic-Free Week", "Avoid all single-use plastic for seven consecutive days.",
                "Waste Reduction", 60, today, today.plusDays(4));

        save("Cycle To Work", "Log at least 3 cycling commutes this month.",
                "Green Transportation", 80, today, today.plusDays(11));

        save("Energy Saving Challenge", "Reduce electricity draw by 10% versus last month.",
                "Renewable Energy", 120, today, today.plusDays(18));

        save("Tree Plantation Drive", "Plant and register at least one tree with photo proof.",
                "Climate Action", 150, today, today.plusDays(25));

        save("Water Conservation Week", "Cut household water usage for seven consecutive days.",
                "Water Conservation", 70, today, today.plusDays(7));

        save("Zero Waste Challenge", "Send nothing to landfill for two weeks straight.",
                "Waste Reduction", 100, today, today.plusDays(13));
    }

    private void save(String title, String description, String category,
                       int rewardPoints, LocalDate start, LocalDate end) {
        Challenge c = new Challenge();
        c.setCreatedBy(SEED_CREATED_BY_USER_ID);
        c.setTitle(title);
        c.setDescription(description);
        c.setCategory(category);
        c.setStartDate(start);
        c.setEndDate(end);
        c.setRewardPoints(rewardPoints);
        challengeRepository.save(c);
    }
}
