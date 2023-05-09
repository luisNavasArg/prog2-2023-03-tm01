create database catologo;
use catalogo;
create table usuarios(
id int unsigned primary key auto_increment,
nombre varchar(150) not null,
apellido varchar(150),
email varchar(200) unique not null,
password varchar(250) not null
);

insert into usuarios(id,nombre,apellido,email,password)
values(default, "Luis", "Navas","lpipnavas@gmail.com","123");
insert into usuarios values(default,"Alejandro","Vivone","ale@gmail.com","1234");
insert into usuarios(nombre,email,password)values("Juan","Perez","3456");

update usuarios set apellido="Juarez" where id=3;
SELECT * FROM catalogo.usuarios;
update usuarios set email="juanjuarez@gmail.com" where id=3;

delete from usuarios where id=1;