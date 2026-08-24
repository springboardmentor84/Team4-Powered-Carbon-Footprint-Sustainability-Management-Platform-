package dto;

import java.time.LocalDate;

/**
 * Body sent when creating a challenge, e.g.:
 * {
 *   "createdBy": 1,
 *   "title": "Plastic-Free Week",
 *   "description": "Avoid all single-use plastic for seven consecutive days.",
 *   "category": "Waste Reduction",
 *   "startDate": "2026-08-20",
 *   "endDate": "2026-08-27",
 *   "rewardPoints": 60
 * }
 */
public class ChallengeRequest {

    private Integer createdBy;
    private String title;
    private String description;
    private String category;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer rewardPoints;

    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Integer getRewardPoints() {
        return rewardPoints;
    }

    public void setRewardPoints(Integer rewardPoints) {
        this.rewardPoints = rewardPoints;
    }
}
