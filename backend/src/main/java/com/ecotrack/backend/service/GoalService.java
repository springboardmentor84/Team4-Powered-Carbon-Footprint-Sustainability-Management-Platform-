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
				.status(request.getStatus())
				.user(user)
				.build();

		return goalRepository.save(goal);
	}

	// Get Logged-in User Goals
	public List<Goal> getUserGoals(String email) {

		User user = userRepository.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("User not found"));

		return goalRepository.findByUser(user);
	}

	// Update Goal Progress (simple currentKg update)
	public Goal updateProgress(Long id, Double currentKg) {

		Goal goal = goalRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Goal not found"));

		goal.setCurrentKg(currentKg);

		if (currentKg == 0) {
			goal.setStatus("Not Started");
		} else if (goal.getTargetKg() != null && currentKg >= goal.getTargetKg()) {
			goal.setStatus("Achieved");
		} else {
			goal.setStatus("On Track");
		}

		return goalRepository.save(goal);
	}

	public Goal getGoalById(Long id) {
		return goalRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Goal not found"));
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
				goal.setStatus("Achieved");
			} else if (newKg == 0) {
				goal.setStatus("Not Started");
			} else {
				goal.setStatus("On Track");
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
