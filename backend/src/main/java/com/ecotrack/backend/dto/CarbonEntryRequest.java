package com.ecotrack.backend.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * DTO for creating or updating a carbon entry.
 * The client supplies the emissionFactorId to link to the correct
 * EmissionFactor record from the emission_factors table.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarbonEntryRequest {

    /**
     * ID of the emission factor to use for this entry.
     * The client can fetch available factors from GET /emission-factors.
     */
    @NotNull(message = "Emission factor ID is required")
    private Long emissionFactorId;

    /**
     * Quantity of the activity (e.g., 20 km, 5 kg, 300 kWh).
     */
    @NotNull(message = "Quantity is required")
    @Positive(message = "Quantity must be positive")
    private BigDecimal quantity;

    /**
     * Unit of the quantity (e.g., "km", "kg", "kWh").
     */
    @NotBlank(message = "Unit is required")
    private String unit;

    /**
     * Date of the activity. Defaults to today if not provided.
     */
    private LocalDate entryDate;

    /**
     * Short description of the source activity (e.g., "Car", "Flight").
     */
    private String source;

    /**
     * Optional notes about this entry.
     */
    private String notes;
}
