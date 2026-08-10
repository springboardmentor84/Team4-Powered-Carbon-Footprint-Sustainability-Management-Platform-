package com.ecotrack.backend.repository;

import com.ecotrack.backend.entity.CarbonEntry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * Repository for CarbonEntry persistence operations.
 * Extends JpaRepository to inherit standard CRUD methods.
 */
public interface CarbonEntryRepository extends JpaRepository<CarbonEntry, Long> {

    /**
     * Fetch all carbon entries belonging to a specific user.
     *
     * @param userId the ID of the authenticated user
     * @return list of the user's carbon entries
     */
    List<CarbonEntry> findByUser_Id(Long userId);

    /**
     * Fetch a single entry by its ID, but only if it belongs to the given user.
     * This prevents one user from accessing another user's data.
     *
     * @param id     the carbon entry ID
     * @param userId the authenticated user's ID
     * @return Optional wrapping the entry if found and owned by this user
     */
    Optional<CarbonEntry> findByIdAndUser_Id(Long id, Long userId);
}
