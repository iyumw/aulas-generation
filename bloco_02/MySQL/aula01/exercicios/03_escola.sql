CREATE DATABASE db_escola;

USE db_escola;

CREATE TABLE tb_alunos(
id bigint AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
data_nascimento DATE NOT NULL,
serie VARCHAR(20) NOT NULL,
status_matricula VARCHAR(20) NOT NULL,
nota DECIMAL(2, 1) 
);

INSERT INTO tb_alunos (nome, data_nascimento, serie, status_matricula, nota)
VALUES
    ('João Pedro Almeida', '2010-05-12', '7º Ano', 'Ativo', 5.2),
    ('Maria Clara Santos', '2009-11-25', '8º Ano', 'Ativo', 6.3),
    ('Luiz Fernando Costa', '2011-02-15', '6º Ano', 'Ativo', 7.4),
    ('Ana Júlia Silva', '2012-08-10', '5º Ano', 'Ativo', 9.5),
    ('Rafael Augusto Oliveira', '2010-01-20', '7º Ano', 'Ativo', 3.6),
    ('Camila Beatriz Pereira', '2009-09-05', '8º Ano', 'Ativo', 5.8),
    ('Lucas Henrique Nunes', '2011-12-22', '6º Ano', 'Inativo', 8.3),
    ('Isabela Fernanda Rocha', '2012-06-17', '5º Ano', 'Ativo', 2.5);
    
SELECT * FROM tb_alunos;
SELECT * FROM tb_alunos WHERE status_matricula = "Inativo";
SELECT * FROM tb_alunos WHERE status_matricula = "Ativo";
SELECT * FROM tb_alunos WHERE nota >= 7.0;
SELECT * FROM tb_alunos WHERE nota < 7.0;

SET SQL_SAFE_UPDATES = 1; -- Para fazer o update do status, é preciso desativar o safe updates
UPDATE tb_alunos SET nota = NULL WHERE status_matricula = "Inativo";
UPDATE tb_alunos SET status_matricula = "Inativo" WHERE id = 3;
