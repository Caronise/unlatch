--Adding notes to the notes table

INSERT INTO repair_logs (project_id, description, mileage, timestamp, cost_of_repair)
VALUES ('1', 'Noticed that break fluid is running low', '150000', '2019-06-22 06:27:28-07', '20.99');

INSERT INTO repair_logs (project_id, description, mileage, timestamp, cost_of_repair)
VALUES ('1', 'Changed front wipers', '155000', '2019-06-22 06:27:28-07', '54.99');

INSERT INTO repair_logs (project_id, description, mileage, timestamp, cost_of_repair)
VALUES ('2', 'Steering wheel leans left by itself', '165000', '2019-06-25 19:10:25-07', '59.99');

INSERT INTO repair_logs (project_id, description, mileage, timestamp, cost_of_repair)
VALUES ('2', 'Replaced left mirror', '170000', '2019-06-25 19:10:25-07', '89.99');