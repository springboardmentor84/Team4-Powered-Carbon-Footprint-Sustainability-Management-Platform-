package com.ecotrack.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "carbon_activities")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarbonActivity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;

    private String description;

    private Double quantity;

    private String unit;

    private Double carbonEmission;

    private LocalDate activityDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}