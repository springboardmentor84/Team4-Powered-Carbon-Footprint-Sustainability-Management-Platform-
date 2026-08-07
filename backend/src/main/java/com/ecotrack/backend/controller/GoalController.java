package com.ecotrack.backend.controller;

import com.ecotrack.backend.dto.GoalRequest;
import com.ecotrack.backend.entity.Goal;
import com.ecotrack.backend.service.GoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/goals")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class GoalController {

    private final GoalService goalService;

    // Save Goal
    @PostMapping("/add")
    public ResponseEntity<Goal> saveGoal(@RequestBody GoalRequest request) {

        return ResponseEntity.ok(
                goalService.saveGoal(request)
        );
    }

    // Get User Goals
    @GetMapping("/user/{email}")
    public ResponseEntity<List<Goal>> getUserGoals(@PathVariable String email) {

        return ResponseEntity.ok(
                goalService.getUserGoals(email)
        );
    }
    @PutMapping("/progress/{id}")
    public ResponseEntity<Goal> updateProgress(
            @PathVariable Long id,
            @RequestParam Double currentKg) {

        return ResponseEntity.ok(
                goalService.updateProgress(id, currentKg)
        );
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteGoal(@PathVariable Long id){

        goalService.deleteGoal(id);

        return ResponseEntity.ok("Goal Deleted Successfully");

    }
}