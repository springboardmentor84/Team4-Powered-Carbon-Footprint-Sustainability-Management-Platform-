package com.ecotrack.backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "goals")
public class Goal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "user_id", nullable = false)
	private Integer userId;

	@Column(nullable = false, length = 150)
	private String title;

	private String description;

	@Column(name = "target_value", nullable = false, precision = 10, scale = 2)
	private BigDecimal targetValue;

	@Column(name = "current_value", precision = 10, scale = 2)
	private BigDecimal currentValue = BigDecimal.ZERO;

	@Column(nullable = false, length = 50)
	private String unit;

	@Column(name = "start_date", nullable = false)
	private LocalDate startDate;

	@Column(name = "end_date")
	private LocalDate endDate;

	@Convert(converter = GoalStatusConverter.class)
	@Column(nullable = false, length = 20)
	private GoalStatus status = GoalStatus.ACTIVE;

	@Column(name = "created_at", insertable = false, updatable = false)
	private LocalDateTime createdAt;

	@Column(name = "updated_at", insertable = false)
	private LocalDateTime updatedAt;

	@OneToMany(mappedBy = "goal", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<GoalProgress> progress = new ArrayList<>();

	public Integer getId() { return id; }
	public void setId(Integer id) { this.id = id; }
	public Integer getUserId() { return userId; }
	public void setUserId(Integer userId) { this.userId = userId; }
	public String getTitle() { return title; }
	public void setTitle(String title) { this.title = title; }
	public String getDescription() { return description; }
	public void setDescription(String description) { this.description = description; }
	public BigDecimal getTargetValue() { return targetValue; }
	public void setTargetValue(BigDecimal targetValue) { this.targetValue = targetValue; }
	public BigDecimal getCurrentValue() { return currentValue; }
	public void setCurrentValue(BigDecimal currentValue) { this.currentValue = currentValue; }
	public String getUnit() { return unit; }
	public void setUnit(String unit) { this.unit = unit; }
	public LocalDate getStartDate() { return startDate; }
	public void setStartDate(LocalDate startDate) { this.startDate = startDate; }
	public LocalDate getEndDate() { return endDate; }
	public void setEndDate(LocalDate endDate) { this.endDate = endDate; }
	public GoalStatus getStatus() { return status; }
	public void setStatus(GoalStatus status) { this.status = status; }
	public LocalDateTime getCreatedAt() { return createdAt; }
	public LocalDateTime getUpdatedAt() { return updatedAt; }
	public List<GoalProgress> getProgress() { return progress; }
	public void setProgress(List<GoalProgress> progress) { this.progress = progress; }
}
