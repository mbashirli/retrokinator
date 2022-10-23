CREATE DATABASE retrokinator;

CREATE TABLE Food (
    f_id SERIAL PRIMARY KEY,
    f_name VARCHAR(255),
    f_description TEXT,
    f_cuisine TEXT,
    f_ingredients TEXT
);


CREATE TABLE Question (
    q_id INTEGER PRIMARY KEY,
    q_answer1 TEXT,
    q_answer2 TEXT,
    q_answer3 TEXT,
    q_answer4 TEXT,
    q_body TEXT
);


INSERT INTO Food ( f_name, f_description,  f_cuisine, f_ingredients) VALUES ('A bacon, egg, and cheese sandwich', 'A bacon, egg and cheese sandwich is a breakfast sandwich popular in the United States and Canada. It is made with bacon, eggs (typically fried or scrambled), cheese and bread, which may be buttered and toasted. ', 'United States of America', 'Bacon, Cheese, Eggs');
INSERT INTO Food ( f_name, f_description,  f_cuisine, f_ingredients) VALUES ('Pizza', 'a dish of Italian origin consisting of a flat, round base of dough baked with a topping of tomato sauce and cheese, typically with added meat or vegetables', 'Italy', 'Flour, yeast, mozzarella cheese, white sugar, tomatoes and onion');
INSERT INTO Food ( f_name, f_description,  f_cuisine, f_ingredients) VALUES ('Arroz Con Pollo', ' Want something awesome for dinner but dont want to spend your entire evening cooking and cleaning? Arroz con pollo (chicken with rice in Spanish) is the the perfect recipe.', 'Spain', 'Rice, chicken, vegetables');
INSERT INTO Food ( f_name, f_description,  f_cuisine, f_ingredients) VALUES ('Creamy Steak Fettuccine', ' Whenever we crave steak, this dish is always what we want to make. It comes together quickly and is so full of flavor. It makes us forget chicken ever existed. ', 'Italy', 'Fettucine, steak, vegetable oil, butter');
INSERT INTO Food ( f_name, f_description,  f_cuisine, f_ingredients) VALUES ('Pad Thai', 'An easy alternative to takeout, our simplified pad Thai recipe is designed to satisfy noodle cravings fast.', 'Thailand', 'stir-fried rice noodles with eggs, vegetables and tofu in a sauce of tamarind, fish, dried shrimp, garlic, red chilli pepper and sugar');
INSERT INTO Food (f_name, f_description, f_cuisine, f_ingredients) VALUES ('Smoked Salmon Pasta', 'Smoked salmon pasta sounds really fancy, but the truth is its one of the easiest and fastest dinners weve ever made. It comes together in just under 30 minutes, making it the perfect dish to whip up for a weeknight seafood dinner, but still good enough to impress your guests for holidays and celebrations.', 'Scotland', 'Spaghetti, Virgin Oil, Salmon, Cheese');



INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (1, 'Which of the following tastes do you desire right now?','Sweet', 'Sour', 'Salty', 'Umami');
INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (2, 'What is your favorite color?', 'Pink', 'Green', 'Yellow', 'All Colors');
INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (3, 'How much time do you have to eat?', 'Half-hour', 'One hour', 'Two or three hours', '15 minutes');
INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (4, 'Where are you now?', 'I just woke up and Im in bed', 'At work', 'At home', 'Im out with my friends');
INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (5, 'Do you have time to cook?', 'Only half an hour', 'Not at all', 'Yes, I am free', 'I have time but Im not in the mood');
INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (6, 'Hot or cold food?', 'Something between hot and cold', 'Cold', 'Hot', 'It does not matter');
INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (7, 'What is your purpose in eating now?', 'Getting energy for the whole day', 'Because Im so hungry', 'To relax', 'For happiness');
INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (8, 'What meal do you prefer?', 'Nutritious and healthy', 'Quick prepared', 'Heavy meal', 'None of them');
INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (9, 'How Much Money Do You Have to Eat?', 'An average budget', 'I do not have much money', 'Money does not matter', 'Ive got so little money');
INSERT INTO Question (q_id, q_body, q_answer1, q_answer2, q_answer3, q_answer4) VALUES (10, 'What is important to you when choosing a meal?', 'Healthy meal', 'Nothing', 'Being nutritious', 'I dont know');