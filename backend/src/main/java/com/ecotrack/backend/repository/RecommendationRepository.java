package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.Recommendation;
import com.ecotrack.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecommendationRepository
        extends JpaRepository<Recommendation, Long> {

    List<Recommendation> findByUserOrderByGeneratedAtDesc(User user);

    List<Recommendation> findByUserAndIsReadFalseOrderByGeneratedAtDesc(User user);
}