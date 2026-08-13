CREATE TABLE reports (
	report_id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(id),
	report_type VARCHAR(50) NOT NULL,
	format VARCHAR(20) NOT NULL,
	file_url VARCHAR(255),
	period_start DATE NOT NULL,
	period_end DATE NOT NULL,
	generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

