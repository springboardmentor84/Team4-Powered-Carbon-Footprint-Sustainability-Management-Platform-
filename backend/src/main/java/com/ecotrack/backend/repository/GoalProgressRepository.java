package com.ecotrack.backend.repository;

import com.ecotrack.backend.model.GoalProgress;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalProgressRepository extends JpaRepository<GoalProgress, Integer> {
	List<GoalProgress> findByGoalIdOrderByRecordedDateAsc(Integer goalId);
}
