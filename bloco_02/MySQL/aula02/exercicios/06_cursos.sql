CREATE DATABASE db_curso_da_minha_vida;

USE db_curso_da_minha_vida;

CREATE TABLE tb_categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(100) NOT NULL,
    descricao_categoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_cursos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_curso VARCHAR(150) NOT NULL,
    descricao_curso VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    carga_horaria INT NOT NULL,
    id_categoria BIGINT,
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Programação', 'Cursos sobre linguagens e desenvolvimento de software'),
('Marketing Digital', 'Cursos sobre estratégias de marketing e vendas online'),
('Design Gráfico', 'Cursos sobre criação de artes e edições visuais'),
('Finanças', 'Cursos sobre gestão financeira e investimentos'),
('Desenvolvimento Pessoal', 'Cursos para aprimorar habilidades pessoais e profissionais');

INSERT INTO tb_cursos (nome_curso, descricao_curso, valor, carga_horaria, id_categoria) VALUES
('Curso de Java', 'Curso completo de programação em Java', 750.00, 60, 1),
('Curso de Python', 'Introdução e projetos avançados com Python', 850.00, 70, 1),
('Marketing no Instagram', 'Estratégias de marketing para Instagram', 500.00, 40, 2),
('Curso de Photoshop', 'Edição e manipulação de imagens com Photoshop', 450.00, 50, 3),
('Gestão de Investimentos', 'Aprenda a investir com segurança', 900.00, 80, 4),
('Liderança e Comunicação', 'Habilidades de liderança e oratória', 650.00, 55, 5),
('Curso de HTML e CSS', 'Desenvolvimento de sites com HTML e CSS', 400.00, 30, 1),
('Criatividade para Designers', 'Aprimore sua criatividade em projetos gráficos', 600.00, 45, 3);

SELECT * FROM tb_categorias;
SELECT * FROM tb_cursos;

SELECT * FROM tb_cursos WHERE valor > 500 ORDER BY valor;

SELECT * FROM tb_cursos WHERE valor BETWEEN 600 AND 1000 ORDER BY valor;

SELECT * FROM tb_cursos WHERE nome_curso LIKE '%J%' ORDER BY nome_curso;

SELECT * FROM tb_cursos cs INNER JOIN tb_categorias ct
ON cs.id_categoria = ct.id;

SELECT * FROM tb_cursos cs INNER JOIN tb_categorias ct
ON cs.id_categoria = ct.id
WHERE ct.id = 1;