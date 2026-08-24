package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.NotificationRequest;
import com.ecotrack.backend.dto.NotificationResponse;
import com.ecotrack.backend.entity.Notification;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.exception.ResourceNotFoundException;
import com.ecotrack.backend.exception.UnauthorizedAccessException;
import com.ecotrack.backend.repository.NotificationRepository;
import com.ecotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service layer for notification business logic.
 * Handles CRUD operations and user-scoped security.
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;

    /**
     * Create a notification for the authenticated user.
     */
    @Transactional
    public NotificationResponse createNotification(NotificationRequest request) {
        User currentUser = getAuthenticatedUser();

        Notification notification = Notification.builder()
                .user(currentUser)
                .title(request.getTitle())
                .message(request.getMessage())
                .type(request.getType())
                .isRead(false)
                .build();

        return toResponse(notificationRepository.save(notification));
    }

    /**
     * Get all notifications for the authenticated user.
     */
    public List<NotificationResponse> getAllNotifications() {
        User currentUser = getAuthenticatedUser();
        return notificationRepository.findByUser_IdOrderByCreatedAtDesc(currentUser.getId())
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    /**
     * Get only unread notifications for the authenticated user.
     */
    public List<NotificationResponse> getUnreadNotifications() {
        User currentUser = getAuthenticatedUser();
        return notificationRepository.findByUser_IdAndIsReadFalseOrderByCreatedAtDesc(currentUser.getId())
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    /**
     * Get unread notification count.
     */
    public Long getUnreadCount() {
        User currentUser = getAuthenticatedUser();
        return notificationRepository.countByUser_IdAndIsReadFalse(currentUser.getId());
    }

    /**
     * Get a single notification by ID (must belong to authenticated user).
     */
    public NotificationResponse getNotificationById(Long id) {
        User currentUser = getAuthenticatedUser();
        Notification notification = findNotificationOwnedByUser(id, currentUser.getId());
        return toResponse(notification);
    }

    /**
     * Mark a notification as read.
     */
    @Transactional
    public NotificationResponse markAsRead(Long id) {
        User currentUser = getAuthenticatedUser();
        Notification notification = findNotificationOwnedByUser(id, currentUser.getId());
        notification.setIsRead(true);
        return toResponse(notificationRepository.save(notification));
    }

    /**
     * Mark all notifications as read for the authenticated user.
     */
    @Transactional
    public void markAllAsRead() {
        User currentUser = getAuthenticatedUser();
        List<Notification> unreadNotifications = notificationRepository
                .findByUser_IdAndIsReadFalseOrderByCreatedAtDesc(currentUser.getId());
        
        unreadNotifications.forEach(n -> n.setIsRead(true));
        notificationRepository.saveAll(unreadNotifications);
    }

    /**
     * Delete a notification (must belong to authenticated user).
     */
    @Transactional
    public void deleteNotification(Long id) {
        User currentUser = getAuthenticatedUser();
        Notification notification = findNotificationOwnedByUser(id, currentUser.getId());
        notificationRepository.delete(notification);
    }

    // -------------------------------------------------------------------------
    // Private helpers
    // -------------------------------------------------------------------------

    private User getAuthenticatedUser() {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Authenticated user not found: " + email));
    }

    private Notification findNotificationOwnedByUser(Long notificationId, Long userId) {
        if (!notificationRepository.existsById(notificationId)) {
            throw new ResourceNotFoundException(
                    "Notification not found with id: " + notificationId);
        }
        return notificationRepository.findByIdAndUser_Id(notificationId, userId)
                .orElseThrow(() -> new UnauthorizedAccessException(
                        "You do not have permission to access notification with id: " + notificationId));
    }

    private NotificationResponse toResponse(Notification notification) {
        return NotificationResponse.builder()
                .id(notification.getId())
                .userId(notification.getUser().getId())
                .title(notification.getTitle())
                .message(notification.getMessage())
                .type(notification.getType())
                .isRead(notification.getIsRead())
                .createdAt(notification.getCreatedAt())
                .build();
    }
}
