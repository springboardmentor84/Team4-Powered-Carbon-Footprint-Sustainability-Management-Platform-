CREATE TABLE user_interests (
	user_id INTEGER NOT NULL REFERENCES users(id),
	interest_id INTEGER NOT NULL REFERENCES interests(interest_id),
	PRIMARY KEY (user_id, interest_id)
);

