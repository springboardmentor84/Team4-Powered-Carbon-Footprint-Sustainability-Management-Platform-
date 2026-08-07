package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.CarbonActivity;
import com.ecotrack.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarbonActivityRepository extends JpaRepository<CarbonActivity, Long> {

    List<CarbonActivity> findByUser(User user);

}