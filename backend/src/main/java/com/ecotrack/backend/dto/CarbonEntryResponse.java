package com.ecotrack.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * DTO returned to the client after any carbon entry operation.
 * Includes the calculated carbon emission = quantity * emissionFactor.factorValue.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarbonEntryResponse {

    private Long id;

    /** Owner of the entry. */
    private Long userId;

    /** The emission factor used. */
    private Long emissionFactorId;

    /** Human-readable category from the emission factor. */
    private String category;

    private BigDecimal quantity;

    private String unit;

    private LocalDate entryDate;

    private String source;

    private String notes;

    /** Calculated CO2 emission = quantity × factorValue (kg CO2e). */
    private BigDecimal carbonEmission;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
