package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.CarbonActivity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmissionFactorRepository extends JpaRepository<CarbonActivity, Long> {
}
