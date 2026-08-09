package com.ecotrack.backend.service;

import com.ecotrack.backend.dto.CarbonEngineRequest;
import com.ecotrack.backend.entity.CarbonEngineActivity;
import com.ecotrack.backend.repository.CarbonEngineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CarbonCalculationEngineService {

    private final CarbonEngineRepository carbonEngineRepository;

    public CarbonEngineActivity calculateCarbon(
            CarbonEngineRequest request) {

        if (request.getActivityType() == null ||
                request.getActivityType().trim().isEmpty()) {

            throw new RuntimeException(
                    "Activity type is required"
            );
        }

        if (request.getAmount() == null) {
            throw new RuntimeException(
                    "Amount is required"
            );
        }

        if (request.getAmount() < 0) {
            throw new RuntimeException(
                    "Amount cannot be negative"
            );
        }

        double emissionFactor =
                getEmissionFactor(
                        request.getActivityType(),
                        request.getUnit()
                );

        double carbonKg =
                request.getAmount() * emissionFactor;

        CarbonEngineActivity activity =
                CarbonEngineActivity.builder()
                        .activityType(request.getActivityType())
                        .amount(request.getAmount())
                        .unit(request.getUnit())
                        .emissionFactor(emissionFactor)
                        .carbonKg(
                                Math.round(carbonKg * 100.0) / 100.0
                        )
                        .email(request.getEmail())
                        .calculatedAt(LocalDateTime.now())
                        .build();

        return carbonEngineRepository.save(activity);
    }

    private double getEmissionFactor(
            String activityType,
            String unit) {

        String activity =
                activityType.trim().toLowerCase();

        String selectedUnit =
                unit == null
                        ? ""
                        : unit.trim().toLowerCase();

        switch (activity) {

            // =========================
            // TRANSPORTATION
            // =========================

            case "car":
                return 0.21;       // kg CO2e / km

            case "bike":
                return 0.10;       // kg CO2e / km

            case "bus":
                return 0.089;      // kg CO2e / km

            case "train":
                return 0.041;      // kg CO2e / km

            case "truck":
                return 0.30;       // kg CO2e / km

            // =========================
            // FUEL CONSUMPTION
            // =========================

            case "petrol":
                return 2.31;       // kg CO2e / litre

            case "diesel":
                return 2.68;       // kg CO2e / litre

            // =========================
            // ELECTRICITY USAGE
            // =========================

            case "electricity":
                return 0.82;       // kg CO2e / kWh

            case "tv":
                return 0.82;       // kg CO2e / kWh

            case "ac":
                return 0.82;       // kg CO2e / kWh

            case "refrigerator":
                return 0.82;       // kg CO2e / kWh

            case "washing machine":
                return 0.82;       // kg CO2e / kWh

            // =========================
            // FOOD CONSUMPTION
            // =========================

            case "veg":
            case "vegetarian":
                return 0.50;       // kg CO2e / meal

            case "non veg":
            case "non-veg":
            case "non vegetarian":
                return 2.50;       // kg CO2e / meal

            case "vegan":
                return 0.30;       // kg CO2e / meal

            // =========================
            // WASTE GENERATION
            // =========================

            case "plastic":
                return 2.50;       // kg CO2e / kg

            case "paper":
                return 1.00;       // kg CO2e / kg

            case "organic waste":
                return 0.50;       // kg CO2e / kg

            case "general waste":
                return 1.20;       // kg CO2e / kg

            // =========================
            // WATER USAGE
            // =========================

            case "water":
                return 0.0003;     // kg CO2e / litre

            // =========================
            // ONLINE SHOPPING
            // =========================

            case "clothes":
                return 20.0;       // kg CO2e / item

            case "electronics":
                return 50.0;       // kg CO2e / item

            case "groceries":
                return 1.5;        // kg CO2e / item

            // =========================
            // TRAVEL
            // =========================

            case "flight":
                return 0.255;      // kg CO2e / km

            case "taxi":
                return 0.21;       // kg CO2e / km

            // =========================
            // DEFAULT
            // =========================

            default:

                // If unit itself indicates electricity
                if (selectedUnit.equals("kwh")) {
                    return 0.82;
                }

                // If unit is litre
                if (selectedUnit.equals("l") ||
                        selectedUnit.equals("liters") ||
                        selectedUnit.equals("litres")) {

                    return 2.31;
                }

                // If unit is meal
                if (selectedUnit.equals("meal") ||
                        selectedUnit.equals("meals")) {

                    return 1.50;
                }

                // If unit is kg
                if (selectedUnit.equals("kg")) {
                    return 1.00;
                }

                throw new RuntimeException(
                        "Unsupported activity type: "
                                + activityType
                                + " with unit: "
                                + unit
                );
        }
    }

    public List<CarbonEngineActivity> getUserCalculations(
            String email) {

        return carbonEngineRepository.findByEmail(email);
    }
}