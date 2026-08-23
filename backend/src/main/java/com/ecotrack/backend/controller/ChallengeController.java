package com.ecotrack.backend.controller;

import com.ecotrack.backend.entity.ChallengeParticipant;
import com.ecotrack.backend.dto.ChallengeResponse;
import com.ecotrack.backend.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.security.Principal;

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
        public ResponseEntity<List<ChallengeResponse>> getChallenges(Principal principal) {

        return ResponseEntity.ok(
                challengeService.getAllChallenges(principal.getName())
        );
    }


    // =========================================================
    // JOIN CHALLENGE
    // =========================================================

    @PostMapping("/{id}/join")
    public ResponseEntity<ChallengeParticipant> joinChallenge(
            @PathVariable Long id,
            Principal principal
    ) {

        return ResponseEntity.ok(
                challengeService.joinChallenge(
                        id,
                        principal.getName()
                )
        );
    }


    // =========================================================
    // LEAVE CHALLENGE
    // =========================================================

    @DeleteMapping("/{id}/leave")
    public ResponseEntity<Void> leaveChallenge(
            @PathVariable Long id,
            Principal principal
    ) {

        challengeService.leaveChallenge(
                id,
                principal.getName()
        );

        return ResponseEntity.noContent().build();
    }


    // =========================================================
    // MY CHALLENGES
    // =========================================================

    @GetMapping("/my")
    public ResponseEntity<List<ChallengeParticipant>> myChallenges(
            Principal principal
    ) {

        return ResponseEntity.ok(
                challengeService.getUserChallenges(principal.getName())
        );
    }


    // =========================================================
    // UPDATE PROGRESS
    // =========================================================

    @PutMapping("/{id}/progress")
    public ResponseEntity<ChallengeParticipant> updateProgress(
            @PathVariable Long id,
            Principal principal,
            @RequestParam Integer progress
    ) {

        return ResponseEntity.ok(
                challengeService.updateProgress(
                        id,
                        principal.getName(),
                        progress
                )
        );
    }
}