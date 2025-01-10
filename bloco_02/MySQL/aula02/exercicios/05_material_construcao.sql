CREATE DATABASE db_construindo_vidas;

USE db_construindo_vidas;

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
    quantidade_estoque INT NOT NULL,
    id_categoria BIGINT,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Hidráulica', 'Produtos relacionados a encanamentos e instalações hidráulicas'),
('Elétrica', 'Produtos relacionados a instalações elétricas'),
('Ferramentas', 'Ferramentas manuais e elétricas'),
('Acabamento', 'Materiais para acabamento e decoração'),
('Estrutural', 'Materiais para construção e estruturas');

INSERT INTO tb_produtos (nome_produto, descricao_produto, preco, quantidade_estoque, id_categoria) VALUES
('Torneira', 'Torneira de metal cromado', 120.00, 50, 1),
('Fio Elétrico', 'Rolo de 100 metros de fio elétrico 2,5mm', 85.00, 30, 2),
('Martelo', 'Martelo de aço com cabo de madeira', 45.00, 20, 3),
('Porcelanato', 'Porcelanato 60x60, resistente a manchas', 150.00, 15, 4),
('Cimento', 'Saco de cimento de 50kg', 35.00, 5, 5),
('Interruptor', 'Interruptor de luz com acabamento branco', 25.00, 20, 2),
('Parafusadeira', 'Parafusadeira elétrica com bateria', 200.00, 26 ,3),
('Argamassa', 'Argamassa para revestimentos cerâmicos', 70.00, 37, 5);

SELECT * FROM tb_categorias;
SELECT * FROM tb_produtos;

SELECT * FROM tb_produtos WHERE preco > 100 ORDER BY preco;

SELECT * FROM tb_produtos WHERE preco BETWEEN 70 AND 150 ORDER BY preco;

SELECT * FROM tb_produtos WHERE nome_produto LIKE '%C%' ORDER BY nome_produto;

SELECT * FROM tb_produtos p INNER JOIN tb_categorias c
ON p.id_categoria = c.id;

SELECT * FROM tb_produtos p INNER JOIN tb_categorias c
ON p.id_categoria = c.id
WHERE c.id = 2;