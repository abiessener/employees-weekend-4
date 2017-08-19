-- PostgreSQL queries for initial data setup for full-stack employees app

CREATE TABLE employees (
    id serial PRIMARY KEY,
    firstname VARCHAR(32) NOT NULL,
    lastname VARCHAR(64) NOT NULL,
    jobtitle VARCHAR(64) NOT NULL,
    salary INT NOT NULL,
    is_active BOOLEAN DEFAULT true
);

INSERT INTO employees (firstname, lastname, jobtitle, salary) VALUES
('Lew', 'Ford', 'Guitar Hero', 43000),
('Torii', 'Hunter', 'Preacher', 88932),
('Jacque', 'Jones', 'Hype Man', 23000),
('Shannon', 'Stewart', 'Emergency Repairman', 64833);