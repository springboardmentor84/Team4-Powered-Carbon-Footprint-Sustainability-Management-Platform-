package dto;

/**
 * One row of the "Community Rankings" leaderboard card.
 * badgeLevel matches the "Level" labels used across the app
 * (Green Beginner / Eco Warrior / Climate Hero / Planet Protector),
 * computed purely from total completed-challenge reward points.
 *
 * NOTE: no userName field - the challenge_participants table doesn't
 * store one. Once User.java exists we can join to it and add a real name.
 * For now the frontend can show "User #<userId>" or look the name up itself.
 */
public class LeaderboardEntryResponse {

    private int rank;
    private Integer userId;
    private long totalPoints;
    private String badgeLevel;

    public LeaderboardEntryResponse(int rank, Integer userId, long totalPoints, String badgeLevel) {
        this.rank = rank;
        this.userId = userId;
        this.totalPoints = totalPoints;
        this.badgeLevel = badgeLevel;
    }

    public int getRank() {
        return rank;
    }

    public Integer getUserId() {
        return userId;
    }

    public long getTotalPoints() {
        return totalPoints;
    }

    public String getBadgeLevel() {
        return badgeLevel;
    }
}
