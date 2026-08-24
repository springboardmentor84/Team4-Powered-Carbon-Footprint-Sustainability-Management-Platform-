package dto;

import java.math.BigDecimal;

/** Body for PATCH /api/challenges/{id}/progress, e.g. { "progressValue": 3 } */
public class ProgressUpdateRequest {

    private BigDecimal progressValue;

    public BigDecimal getProgressValue() {
        return progressValue;
    }

    public void setProgressValue(BigDecimal progressValue) {
        this.progressValue = progressValue;
    }
}
