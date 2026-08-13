package com.ecotrack.backend.model;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class GoalStatusConverter implements AttributeConverter<GoalStatus, String> {

    @Override
    public String convertToDatabaseColumn(GoalStatus status) {
        return status == null ? null : status.name().toLowerCase();
    }

    @Override
    public GoalStatus convertToEntityAttribute(String status) {
        return status == null ? null : GoalStatus.valueOf(status.toUpperCase());
    }
}