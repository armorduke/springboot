-- TABELA DE JOB
CREATE TABLE tb_job (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  active boolean DEFAULT FALSE,
  id_parent_job bigint(20) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY jb_job_name_unique (name)
);

-- TABELA DE TASK
CREATE TABLE tb_task (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  weight bigint(20) DEFAULT NULL,
  completed boolean DEFAULT FALSE,
  created_at date DEFAULT NULL,
  id_job bigint(20) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY jb_task_name_unique (name)
);

-- TABELA DE ROLES
CREATE TABLE app_role (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  description varchar(255) DEFAULT NULL,
  role_name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);

-- TABELA DE USERS
CREATE TABLE app_user (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- TABELA DE LIGACAO USER E ROLE
CREATE TABLE user_role (
  user_id bigint(20) NOT NULL,
  role_id bigint(20) NOT NULL,
  CONSTRAINT fk_user_role_user_id FOREIGN KEY (user_id) REFERENCES app_user (id),
  CONSTRAINT fk_user_role_role_id FOREIGN KEY (role_id) REFERENCES app_role (id)
);