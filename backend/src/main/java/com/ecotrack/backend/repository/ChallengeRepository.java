package com.ecotrack.backend.repository;

import com.ecotrack.backend.model.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ChallengeRepository extends JpaRepository<Challenge, Integer> {

    List<Challenge> findByCategory(String category);

    List<Challenge> findByStatus(String status);
}
