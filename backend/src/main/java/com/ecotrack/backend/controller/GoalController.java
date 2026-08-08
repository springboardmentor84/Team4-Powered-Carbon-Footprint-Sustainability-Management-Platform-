package com.ecotrack.backend.controller;

import com.ecotrack.backend.model.Goal;
import com.ecotrack.backend.model.GoalProgress;
import com.ecotrack.backend.service.GoalService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/goals")
public class GoalController {

	private final GoalService goalService;

	public GoalController(GoalService goalService) {
		this.goalService = goalService;
	}

	@PostMapping
	public ResponseEntity<Goal> createGoal(@RequestBody Goal goal) {
		return ResponseEntity.status(HttpStatus.CREATED).body(goalService.createGoal(goal));
	}

	@GetMapping
	public ResponseEntity<List<Goal>> getAllGoals() {
		return ResponseEntity.ok(goalService.getAllGoals());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Goal> getGoalById(@PathVariable Integer id) {
		return ResponseEntity.ok(goalService.getGoalById(id));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Goal> updateGoal(@PathVariable Integer id, @RequestBody Goal goal) {
		return ResponseEntity.ok(goalService.updateGoal(id, goal));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, String>> deleteGoal(@PathVariable Integer id) {
		goalService.deleteGoal(id);
		Map<String, String> response = new HashMap<>();
		response.put("message", "Goal deleted successfully");
		return ResponseEntity.ok(response);
	}

	@PostMapping("/{goalId}/progress")
	public ResponseEntity<GoalProgress> addProgress(
			@PathVariable Integer goalId, @RequestBody GoalProgress progress) {
		return ResponseEntity.status(HttpStatus.CREATED).body(goalService.addProgress(goalId, progress));
	}

	@GetMapping("/{goalId}/progress")
	public ResponseEntity<List<GoalProgress>> getProgress(@PathVariable Integer goalId) {
		return ResponseEntity.ok(goalService.getProgressForGoal(goalId));
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<Map<String, String>> handleGoalError(IllegalArgumentException exception) {
		Map<String, String> response = new HashMap<>();
		response.put("error", exception.getMessage());
		HttpStatus status = exception.getMessage() != null && exception.getMessage().startsWith("Goal not found")
				? HttpStatus.NOT_FOUND : HttpStatus.BAD_REQUEST;
		return ResponseEntity.status(status).body(response);
	}
}
