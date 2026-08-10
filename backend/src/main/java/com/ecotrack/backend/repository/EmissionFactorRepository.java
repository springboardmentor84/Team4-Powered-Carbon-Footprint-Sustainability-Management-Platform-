package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.EmissionFactor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Repository for EmissionFactor lookup operations.
 */
public interface EmissionFactorRepository extends JpaRepository<EmissionFactor, Long> {

    /**
     * Find all emission factors for a given category (case-insensitive).
     */
    List<EmissionFactor> findByCategoryIgnoreCase(String category);
}
