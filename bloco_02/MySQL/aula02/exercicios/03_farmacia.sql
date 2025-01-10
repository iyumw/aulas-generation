CREATE DATABASE db_farmacia_bem_estar;

USE db_farmacia_bem_estar;

CREATE TABLE tb_categorias (
id BIGINT PRIMARY KEY AUTO_INCREMENT,
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
FOREIGN KEY(id_categoria) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Medicamentos', 'Produtos destinados ao tratamento de doenças e condições de saúde'),
('Dermocosméticos', 'Produtos para cuidados com a pele'),
('Suplementos', 'Produtos para suplementação alimentar e esportiva'),
('Higiene Pessoal', 'Produtos de higiene e cuidados diários'),
('Infantil', 'Produtos destinados ao público infantil');

INSERT INTO tb_produtos (nome_produto, descricao_produto, preco, estoque, id_categoria) VALUES
('Paracetamol', 'Analgésico e antitérmico', 15.00, 50, 1),
('Creme Hidratante', 'Hidratação profunda para a pele', 35.00, 30, 2),
('Vitamina C', 'Suplemento alimentar com vitamina C', 25.00, 20, 3),
('Sabonete Líquido', 'Sabonete líquido para todos os tipos de pele', 12.00, 40, 4),
('Fralda Descartável', 'Fraldas descartáveis tamanho M', 50.00, 100, 5),
('Protetor Solar', 'Protetor solar FPS 50', 75.00, 25, 2),
('Ômega 3', 'Suplemento alimentar rico em ácidos graxos essenciais', 60.00, 15, 3),
('Xampu Infantil', 'Xampu suave para crianças', 18.00, 10, 5);

SELECT * FROM tb_categorias;
SELECT * FROM tb_produtos;

SELECT * FROM tb_produtos WHERE preco > 50.00 ORDER BY preco;

SELECT * FROM tb_produtos WHERE preco BETWEEN 5.00 AND 60.00 ORDER BY preco;

SELECT * FROM tb_produtos WHERE nome_produto LIKE '%C%' ORDER BY nome_produto;

SELECT * FROM tb_produtos p INNER JOIN tb_categorias c
ON p.id_categoria = c.id;

SELECT * FROM tb_produtos p INNER JOIN tb_categorias c
ON p.id_categoria = c.id 
WHERE p.id_categoria = 3;
