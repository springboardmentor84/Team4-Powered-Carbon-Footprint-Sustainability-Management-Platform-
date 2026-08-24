package com.ecotrack.backend.controller;

import com.ecotrack.backend.dto.ChallengeRequest;
import com.ecotrack.backend.dto.ChallengeResponse;
import com.ecotrack.backend.dto.LeaderboardEntryResponse;
import com.ecotrack.backend.dto.ProgressUpdateRequest;
import com.ecotrack.backend.model.Challenge;
import com.ecotrack.backend.service.ChallengeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST endpoints for the Community Challenges module.
 *
 * IMPORTANT - about userId:
 * Every endpoint that needs to know "who is calling" takes a `userId`
 * query param, e.g. POST /api/challenges/5/join?userId=1
 * That's a placeholder until your teammate's JWT auth is ready. Once it
 * is, swap these params for something like:
 *
 *   @AuthenticationPrincipal CustomUserDetails currentUser
 *
 * and read currentUser.getId() instead.
 */
@RestController
@RequestMapping("/api/challenges")
public class ChallengeController {

    private final ChallengeService challengeService;

    public ChallengeController(ChallengeService challengeService) {
        this.challengeService = challengeService;
    }

    /** GET /api/challenges?userId=1 */
    @GetMapping
    public List<ChallengeResponse> listChallenges(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Integer userId) {
        return challengeService.listChallenges(category, userId);
    }

    /** GET /api/challenges/5?userId=1 */
    @GetMapping("/{id}")
    public ChallengeResponse getChallenge(
            @PathVariable("id") Integer challengeId,
            @RequestParam(required = false) Integer userId) {
        return challengeService.getChallenge(challengeId, userId);
    }

    /** POST /api/challenges  - JSON body, see ChallengeRequest */
    @PostMapping
    public ResponseEntity<Challenge> createChallenge(@RequestBody ChallengeRequest request) {
        Challenge created = challengeService.createChallenge(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    /** POST /api/challenges/5/join?userId=1 */
    @PostMapping("/{id}/join")
    public ResponseEntity<Void> joinChallenge(
            @PathVariable("id") Integer challengeId,
            @RequestParam Integer userId) {
        challengeService.joinChallenge(challengeId, userId);
        return ResponseEntity.ok().build();
    }

    /** POST /api/challenges/5/leave?userId=1 */
    @PostMapping("/{id}/leave")
    public ResponseEntity<Void> leaveChallenge(
            @PathVariable("id") Integer challengeId,
            @RequestParam Integer userId) {
        challengeService.leaveChallenge(challengeId, userId);
        return ResponseEntity.ok().build();
    }

    /** PATCH /api/challenges/5/progress?userId=1  body: { "progressValue": 3 } */
    @PatchMapping("/{id}/progress")
    public ResponseEntity<Void> updateProgress(
            @PathVariable("id") Integer challengeId,
            @RequestParam Integer userId,
            @RequestBody ProgressUpdateRequest request) {
        challengeService.updateProgress(challengeId, userId, request.getProgressValue());
        return ResponseEntity.ok().build();
    }

    /** POST /api/challenges/5/complete?userId=1  - matches the "Complete Task" button */
    @PostMapping("/{id}/complete")
    public ResponseEntity<Void> completeTask(
            @PathVariable("id") Integer challengeId,
            @RequestParam Integer userId) {
        challengeService.completeTask(challengeId, userId);
        return ResponseEntity.ok().build();
    }

    /** GET /api/challenges/leaderboard - powers the "Community Rankings" card */
    @GetMapping("/leaderboard")
    public List<LeaderboardEntryResponse> getLeaderboard() {
        return challengeService.getLeaderboard();
    }
}
