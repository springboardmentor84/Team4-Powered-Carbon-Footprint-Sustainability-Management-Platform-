package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.GoalRequest;
import com.ecotrack.backend.entity.Goal;
import com.ecotrack.backend.entity.GoalProgress;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.GoalProgressRepository;
import com.ecotrack.backend.repository.GoalRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GoalService {

	private final GoalRepository goalRepository;
	private final UserRepository userRepository;
	private final GoalProgressRepository goalProgressRepository;

	private String toDbStatus(String status) {
		if (status == null) {
			return "active";
		}

		switch (status.trim().toLowerCase()) {
			case "not started":
			case "on track":
			case "at risk":
			case "active":
				return "active";
			case "achieved":
			case "completed":
				return "completed";
			case "cancelled":
				return "cancelled";
			default:
				return "active";
		}
	}

	private String toDisplayStatus(String status) {
		if (status == null) {
			return "Not Started";
		}

		switch (status.trim().toLowerCase()) {
			case "active":
				return "On Track";
			case "completed":
				return "Achieved";
			case "cancelled":
				return "At Risk";
			default:
				return "Not Started";
		}
	}

	private Goal applyDisplayStatus(Goal goal) {
		if (goal != null) {
			goal.setStatus(toDisplayStatus(goal.getStatus()));
		}
		return goal;
	}

	// Save Goal
	public Goal saveGoal(GoalRequest request) {

		User user = userRepository.findByEmail(request.getEmail())
				.orElseThrow(() -> new RuntimeException("User not found"));

		Goal goal = Goal.builder()
				.title(request.getTitle())
				.type(request.getType())
				.targetKg(request.getTargetKg())
				.currentKg(request.getCurrentKg())
				.unit(request.getUnit())
				.startDate(request.getStartDate())
				.endDate(request.getEndDate())
				.status(toDbStatus(request.getStatus()))
				.user(user)
				.build();

		return applyDisplayStatus(goalRepository.save(goal));
	}

	// Get Logged-in User Goals
	public List<Goal> getUserGoals(String email) {

		User user = userRepository.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("User not found"));

		return goalRepository.findByUser(user).stream()
				.map(this::applyDisplayStatus)
				.toList();
	}

	// Update Goal Progress (simple currentKg update)
	public Goal updateProgress(Long id, Double currentKg) {

		Goal goal = goalRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Goal not found"));

		goal.setCurrentKg(currentKg);

		if (currentKg == 0) {
			goal.setStatus("active");
		} else if (goal.getTargetKg() != null && currentKg >= goal.getTargetKg()) {
			goal.setStatus("completed");
		} else {
			goal.setStatus("active");
		}

		return applyDisplayStatus(goalRepository.save(goal));
	}

	public Goal getGoalById(Long id) {
		return applyDisplayStatus(goalRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Goal not found")));
	}

	public void deleteGoal(Long id){

		goalRepository.deleteById(id);

	}

	// Add a progress record for a goal and update currentKg
	public GoalProgress addProgress(Long goalId, GoalProgress progress) {
		Goal goal = goalRepository.findById(goalId)
				.orElseThrow(() -> new RuntimeException("Goal not found"));

		if (progress == null || progress.getProgressValue() == null
				|| progress.getProgressValue().compareTo(BigDecimal.ZERO) < 0) {
			throw new RuntimeException("Progress value must not be negative");
		}

		if (progress.getRecordedDate() == null) {
			progress.setRecordedDate(LocalDate.now());
		}

		progress.setGoal(goal);

		// update goal currentKg if possible
		try {
			Double newKg = progress.getProgressValue().doubleValue();
			goal.setCurrentKg(newKg);
			if (goal.getTargetKg() != null && newKg >= goal.getTargetKg()) {
				goal.setStatus("completed");
			} else if (newKg == 0) {
				goal.setStatus("active");
			} else {
				goal.setStatus("active");
			}
			goalRepository.save(goal);
		} catch (Exception ignored) {
		}

		return goalProgressRepository.save(progress);
	}

	public List<GoalProgress> getProgressForGoal(Long goalId) {
		goalRepository.findById(goalId).orElseThrow(() -> new RuntimeException("Goal not found"));
		return goalProgressRepository.findByGoalIdOrderByRecordedDateAsc(goalId);
	}
}
