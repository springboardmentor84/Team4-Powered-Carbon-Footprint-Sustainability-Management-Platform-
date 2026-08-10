package com.ecotrack.backend.dto;

import com.ecotrack.backend.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * DTO returned to the client after any carbon entry operation.
 * Deliberately excludes the full User object to avoid exposing sensitive data.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarbonEntryResponse {

    private Long id;

    /** ID of the user who owns this entry. */
    private Long userId;

    private Category category;

    private String activity;

    private Double value;

    private String unit;

    /** Carbon emission in kg CO2 equivalent. */
    private Double carbonEmission;

    private LocalDateTime createdAt;
}
