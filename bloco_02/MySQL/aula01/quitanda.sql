CREATE DATABASE db_quitanda;

USE db_quitanda;

CREATE TABLE tb_produtos(
id bigint AUTO_INCREMENT,
nome VARCHAR(255) not null,
quantidade int,
data_validade DATE,
preco decimal not null,
PRIMARY KEY(id)
);

ALTER TABLE tb_produtos MODIFY preco DECIMAL(6, 2);

alter table tb_produtos add descricao varchar(255);

desc tb_produtos;

ALTER TABLE tb_produtos CHANGE descricao descricao_produto varchar(500);

ALTER TABLE tb_produtos DROP descricao_produto;

INSERT INTO tb_produtos(nome, quantidade, data_validade, preco) VALUES(
"Lichia", 10, "2025-01-22", 5.25);

INSERT INTO tb_produtos(nome, quantidade, data_validade, preco) VALUES
("Uva Verde", 10, "2025-01-28", 8.00),
("Pepino", 39, "2025-01-10", 9.50),
("Batata", 47, "2025-01-27", 7.00),
("Cebola", 37, "2025-01-16", 3.00);

select * from tb_produtos;

select nome, preco from tb_produtos;

select * from tb_produtos where id = 1;

select * from tb_produtos where preco > 4.00;

select * from tb_produtos where preco > 3.00 OR quantidade < 30;

select nome, CONCAT('R$ ', FORMAT(preco, 2, 'pt_BR')) AS preço FROM tb_produtos;

select nome, DATE_FORMAT(data_validade, '%d/%m/%Y') AS Data_Validade FROM tb_produtos;

update tb_produtos set preco = 10.30 where id = 2;

update tb_produtos set descricao = "fruta" where id = 1 or id = 2 or id = 7;

delete from tb_produtos where id = 6;