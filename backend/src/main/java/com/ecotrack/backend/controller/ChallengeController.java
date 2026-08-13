package com.ecotrack.backend.controller;

import com.ecotrack.backend.entity.Challenge;
import com.ecotrack.backend.entity.ChallengeParticipant;
import com.ecotrack.backend.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/challenges")
@RequiredArgsConstructor
@CrossOrigin(
        origins = "http://localhost:4200",
        allowCredentials = "true"
)
public class ChallengeController {

    private final ChallengeService challengeService;


    // =========================================================
    // GET ALL CHALLENGES
    // =========================================================

    @GetMapping
    public ResponseEntity<List<Challenge>> getChallenges() {

        return ResponseEntity.ok(
                challengeService.getAllChallenges()
        );
    }


    // =========================================================
    // JOIN CHALLENGE
    // =========================================================

    @PostMapping("/{id}/join")
    public ResponseEntity<ChallengeParticipant> joinChallenge(
            @PathVariable Long id,
            @RequestParam String email
    ) {

        return ResponseEntity.ok(
                challengeService.joinChallenge(
                        id,
                        email
                )
        );
    }


    // =========================================================
    // LEAVE CHALLENGE
    // =========================================================

    @DeleteMapping("/{id}/leave")
    public ResponseEntity<Void> leaveChallenge(
            @PathVariable Long id,
            @RequestParam String email
    ) {

        challengeService.leaveChallenge(
                id,
                email
        );

        return ResponseEntity.noContent().build();
    }


    // =========================================================
    // MY CHALLENGES
    // =========================================================

    @GetMapping("/my")
    public ResponseEntity<List<ChallengeParticipant>> myChallenges(
            @RequestParam String email
    ) {

        return ResponseEntity.ok(
                challengeService.getUserChallenges(email)
        );
    }


    // =========================================================
    // UPDATE PROGRESS
    // =========================================================

    @PutMapping("/{id}/progress")
    public ResponseEntity<ChallengeParticipant> updateProgress(
            @PathVariable Long id,
            @RequestParam String email,
            @RequestParam Integer progress
    ) {

        return ResponseEntity.ok(
                challengeService.updateProgress(
                        id,
                        email,
                        progress
                )
        );
    }
}