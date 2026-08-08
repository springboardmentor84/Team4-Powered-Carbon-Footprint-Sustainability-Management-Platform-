CREATE TABLE recommendations (
	recommendation_id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(id),
	category VARCHAR(100) NOT NULL,
	recommendation_text TEXT NOT NULL,
	impact_score NUMERIC(10,2),
	is_read BOOLEAN DEFAULT FALSE,
	generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
