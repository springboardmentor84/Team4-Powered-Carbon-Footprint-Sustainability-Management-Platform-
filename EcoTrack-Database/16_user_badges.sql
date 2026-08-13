CREATE TABLE user_badges (
	user_badge_id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(id),
	badge_id INTEGER NOT NULL REFERENCES badges(badge_id),
	awarded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

