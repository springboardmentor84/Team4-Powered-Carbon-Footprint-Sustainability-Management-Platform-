-- =============================================================================
-- EcoTrack Database Schema
-- Master schema file — tables created in dependency order.
-- Spring Boot runs this on startup when spring.sql.init.mode=always
-- =============================================================================

-- 01: Users
CREATE TABLE IF NOT EXISTS users (
    id          BIGSERIAL PRIMARY KEY,
    full_name   VARCHAR(100)  NOT NULL,
    email       VARCHAR(255)  NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role        VARCHAR(20)   NOT NULL DEFAULT 'USER' CHECK (role IN ('USER','ADMIN')),
    is_active   BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- 02: Profiles (1-to-1 with users)
CREATE TABLE IF NOT EXISTS profiles (
    id                  BIGSERIAL PRIMARY KEY,
    user_id             BIGINT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    phone_number        VARCHAR(20),
    address             VARCHAR(255),
    city                VARCHAR(100),
    country             VARCHAR(100),
    date_of_birth       DATE,
    profile_picture_url VARCHAR(255),
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 03: Emission Factors (lookup table for CO2 calculation)
CREATE TABLE IF NOT EXISTS emission_factors (
    id           BIGSERIAL PRIMARY KEY,
    category     VARCHAR(100)   NOT NULL,
    factor_value NUMERIC(10,4)  NOT NULL,
    unit         VARCHAR(50)    NOT NULL,
    description  TEXT,
    created_at   TIMESTAMP      DEFAULT CURRENT_TIMESTAMP
);

-- 04: Carbon Entries (user's daily carbon footprint logs)
CREATE TABLE IF NOT EXISTS carbon_entries (
    id                 BIGSERIAL PRIMARY KEY,
    user_id            BIGINT        NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    emission_factor_id BIGINT        NOT NULL REFERENCES emission_factors(id),
    quantity           NUMERIC(10,2) NOT NULL,
    unit               VARCHAR(50)   NOT NULL,
    entry_date         DATE          NOT NULL,
    source             VARCHAR(100),
    notes              TEXT,
    created_at         TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at         TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- 05: Goals (sustainability goals per user)
CREATE TABLE IF NOT EXISTS goals (
    id            BIGSERIAL PRIMARY KEY,
    user_id       BIGINT        NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title         VARCHAR(150)  NOT NULL,
    description   TEXT,
    target_value  NUMERIC(10,2) NOT NULL,
    current_value NUMERIC(10,2) DEFAULT 0,
    unit          VARCHAR(50)   NOT NULL,
    start_date    DATE          NOT NULL,
    end_date      DATE,
    status        VARCHAR(20)   NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE','COMPLETED','CANCELLED')),
    created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- 06: Goal Progress (periodic progress snapshots per goal)
CREATE TABLE IF NOT EXISTS goal_progress (
    id             BIGSERIAL PRIMARY KEY,
    goal_id        BIGINT        NOT NULL REFERENCES goals(id) ON DELETE CASCADE,
    progress_value NUMERIC(10,2) NOT NULL,
    recorded_date  DATE          NOT NULL,
    notes          TEXT,
    created_at     TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- 07: Interests (master list of topics)
CREATE TABLE IF NOT EXISTS interests (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

-- 08: User Interests (user <-> interest mapping)
CREATE TABLE IF NOT EXISTS user_interests (
    id          BIGSERIAL PRIMARY KEY,
    user_id     BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    interest_id BIGINT NOT NULL REFERENCES interests(id) ON DELETE CASCADE,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, interest_id)
);

-- 09: Challenges (platform-wide sustainability challenges)
CREATE TABLE IF NOT EXISTS challenges (
    id          BIGSERIAL PRIMARY KEY,
    title       VARCHAR(150) NOT NULL,
    description TEXT,
    start_date  DATE,
    end_date    DATE,
    status      VARCHAR(20) DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE','INACTIVE','COMPLETED')),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 10: Challenge Participants (user <-> challenge mapping)
CREATE TABLE IF NOT EXISTS challenge_participants (
    id           BIGSERIAL PRIMARY KEY,
    user_id      BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    challenge_id BIGINT NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
    joined_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, challenge_id)
);

-- 11: Recommendations (AI/system suggestions per user)
CREATE TABLE IF NOT EXISTS recommendations (
    id         BIGSERIAL PRIMARY KEY,
    user_id    BIGINT       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title      VARCHAR(150) NOT NULL,
    content    TEXT,
    category   VARCHAR(100),
    is_read    BOOLEAN      DEFAULT FALSE,
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

-- 12: Notifications (alerts and reminders per user)
CREATE TABLE IF NOT EXISTS notifications (
    id         BIGSERIAL PRIMARY KEY,
    user_id    BIGINT       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title      VARCHAR(150) NOT NULL,
    message    TEXT,
    type       VARCHAR(50),
    is_read    BOOLEAN      DEFAULT FALSE,
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

-- 13: Reports (generated sustainability reports per user)
CREATE TABLE IF NOT EXISTS reports (
    id           BIGSERIAL PRIMARY KEY,
    user_id      BIGINT    NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    report_type  VARCHAR(50),
    period_start DATE,
    period_end   DATE,
    summary      TEXT,
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 14: Eco Scores (periodic sustainability scores per user)
CREATE TABLE IF NOT EXISTS eco_scores (
    id         BIGSERIAL PRIMARY KEY,
    user_id    BIGINT        NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    score      NUMERIC(5,2)  NOT NULL,
    score_date DATE          NOT NULL,
    notes      TEXT,
    created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- 15: Badges (achievement badges master list)
CREATE TABLE IF NOT EXISTS badges (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    icon_url    VARCHAR(255)
);

-- 16: User Badges (badges earned by users)
CREATE TABLE IF NOT EXISTS user_badges (
    id        BIGSERIAL PRIMARY KEY,
    user_id   BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    badge_id  BIGINT NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, badge_id)
);
