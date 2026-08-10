package com.ecotrack.backend.dto;

import com.ecotrack.backend.entity.Category;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO for creating or updating a carbon entry.
 * Validation annotations ensure data integrity before reaching the service layer.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarbonEntryRequest {

    /**
     * Category of the carbon-emitting activity.
     * Example: TRANSPORT, FOOD, ELECTRICITY
     */
    @NotNull(message = "Category is required")
    private Category category;

    /**
     * Human-readable description of the activity.
     * Example: "Car ride to office", "Beef dinner"
     */
    @NotBlank(message = "Activity description is required")
    private String activity;

    /**
     * Numeric amount of the activity.
     * Example: 20 (km), 5 (kg), 100 (kWh)
     */
    @NotNull(message = "Value is required")
    @Positive(message = "Value must be positive")
    private Double value;

    /**
     * Unit of measurement for the value.
     * Example: "km", "kg", "kWh"
     */
    @NotBlank(message = "Unit is required")
    private String unit;

    /**
     * Optional: pre-calculated carbon emission in kg CO2e.
     * If not provided, the service will calculate it using a default emission factor.
     */
    private Double carbonEmission;
}
