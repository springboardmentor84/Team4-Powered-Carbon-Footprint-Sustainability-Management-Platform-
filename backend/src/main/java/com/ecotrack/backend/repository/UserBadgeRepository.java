package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserBadgeRepository extends JpaRepository<User, Long> {
}
