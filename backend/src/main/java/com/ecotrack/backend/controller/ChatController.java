package com.ecotrack.backend.controller;

import com.ecotrack.backend.entity.CarbonActivity;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.CarbonActivityRepository;
import com.ecotrack.backend.repository.UserRepository;
import com.ecotrack.backend.service.OllamaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ChatController {

    private final OllamaService ollamaService;
    private final UserRepository userRepository;
    private final CarbonActivityRepository carbonActivityRepository;

    @PostMapping
    public Map<String, Object> chat(
            @RequestBody Map<String, String> request
    ) {

        String message = request.get("message");
        String email = request.get("email");

        if (message == null || message.trim().isEmpty()) {

            return Map.of(
                    "success", false,
                    "message", "Please enter a message."
            );
        }

        if (email == null || email.trim().isEmpty()) {

            return Map.of(
                    "success", false,
                    "message", "User email is required."
            );
        }

        try {

            User user = userRepository.findByEmail(email)
                    .orElseThrow(() ->
                            new RuntimeException("User not found")
                    );

            List<CarbonActivity> activities =
                    carbonActivityRepository.findByUser(user);

            String reply = ollamaService.personalizedChat(
                    message,
                    email,
                    activities
            );

            return Map.of(
                    "success", true,
                    "message", reply
            );

        } catch (Exception e) {

            e.printStackTrace();

            return Map.of(
                    "success", false,
                    "message",
                    "Unable to load your EcoTrack data right now."
            );
        }
    }
}