create database db_tasks

use db_tasks

-- ============ TABLE =================
create table tasks(
	task_id int primary key identity,
	task_name varchar(40)
)

-- ============ VALUES =================
insert into tasks (task_name) values
('Learn Spanish'),
('Learn ASP.NET')