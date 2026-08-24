package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * Repository for Notification operations.
 */
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    /**
     * Get all notifications for a specific user, ordered by most recent first.
     */
    List<Notification> findByUser_IdOrderByCreatedAtDesc(Long userId);

    /**
     * Get only unread notifications for a user.
     */
    List<Notification> findByUser_IdAndIsReadFalseOrderByCreatedAtDesc(Long userId);

    /**
     * Find a notification by ID and user ID (security boundary).
     */
    Optional<Notification> findByIdAndUser_Id(Long id, Long userId);

    /**
     * Count unread notifications for a user.
     */
    Long countByUser_IdAndIsReadFalse(Long userId);
}
