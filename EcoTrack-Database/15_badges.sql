CREATE TABLE badges (
	badge_id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	description TEXT,
	category VARCHAR(100),
	criteria TEXT,
	icon_url VARCHAR(255)
);

