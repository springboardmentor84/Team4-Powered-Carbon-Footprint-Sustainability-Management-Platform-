package com.ecotrack.backend.controller;

import com.ecotrack.backend.dto.CarbonEngineRequest;
import com.ecotrack.backend.entity.CarbonEngineActivity;
import com.ecotrack.backend.service.CarbonCalculationEngineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carbon-engine")
@RequiredArgsConstructor

public class CarbonEngineController {

    private final CarbonCalculationEngineService
            carbonCalculationEngineService;

    @PostMapping("/calculate")
    public ResponseEntity<CarbonEngineActivity> calculateCarbon(
            @RequestBody CarbonEngineRequest request) {

        return ResponseEntity.ok(
                carbonCalculationEngineService
                        .calculateCarbon(request)
        );
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<List<CarbonEngineActivity>>
    getUserCalculations(
            @PathVariable String email) {

        return ResponseEntity.ok(
                carbonCalculationEngineService
                        .getUserCalculations(email)
        );
    }
}