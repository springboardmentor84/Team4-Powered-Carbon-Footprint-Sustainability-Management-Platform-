package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.GoalProgress;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalProgressRepository extends JpaRepository<GoalProgress, Long> {
	List<GoalProgress> findByGoalIdOrderByRecordedDateAsc(Long goalId);
}
