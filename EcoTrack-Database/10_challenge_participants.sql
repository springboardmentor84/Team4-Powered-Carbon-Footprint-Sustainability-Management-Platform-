CREATE TABLE challenge_participants (
	participant_id SERIAL PRIMARY KEY,
	challenge_id INTEGER NOT NULL REFERENCES challenges(challenge_id),
	user_id INTEGER NOT NULL REFERENCES users(id),
	joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	progress_value NUMERIC(10,2) DEFAULT 0,
	status VARCHAR(20) DEFAULT 'active',
	xp_awarded BOOLEAN NOT NULL DEFAULT FALSE,
	completed_at TIMESTAMP
);

