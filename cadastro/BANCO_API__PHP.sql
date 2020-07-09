create database API_PHP;
use API_PHP;
create table alunos(
	id int auto_increment primary key,
    nome varchar(50) not null,
    email varchar(100),
    celular varchar(18),
    endereco varchar(100),
    numero varchar(20),
    bairo varchar(100),
    cidade varchar(40),
    estado varchar(40),
    cep varchar(12)
);
drop table alunos;
insert into alunos values(default,'iuri','iuri@iuri.com','11 99205-4702','osasco','nº 120','osasco','osasco','osasco','06206 - 090');
select * from alunos;