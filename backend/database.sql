CREATE DATABASE retrokinator;

CREATE TABLE Food (
    f_id SERIAL PRIMARY KEY,
    f_name VARCHAR(255),
    f_description TEXT
);

CREATE TABLE Receipt (
    r_id SERIAL PRIMARY KEY,
    cuisine VARCHAR(255),
    r_description TEXT,
    ingredients TEXT,
    food INTEGER REFERENCES Food NOT NULL
);

CREATE TABLE Question (
    q_id SERIAL PRIMARY KEY,
    body TEXT
);
