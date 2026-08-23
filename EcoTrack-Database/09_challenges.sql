CREATE TABLE challenges (
	challenge_id SERIAL PRIMARY KEY,
	created_by INTEGER NOT NULL REFERENCES users(id),
	title VARCHAR(150) NOT NULL,
	description TEXT,
	category VARCHAR(100),
	start_date DATE NOT NULL,
	end_date DATE,
	reward_points INTEGER DEFAULT 0,
	xp INTEGER NOT NULL DEFAULT 0,
	difficulty VARCHAR(20) NOT NULL DEFAULT 'Easy',
	badge_id VARCHAR(20),
	status VARCHAR(20) DEFAULT 'active',
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

