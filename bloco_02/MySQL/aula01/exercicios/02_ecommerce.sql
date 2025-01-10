CREATE DATABASE db_ecommerce;

USE db_ecommerce;

CREATE TABLE tb_produtos(
id bigint AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
estoque INT,
categoria VARCHAR(50) NOT NULL,
preco DECIMAL(10, 2) NOT NULL
);

INSERT INTO tb_produtos (nome, estoque, categoria, preco)
VALUES
    ('Smartphone Galaxy S21', 25, 'Eletrônicos', 3999.90),
    ('Notebook Dell Inspiron 15', 15, 'Informática', 4299.90),
    ('Camisa Polo Masculina', 100, 'Roupas', 89.90),
    ('Tênis Esportivo Nike', 50, 'Calçados', 299.90),
    ('Smart TV LG 55"', 10, 'Eletrônicos', 2999.00),
    ('Cafeteira Expresso Philco', 30, 'Eletrodomésticos', 499.90),
    ('Livro: Clean Code', 80, 'Livros', 120.00),
    ('Fone de Ouvido Bluetooth JBL', 40, 'Eletrônicos', 599.90);

SELECT nome, CONCAT('R$ ', FORMAT(preco, 2, 'pt_BR')) AS preco FROM tb_produtos;

SELECT * FROM tb_produtos;
SELECT * FROM tb_produtos WHERE preco >= 500.00;
SELECT * FROM tb_produtos WHERE preco < 500.00;
SELECT * FROM tb_produtos WHERE categoria = 'Eletrônicos';

UPDATE tb_produtos SET estoque = 88 WHERE id = 3;