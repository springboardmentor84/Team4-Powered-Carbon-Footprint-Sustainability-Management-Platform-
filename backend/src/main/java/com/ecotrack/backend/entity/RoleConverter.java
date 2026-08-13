package com.ecotrack.backend.entity;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.Locale;

@Converter(autoApply = true)
public class RoleConverter implements AttributeConverter<Role, String> {

    @Override
    public String convertToDatabaseColumn(Role attribute) {
        if (attribute == null) {
            return null;
        }
        return attribute.name().toLowerCase(Locale.ROOT);
    }

    @Override
    public Role convertToEntityAttribute(String dbData) {
        if (dbData == null) {
            return null;
        }
        return Role.valueOf(dbData.toUpperCase(Locale.ROOT));
    }
}
