package com.ecotrack.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

/**
 * Turns errors thrown in ChallengeService (like "Already joined this
 * challenge") into a clean JSON response { "error": "..." } instead of
 * Spring's default whitelabel HTML error page.
 *
 * If your teammate already added a global @RestControllerAdvice for auth
 * errors elsewhere, you can delete this file and add the
 * ResponseStatusException case there instead - just check with them first.
 */
@RestControllerAdvice
public class ChallengeExceptionHandler {

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<Map<String, String>> handleResponseStatus(ResponseStatusException ex) {
        HttpStatus status = HttpStatus.valueOf(ex.getStatusCode().value());
        return ResponseEntity.status(status).body(Map.of("error", ex.getReason()));
    }
}
