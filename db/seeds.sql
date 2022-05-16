INSERT INTO departments(id, `name`)
  VALUES
    (1,'Sales'),
    (2,'Finance'),
    (3, 'HR');

INSERT INTO roles(id, title, salary, department_id)
  VALUES
    (1,'Manager', 120000, 2),
    (2,'Associate', 60000, 2);

INSERT INTO employees(id, first_name, last_name, role_id, manager_id)
  VALUES
    (1,'Mike', 'Chan', 1, NULL),
    (2,'Ashley', 'Rodriguez', 2, 1),
    (3,'Kevin', 'Tupik', 2, 1),
    (4,'Kunal', 'Singh', 2, 1),
    (5,'Malia', 'Brown', 2, 1),
    (6,'Sarah', 'Lourd', 2, 1),
    (7,'Tom', 'Allen', 2, 1);