package com.ecotrack.backend.repository;

import com.ecotrack.backend.model.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalRepository extends JpaRepository<Goal, Integer> {
}
