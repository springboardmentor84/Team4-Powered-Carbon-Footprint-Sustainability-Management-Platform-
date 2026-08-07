package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.GoalRequest;
import com.ecotrack.backend.entity.Goal;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.GoalRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GoalService {

    private final GoalRepository goalRepository;
    private final UserRepository userRepository;

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
    // Update Goal Progress
    public Goal updateProgress(Long id, Double currentKg) {

        Goal goal = goalRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Goal not found"));

        goal.setCurrentKg(currentKg);

        if (currentKg == 0) {
            goal.setStatus("Not Started");
        } else if (currentKg >= goal.getTargetKg()) {
            goal.setStatus("Achieved");
        } else {
            goal.setStatus("On Track");
        }

        return goalRepository.save(goal);
    }
    public void deleteGoal(Long id){

        goalRepository.deleteById(id);

    }

}