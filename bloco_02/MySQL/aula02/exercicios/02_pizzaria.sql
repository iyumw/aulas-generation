CREATE DATABASE db_pizzaria_legal;

USE db_pizzaria_legal;

CREATE TABLE tb_categorias (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
nome_categoria VARCHAR(100) NOT NULL,
descricao_categoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_pizzas (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
nome_pizza VARCHAR(100) NOT NULL,
descricao_pizza VARCHAR(255) NOT NULL,
preco DECIMAL (8, 2) NOT NULL,
tamanho VARCHAR(50) NOT NULL,
id_categoria BIGINT,
FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Tradicional', 'Pizzas clássicas com sabores tradicionais'),
('Especial', 'Pizzas com ingredientes selecionados e premium'),
('Vegetariana', 'Pizzas sem ingredientes de origem animal'),
('Doce', 'Pizzas com sabores doces e sobremesas'),
('Picante', 'Pizzas com temperos e sabores picantes');

INSERT INTO tb_pizzas (nome_pizza, descricao_pizza, preco, tamanho, id_categoria) VALUES
('Margherita', 'Molho de tomate, queijo e manjericão', 40.00, 'Média', 1),
('Pepperoni', 'Molho de tomate, queijo e pepperoni', 55.00, 'Grande', 2),
('Vegetariana Especial', 'Molho de tomate, queijo, cogumelos, e pimentões', 50.00, 'Grande', 3),
('Chocolate', 'Pizza doce com creme de chocolate e morangos', 60.00, 'Grande', 4),
('Frango com Catupiry', 'Frango desfiado, catupiry e milho', 48.00, 'Média', 2),
('Quatro Queijos', 'Molho de tomate, mussarela, provolone, gorgonzola e parmesão', 70.00, 'Grande', 1),
('Calabresa Picante', 'Molho de tomate, calabresa e pimenta', 45.00, 'Média', 5),
('Romeu e Julieta', 'Queijo e goiabada', 58.00, 'Grande', 4);

SELECT * FROM tb_categorias;
SELECT * FROM tb_pizzas;

SELECT * FROM tb_pizzas WHERE preco > 45.00 ORDER BY preco;

SELECT * FROM tb_pizzas WHERE preco BETWEEN 50.00 AND 100.00 ORDER BY preco;

SELECT * FROM tb_pizzas WHERE nome_pizza LIKE '%M%' ORDER BY nome_pizza;

SELECT * FROM tb_pizzas p INNER JOIN tb_categorias c
ON p.id_categoria = c.id;

SELECT * FROM tb_pizzas p INNER JOIN tb_categorias c
ON p.id_categoria = c.id
WHERE c.id = 4;