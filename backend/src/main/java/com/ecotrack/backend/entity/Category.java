package com.ecotrack.backend.entity;

/**
 * Enum representing the category of a carbon emission activity.
 * Stored as a STRING in the database for readability.
 */
public enum Category {
    TRANSPORT,
    ELECTRICITY,
    FOOD,
    SHOPPING,
    TRAVEL,
    WASTE,
    OTHER
}
