package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EcoScoreRepository extends JpaRepository<User, Long> {
}
