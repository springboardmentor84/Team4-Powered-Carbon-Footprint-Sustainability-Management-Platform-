package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ChallengeRepository
        extends JpaRepository<Challenge, Long> {

    List<Challenge> findByStatus(String status);

    Optional<Challenge> findByTitle(String title);
}
