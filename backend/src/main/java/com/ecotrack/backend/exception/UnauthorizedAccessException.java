package com.ecotrack.backend.exception;

/**
 * Thrown when an authenticated user attempts to access or modify
 * a resource that does not belong to them.
 * Mapped to HTTP 403 Forbidden by the GlobalExceptionHandler.
 */
public class UnauthorizedAccessException extends RuntimeException {

    public UnauthorizedAccessException(String message) {
        super(message);
    }
}
