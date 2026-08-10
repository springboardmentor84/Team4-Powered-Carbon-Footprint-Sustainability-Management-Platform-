package com.ecotrack.backend.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Master list of interests/topics a user can subscribe to.
 * Maps to the "interests" table (07_interests.sql).
 */
@Entity
@Table(name = "interests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Interest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;
}
