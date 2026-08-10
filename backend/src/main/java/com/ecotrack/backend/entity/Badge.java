package com.ecotrack.backend.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Master list of achievement badges users can earn.
 * Maps to the "badges" table (15_badges.sql).
 */
@Entity
@Table(name = "badges")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Badge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    /**
     * URL or path to the badge icon image.
     */
    @Column(name = "icon_url", length = 255)
    private String iconUrl;
}
