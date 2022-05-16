INSERT INTO departments(`name`)
  VALUES
    (1, 'Sales'),
    (2, 'Finance'),
    (3, 'HR');

INSERT INTO roles(title, salary, department_id)
  VALUES
    ('Manager', 120000, 2),
    ('Associate', 60000, 2);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
  VALUES
    ('Mike', 'Chan,' 1, NULL),
    ('Ashley', 'Rodriguez,' 2, ),
    ('Kevin', 'Tupik,' 2),
    ('Kunal', 'Singh,' 2),
    ('Malia', 'Brown,' 2),
    ('Sarah', 'Lourd,' 2),
    ('Tom', 'Allen,' 2);