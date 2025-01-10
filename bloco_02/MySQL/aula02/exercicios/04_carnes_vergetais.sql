CREATE DATABASE db_cidade_dos_vegetais;

USE db_cidade_dos_vegetais;

CREATE TABLE tb_categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(100) NOT NULL,
    descricao_categoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_produtos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    descricao_produto VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL,
    id_categoria BIGINT,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Carnes Bovinas', 'Produtos derivados de carne bovina'),
('Carnes Suínas', 'Produtos derivados de carne suína'),
('Aves', 'Produtos derivados de carne de aves'),
('Frutas', 'Frutas frescas e naturais'),
('Vegetais', 'Vegetais frescos e orgânicos');

INSERT INTO tb_produtos (nome_produto, descricao_produto, preco, estoque, id_categoria) VALUES
('Picanha', 'Carne nobre de corte bovino', 120.00, 20, 1),
('Alcatra', 'Corte bovino macio', 80.00, 15, 1),
('Linguiça Suína', 'Linguiça artesanal suína', 45.00, 30, 2),
('Coxa de Frango', 'Coxa de frango resfriada', 25.00, 50, 3),
('Manga', 'Manga fresca e madura', 8.00, 60, 4),
('Tomate', 'Tomate orgânico de alta qualidade', 6.00, 70, 5),
('Filé de Peito', 'Filé de peito de frango', 35.00, 40, 3),
('Banana', 'Banana nanica madura', 5.00, 80, 4);

SELECT * FROM tb_produtos;
SELECT * FROM tb_categorias;

SELECT * FROM tb_produtos WHERE preco > 50.00 ORDER BY preco;

SELECT * FROM tb_produtos WHERE preco BETWEEN 50 AND 150 ORDER BY preco;

SELECT * FROM tb_produtos WHERE nome_produto LIKE '%C%' ORDER BY nome_produto;

SELECT * FROM tb_produtos p INNER JOIN tb_categorias c 
ON p.id_categoria = c.id;

SELECT * FROM tb_produtos p INNER JOIN tb_categorias c 
ON p.id_categoria = c.id
WHERE p.id_categoria = 4;