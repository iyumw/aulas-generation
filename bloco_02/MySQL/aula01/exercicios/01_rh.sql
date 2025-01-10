CREATE DATABASE db_rh;

USE db_rh;

CREATE TABLE tb_colaboradores(
id bigint AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
cargo VARCHAR(50) NOT NULL,
departamento VARCHAR(50),
salario DECIMAL(10, 2) NOT NULL
);

ALTER TABLE tb_colaboradores ADD status_colaborador VARCHAR(20) NOT NULL;

INSERT INTO tb_colaboradores(nome, cargo, departamento, salario) VALUES
('Ana Paula Silva', 'Analista de RH', 'Recursos Humanos', 4500.00),
('Carlos Eduardo Oliveira', 'Desenvolvedor Backend', 'Tecnologia da Informação', 6500.00),
('Mariana Costa Souza', 'Gerente de Vendas', 'Vendas', 8500.00),
('Ricardo Mendes', 'Assistente Administrativo', 'Administrativo', 3200.00),
('Fernanda Rocha Lima', 'Designer Gráfico', 'Marketing', 4000.00);


SELECT nome, CONCAT('R$ ', FORMAT(salario, 2, 'pt_BR')) AS salario FROM tb_colaboradores;

SELECT * FROM tb_colaboradores;
SELECT * FROM tb_colaboradores WHERE salario >= 2000.00;
SELECT * FROM tb_colaboradores WHERE salario < 2000.00;
SELECT * FROM tb_colaboradores WHERE status_colaborador = 'Inativo';
SELECT * FROM tb_colaboradores WHERE status_colaborador = 'Ativo';

UPDATE tb_colaboradores SET salario = 1800.00 WHERE id = 4;
UPDATE tb_colaboradores SET status_colaborador = 'Inativo' WHERE id IN(1, 4);
UPDATE tb_colaboradores SET status_colaborador = 'Ativo' WHERE id IN(2, 3, 5);