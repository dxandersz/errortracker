CREATE TABLE IF NOT EXISTS errors (
    id SERIAL PRIMARY KEY,
    category VARCHAR(255),
    title VARCHAR(255),
    description TEXT,
    error_log TEXT,
    solution TEXT
);

