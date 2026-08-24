package dto;

import com.ecotrack.backend.model.Challenge;
import java.math.BigDecimal;

/**
 * What gets sent back to the Angular Challenges page: category, days left,
 * title, description, reward points, progress bar, joined count, and the
 * current logged-in user's own status/progress (drives which button shows).
 */
public class ChallengeResponse {

    private Integer id;
    private String title;
    private String description;
    private String category;
    private Integer rewardPoints;
    private String status;
    private long daysLeft;
    private long joinedCount;

    // Describes the CURRENT logged-in user's relationship to this challenge.
    // myStatus == null means "not joined yet" -> frontend shows the "Join" button.
    private String myStatus;
    private BigDecimal myProgressValue;

    public static ChallengeResponse from(Challenge challenge, long joinedCount,
                                          String myStatus, BigDecimal myProgress) {
        ChallengeResponse dto = new ChallengeResponse();
        dto.id = challenge.getId();
        dto.title = challenge.getTitle();
        dto.description = challenge.getDescription();
        dto.category = challenge.getCategory();
        dto.rewardPoints = challenge.getRewardPoints();
        dto.status = challenge.getStatus();
        dto.daysLeft = challenge.daysLeft();
        dto.joinedCount = joinedCount;
        dto.myStatus = myStatus;
        dto.myProgressValue = myProgress;
        return dto;
    }

    // ----- getters (read-only output, no setters needed) -----

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public Integer getRewardPoints() {
        return rewardPoints;
    }

    public String getStatus() {
        return status;
    }

    public long getDaysLeft() {
        return daysLeft;
    }

    public long getJoinedCount() {
        return joinedCount;
    }

    public String getMyStatus() {
        return myStatus;
    }

    public BigDecimal getMyProgressValue() {
        return myProgressValue;
    }
}
