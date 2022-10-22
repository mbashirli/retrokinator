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


INSERT INTO food ( f_name, f_description) VALUES ('Pasta', 'A dish originally from Italy consisting of dough made from durum wheat and water, extruded or stamped into various shapes and typically cooked in boiling water.');
INSERT INTO food ( f_name, f_description) VALUES ( 'Pizza', 'A dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings and baked. ');
INSERT INTO food (f_name, f_description) VALUES ( 'Pasta', 'Italian delight');



