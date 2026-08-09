package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.CarbonEngineActivity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarbonEngineRepository
        extends JpaRepository<CarbonEngineActivity, Long> {

    List<CarbonEngineActivity> findByEmail(String email);
}