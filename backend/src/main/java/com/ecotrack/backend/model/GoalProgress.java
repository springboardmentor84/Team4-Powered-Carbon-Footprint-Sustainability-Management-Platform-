package com.ecotrack.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "goal_progress")
public class GoalProgress {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "goal_id", nullable = false)
	@JsonIgnore
	private Goal goal;

	@Column(name = "progress_value", nullable = false, precision = 10, scale = 2)
	private BigDecimal progressValue;

	@Column(name = "recorded_date", nullable = false)
	private LocalDate recordedDate;

	private String notes;

	@Column(name = "created_at", insertable = false, updatable = false)
	private LocalDateTime createdAt;

	public Integer getId() { return id; }
	public void setId(Integer id) { this.id = id; }
	public Goal getGoal() { return goal; }
	public void setGoal(Goal goal) { this.goal = goal; }
	public BigDecimal getProgressValue() { return progressValue; }
	public void setProgressValue(BigDecimal progressValue) { this.progressValue = progressValue; }
	public LocalDate getRecordedDate() { return recordedDate; }
	public void setRecordedDate(LocalDate recordedDate) { this.recordedDate = recordedDate; }
	public String getNotes() { return notes; }
	public void setNotes(String notes) { this.notes = notes; }
	public LocalDateTime getCreatedAt() { return createdAt; }
}
