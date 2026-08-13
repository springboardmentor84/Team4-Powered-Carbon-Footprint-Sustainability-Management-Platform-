package com.ecotrack.backend.controller;

import com.ecotrack.backend.dto.GoalRequest;
import com.ecotrack.backend.entity.Goal;
import com.ecotrack.backend.entity.GoalProgress;
import com.ecotrack.backend.service.GoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/goals")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class GoalController {

	private final GoalService goalService;

	// Save Goal (uses existing GoalRequest DTO)
	@PostMapping("/add")
	public ResponseEntity<Goal> saveGoal(@RequestBody GoalRequest request) {
		return ResponseEntity.ok(goalService.saveGoal(request));
	}

	// Get User Goals
	@GetMapping("/user/{email}")
	public ResponseEntity<List<Goal>> getUserGoals(@PathVariable String email) {
		return ResponseEntity.ok(goalService.getUserGoals(email));
	}

	// Update simple numeric progress
	@PutMapping("/progress/{id}")
	public ResponseEntity<Goal> updateProgress(
			@PathVariable Long id,
			@RequestParam Double currentKg) {
		return ResponseEntity.ok(goalService.updateProgress(id, currentKg));
	}

	// Get single goal by id
	@GetMapping("/{id}")
	public ResponseEntity<Goal> getGoalById(@PathVariable Long id) {
		return ResponseEntity.ok(goalService.getGoalById(id));
	}

	// Delete
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, String>> deleteGoal(@PathVariable Long id) {
		goalService.deleteGoal(id);
		Map<String, String> response = new HashMap<>();
		response.put("message", "Goal deleted successfully");
		return ResponseEntity.ok(response);
	}

	// Add progress record
	@PostMapping("/{goalId}/progress")
	public ResponseEntity<GoalProgress> addProgress(@PathVariable Long goalId, @RequestBody GoalProgress progress) {
		return ResponseEntity.status(HttpStatus.CREATED).body(goalService.addProgress(goalId, progress));
	}

	// List progress records
	@GetMapping("/{goalId}/progress")
	public ResponseEntity<List<GoalProgress>> getProgress(@PathVariable Long goalId) {
		return ResponseEntity.ok(goalService.getProgressForGoal(goalId));
	}

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<Map<String, String>> handleGoalError(RuntimeException exception) {
		Map<String, String> response = new HashMap<>();
		response.put("error", exception.getMessage());
		HttpStatus status = exception.getMessage() != null && exception.getMessage().startsWith("Goal not found")
				? HttpStatus.NOT_FOUND : HttpStatus.BAD_REQUEST;
		return ResponseEntity.status(status).body(response);
	}
}
