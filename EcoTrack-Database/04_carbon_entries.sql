-- Stores a user's daily or periodic carbon footprint entries.
CREATE TABLE carbon_entries (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    emission_factor_id INTEGER NOT NULL REFERENCES emission_factors(id),
    quantity NUMERIC(10,2) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    entry_date DATE NOT NULL,
    source VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
