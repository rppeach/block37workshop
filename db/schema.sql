--Clear Out Existing Data
DROP TABLE IF EXISTS architects CASCADE;
DROP TABLE IF EXISTS buildings;

CREATE TABLE architects (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    style TEXT NOT NULL,
    nationality TEXT NOT NULL,
    born DATE NOT NULL,
    died DATE
);

CREATE TABLE buildings (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    construction_started DATE NOT NULL,
    completed DATE,
    architect_id INT NOT NULL,
    FOREIGN KEY (architect_id) REFERENCES architects(id) ON DELETE CASCADE,
    UNIQUE (name, architect_id)
);