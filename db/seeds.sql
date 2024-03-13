INSERT INTO department (name)
VALUES 
('TIRES'),
('FRONT END'),
('MERCH'),
('ADMIN');

INSERT INTO role (title, salary, department_id)
VALUES 
('Installer', 60000, 1),
('Shop Supervisor', 70000, 1),
('Shop Manager', 85000, 1),
('Cashier', 50000, 2),
('Stocker', 50000, 3),
('AGM', 115000, 4),
('GM', 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Adam', 'Kumre', 7, NULL),
('Martha', 'Becerra', 6, 1),
('Paul', 'Petersen', 3, 2),
('Alex', 'Sierra', 2, 3),
('Ryan', 'Pabalan', 1, 3);

