CREATE DATABASE db_generation_game_online;

USE db_generation_game_online;

CREATE TABLE tb_classes (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
nome_classe VARCHAR(100) NOT NULL,
descricao_classe VARCHAR(255) NOT NULL
);

CREATE TABLE tb_personagens (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_personagem VARCHAR(100) NOT NULL,
    poder_ataque INT NOT NULL,
    poder_defesa INT NOT NULL,
    nivel INT NOT NULL,
    id_classe BIGINT,
    FOREIGN KEY (id_classe) REFERENCES tb_classes(id)
);

INSERT INTO tb_classes (nome_classe, descricao_classe) VALUES
('Guerreiro', 'Especialista em combate corpo a corpo, com alta resistência'),
('Mago', 'Usuário de magia com poderosos ataques à distância'),
('Arqueiro', 'Especialista em ataques de longa distância com precisão'),
('Assassino', 'Especialista em ataques rápidos e furtivos'),
('Cavaleiro', 'Defensor com grande resistência e habilidades de proteção');

INSERT INTO tb_personagens (nome_personagem, poder_ataque, poder_defesa, nivel, id_classe) VALUES
('Artemis', 1800, 1200, 10, 3),
('Thorgrim', 2100, 1800, 12, 1),
('Zyra', 2500, 1000, 15, 2),
('Kael', 2000, 1700, 11, 3),
('Ragnar', 2300, 2000, 13, 1),
('Selena', 2700, 900, 16, 2),
('Shadow', 2200, 1100, 14, 4),
('Leon', 1500, 2500, 12, 5);

SELECT * FROM tb_classes;
SELECT * FROM tb_personagens;

SELECT * FROM tb_personagens WHERE poder_ataque > 2000
ORDER BY poder_ataque;

SELECT * FROM tb_personagens WHERE poder_defesa BETWEEN 1000 AND 2000
ORDER BY poder_defesa;

SELECT * FROM tb_personagens WHERE nome_personagem LIKE '%R%' ORDER BY nome_personagem;

SELECT * FROM tb_personagens p INNER JOIN tb_classes c
ON p.id_classe = c.id;

SELECT * FROM tb_personagens p INNER JOIN tb_classes c
ON p.id_classe = c.id
WHERE c.id = 2;