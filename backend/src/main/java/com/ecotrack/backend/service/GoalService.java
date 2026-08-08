package com.ecotrack.backend.service;

import com.ecotrack.backend.model.Goal;
import com.ecotrack.backend.model.GoalProgress;
import com.ecotrack.backend.model.GoalStatus;
import com.ecotrack.backend.repository.GoalProgressRepository;
import com.ecotrack.backend.repository.GoalRepository;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class GoalService {

	private final GoalRepository goalRepository;
	private final GoalProgressRepository goalProgressRepository;

	public GoalService(GoalRepository goalRepository, GoalProgressRepository goalProgressRepository) {
		this.goalRepository = goalRepository;
		this.goalProgressRepository = goalProgressRepository;
	}

	public Goal createGoal(Goal goal) {
		validateGoal(goal);
		if (goal.getCurrentValue() == null) {
			goal.setCurrentValue(BigDecimal.ZERO);
		}
		if (goal.getStatus() == null) {
			goal.setStatus(GoalStatus.ACTIVE);
		}
		return goalRepository.save(goal);
	}

	public List<Goal> getAllGoals() {
		return goalRepository.findAll();
	}

	public Goal getGoalById(Integer id) {
		return goalRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Goal not found: " + id));
	}

	public Goal updateGoal(Integer id, Goal goal) {
		Goal existingGoal = getGoalById(id);
		validateGoal(goal);

		existingGoal.setUserId(goal.getUserId());
		existingGoal.setTitle(goal.getTitle());
		existingGoal.setDescription(goal.getDescription());
		existingGoal.setTargetValue(goal.getTargetValue());
		existingGoal.setCurrentValue(goal.getCurrentValue() == null
				? existingGoal.getCurrentValue() : goal.getCurrentValue());
		existingGoal.setUnit(goal.getUnit());
		existingGoal.setStartDate(goal.getStartDate());
		existingGoal.setEndDate(goal.getEndDate());
		if (goal.getStatus() != null) {
			existingGoal.setStatus(goal.getStatus());
		}

		return goalRepository.save(existingGoal);
	}

	public void deleteGoal(Integer id) {
		Goal goal = getGoalById(id);
		goalRepository.delete(goal);
	}

	public GoalProgress addProgress(Integer goalId, GoalProgress progress) {
		Goal goal = getGoalById(goalId);
		if (progress == null || progress.getProgressValue() == null
				|| progress.getProgressValue().compareTo(BigDecimal.ZERO) < 0) {
			throw new IllegalArgumentException("Progress value must not be negative");
		}
		if (progress.getRecordedDate() == null) {
			progress.setRecordedDate(LocalDate.now());
		}

		progress.setGoal(goal);
		goal.setCurrentValue(progress.getProgressValue());
		goalRepository.save(goal);
		return goalProgressRepository.save(progress);
	}

	public List<GoalProgress> getProgressForGoal(Integer goalId) {
		getGoalById(goalId);
		return goalProgressRepository.findByGoalIdOrderByRecordedDateAsc(goalId);
	}

	private void validateGoal(Goal goal) {
		if (goal == null) {
			throw new IllegalArgumentException("Goal is required");
		}
		if (goal.getTitle() == null || goal.getTitle().trim().isEmpty()) {
			throw new IllegalArgumentException("Goal title is required");
		}
		if (goal.getTargetValue() == null || goal.getTargetValue().compareTo(BigDecimal.ZERO) <= 0) {
			throw new IllegalArgumentException("Target value must be positive");
		}
		if (goal.getUnit() == null || goal.getUnit().trim().isEmpty()) {
			throw new IllegalArgumentException("Goal unit is required");
		}
		if (goal.getStartDate() == null) {
			throw new IllegalArgumentException("Start date is required");
		}
		if (goal.getEndDate() != null && goal.getEndDate().isBefore(goal.getStartDate())) {
			throw new IllegalArgumentException("End date cannot be before start date");
		}
		if (goal.getStatus() != null && !List.of(GoalStatus.ACTIVE, GoalStatus.COMPLETED, GoalStatus.CANCELLED)
				.contains(goal.getStatus())) {
			throw new IllegalArgumentException("Invalid goal status");
		}
	}
}
