INSERT INTO app_role (id, role_name, description) VALUES (1, 'STANDARD_USER', 'Usuario Padrao');
INSERT INTO app_role (id, role_name, description) VALUES (2, 'ADMIN_USER', 'Usuario Administrador');

-- USER
INSERT INTO app_user (id, first_name, last_name, password, username) VALUES (1, 'Teste', 'Teste', '$2a$10$KB8WN/N7qlFm4ibZLnyW1OPBkmfHpFIgrCxSSzQ7/L8hBE.B5.Va6', 'teste');
INSERT INTO app_user (id, first_name, last_name, password, username) VALUES (2, 'Admin', 'Admin', '$2a$10$NTOsn7pD5VcezHqR.RYDfuDQGKwsXo7Ffgt0CO0nWJjHxLAeRx6FC', 'adm');

INSERT INTO user_role(user_id, role_id) VALUES(1,1);
INSERT INTO user_role(user_id, role_id) VALUES(2,1);
INSERT INTO user_role(user_id, role_id) VALUES(2,2);

--JOBS PARA TESTE
INSERT INTO tb_job (id, name, active) VALUES (1, 'JOB TESTE 1', TRUE);
INSERT INTO tb_job (id, name, active) VALUES (2, 'JOB TESTE 2', TRUE);
INSERT INTO tb_job (id, name, active, id_parent_job) VALUES (3, 'JOB TESTE 3', FALSE, 2);
INSERT INTO tb_job (id, name, active) VALUES (4, 'JOB TESTE 4', TRUE);

--TASKS PARA TESTE
INSERT INTO tb_task (id, name, weight, created_at, id_job) VALUES (1, 'TASK1 JOB1', 12, CURRENT_DATE(), 1);
INSERT INTO tb_task (id, name, weight, completed, created_at, id_job) VALUES (2, 'TASK2 JOB1', 12, true, CURRENT_DATE(), 1);
INSERT INTO tb_task (id, name, weight, created_at, id_job) VALUES (3, 'TASK3 JOB1', 12, CURRENT_DATE(), 1);
INSERT INTO tb_task (id, name, weight, created_at, id_job) VALUES (4, 'TASK4 JOB1', 12, CURRENT_DATE(), 1);

