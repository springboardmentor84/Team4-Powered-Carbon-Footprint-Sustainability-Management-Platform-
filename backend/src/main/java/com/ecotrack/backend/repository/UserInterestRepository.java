package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInterestRepository extends JpaRepository<User, Long> {
}
