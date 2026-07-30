-- Stores default carbon emission factors used for entries.
CREATE TABLE emission_factors (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    factor_value NUMERIC(10,4) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
