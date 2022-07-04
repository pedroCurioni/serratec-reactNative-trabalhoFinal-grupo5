INSERT INTO perfil (NOME_PERFIL) VALUES
     ('ROLE_USER');

INSERT INTO usuario (NOME_USUARIO,EMAIL,SENHA) VALUES
     ('usuario','usuario@mail.com','$2a$12$3COb/LHNYO/JeLWy1ExGFe6U2iyFczP70/kBUEHbf9miQ4Vp64A42');

INSERT INTO usuario_rel_perfil (ID_USUARIO,ID_PERFIL) VALUES
     (1,1);

INSERT INTO fornecedor (TIPO,RAZAO_SOCIAL,CNPJ,UF,TELEFONE,EMAIL,NOME_FANTASIA,STATUS_SITUACAO,BAIRRO,LOGRADOURO,NUMERO,COMPLEMENTO,CEP,MUNICIPIO,DATA_ABERTURA) VALUES
     ('Matriz','Primeiro Fornecedor','01111222000100','RJ','2125874125','email@mail.com','Serrafood Distribuidora','Ativo','Centro','Rua Principal',10,'','25600000','Petrópolis','2022-05-27 09:23:36.461');

INSERT INTO categoria (NOME_CATEGORIA,IMAGEM) VALUES
     ('Alimentos Básicos','https://i.imgur.com/gT1V6M4.png'),
     ('Material de Limpeza','https://i.imgur.com/vgjxP4u.png'),
     ('Bebidas','https://i.imgur.com/ROKkdVV.png'),
     ('Congelados','https://i.imgur.com/Gc8xiXR.png');

INSERT INTO produto (SKU,NOME_PRODUTO,ID_FORNECEDOR,ID_CATEGORIA,IMAGEM_PRODUTO,PRECO_PRODUTO,DESCRICAO_PRODUTO) VALUES
('AU11', 'Açúcar União', '1', '1', 'https://i.imgur.com/ZZPwyUR.png', 4.89, 'Unidade 1 kg'),
('AZC11', 'Adoçante Zero Cal', '1', '1', 'https://i.imgur.com/04bQeqJ.png', 13.98, 'Unidade 100mL'),
('ATJ11', 'Arroz Tio João', '1', '1', 'https://i.imgur.com/q69ara4.png', 5.78, 'Unidade 1 kg'),
('BCCP11', 'Biscoito Cream Cracker Petya', '1', '1', 'https://i.imgur.com/FAfOKmw.png', 3.50, 'Unidade 400g'),
('BMB11', 'Biscoito Maizena Bauducco', '1', '1', 'https://i.imgur.com/VO9lqSn.png', 6.00, 'Unidade 170g'),
('CTC11', 'Café Três Corações', '1', '1', 'https://i.imgur.com/J74oETN.png', 9.58, 'Unidade 250g'),
('CLP11', 'Creme de Leite Piracanjuba', '1', '1', 'https://i.imgur.com/wqWRVMC.png', 4.39, 'Unidade 200g'),
('FTDB11', 'Farinha de Trigo Dona Benta', '1', '1', 'https://i.imgur.com/nHmnbOs.png', 17.99, 'Unidade 5 kg'),
('FBL11', 'Feijão Broto Legal', '1', '1', 'https://i.imgur.com/qzPqOZw.png', 7.98, 'Unidade 1 kg'),
('LCI11', 'Leite Condensado Itambé', '1', '1', 'https://i.imgur.com/lOlUTpZ.png', 12.50, 'Unidade 395g'),
('LTN11', 'Leite Integral Ninho', '1', '1', 'https://i.imgur.com/tFqJ5bn.png', 7.49, 'Unidade 1L'),
('MA11', 'Macarrão Adria', '1', '1', 'https://i.imgur.com/pRylQWf.png', 6.99, 'Unidade 500g'),
('MTP11', 'Molho de Tomate Predilecta', '1', '1', 'https://i.imgur.com/cmrJdfY.png', 4.69, 'Unidade 300g'),
('OCC11', 'Óleo de Coco Copra', '1', '1', 'https://i.imgur.com/BOOX93I.png', 22.39, 'Unidade 500mL'),
('OS11', 'Óleo de Soja Soya', '1', '1', 'https://i.imgur.com/zUKNT6B.png', 8.99, 'Unidade 900mL'),
('SC11', 'Sal Cisne', '1', '1', 'https://i.imgur.com/4apf4hx.png', 4.99, 'Unidade 1 kg'),
('ASSG12', 'Água Sanitária Super Globo', '1', '2', 'https://i.imgur.com/5wNXIxB.png', 4.60, 'Unidade 1L'),
('AS12', 'Álcool Sanitall', '1', '2', 'https://i.imgur.com/8WPBVVM.png', 7.98, 'Unidade 1L'),
('AD12', 'Amaciante Downy', '1', '2', 'https://i.imgur.com/hkOpuWd.png', 12.58, 'Unidade 1L'),
('BAAWL12', 'Bom Ar Air Wick Lavanda', '1', '2', 'https://i.imgur.com/EDEgfhN.png', 15.69, 'Unidade 360mL'),
('DV12', 'Desengordurante Veja', '1', '2', 'https://i.imgur.com/5nR1UNa.png', 6.19, 'Unidade 500mL'),
('DP12', 'Desinfetante Pato', '1', '2', 'https://i.imgur.com/6hJmnDv.png', 7.89, 'Unidade 500mL'),
('DU12', 'Desinfetante Urca', '1', '2', 'https://i.imgur.com/AwwvUvp.png', 6.84, 'Unidade 2L'),
('DL12', 'Detergente Limpol', '1', '2', 'https://i.imgur.com/iUz8pjT.png', 2.49, 'Unidade 500mL'),
('ESB12', 'Esponja Scott Brite', '1', '2', 'https://i.imgur.com/b1Fjxq6.png', 5.99, 'Unidade 6'),
('LMP12', 'Lustra Móveis Poliflor', '1', '2', 'https://i.imgur.com/7h3Xkb3.png', 4.19, 'Unidade 200mL'),
('PAB12', 'Palha de Aço Bombril', '1', '2', 'https://i.imgur.com/7nUuqVd.png', 5.42, 'Unidade 8'),
('PTK12', 'Papel Toalha Kitchen', '1', '2', 'https://i.imgur.com/U1YucaY.png', 3.19, 'Unidade 2'),
('SBD12', 'Sabão em Barra Diamante', '1', '2', 'https://i.imgur.com/Ys5JDZV.png', 4.82, 'Unidade 144g'),
('SPT12', 'Sabão em Pó Tixan', '1', '2', 'https://i.imgur.com/gXbRJp9.png', 11.58, 'Unidade 1 kg'),
('BLY13', 'Bebida Láctea Yopro', '1', '3', 'https://i.imgur.com/ypP4XRI.png', 5.49, 'Unidade 250mL'),
('CS13', 'Cachaça Spiritis', '1', '3', 'https://i.imgur.com/yPECUjP.png', 19.87, 'Unidade 750mL'),
('CAM13', 'Cerveja Amstel', '1', '3', 'https://i.imgur.com/PYzSMMa.png', 6.85, 'Unidade 473mL'),
('CAN13', 'Cerveja Antarctica', '1', '3', 'https://i.imgur.com/Z83tdHE.png', 3.99, 'Unidade 269mL'),
('CB13', 'Cerveja Brahma', '1', '3', 'https://i.imgur.com/wuzYkv4.png', 4.99, 'Unidade 269mL'),
('CI13', 'Cerveja Itaipava', '1', '3', 'https://i.imgur.com/1Bksgkq.png', 3.99, 'Unidade 473mL'),
('CSA13', 'Cerveja Stella Artois', '1', '3', 'https://i.imgur.com/GnhSh8g.png', 5.99, 'Unidade 275mL'),
('CML13', 'Chá Matte Leão', '1', '3', 'https://i.imgur.com/ICpdQ1Q.png', 4.79, 'Unidade 1,5L'),
('EMJ13', 'Energético Monster Juice', '1', '3', 'https://i.imgur.com/SwWp69v.png', 8.79, 'Unidade 473mL'),
('ERB13', 'Energético RedBull', '1', '3', 'https://i.imgur.com/Xkc6yfR.png', 9.79, 'Unidade 250mL'),
('LA13', 'Licor Amarula', '1', '3', 'https://i.imgur.com/UE3sSQT.png', 25.88, 'Unidade 750mL'),
('RCC13', 'Refrigerante CocaCola', '1', '3', 'https://i.imgur.com/AlH2XRa.png', 2.50, 'Unidade 250mL'),
('SCDC13', 'Suco Concentrado Dafruta Caju', '1', '3', 'https://i.imgur.com/wF4lmLu.png', 7.99, 'Unidade 500mL'),
('SCDU13', 'Suco Concentrado Dafruta Uva', '1', '3', 'https://i.imgur.com/dN73VAv.png', 9.99, 'Unidade 1L'),
('SPTL13', 'Suco em Pó Tang Laranja', '1', '3', 'https://i.imgur.com/FTFvYMq.png', 1.70, 'Unidade 25g'),
('SPTM13', 'Suco em Pó Tang Manga', '1', '3', 'https://i.imgur.com/xShXMOQ.png', 1.70, 'Unidade 25g'),
('VG13', 'Vinho Galiotto', '1', '3', 'https://i.imgur.com/XAS7u48.png', 33.99, 'Unidade 2L'),
('VV13', 'Vinho Videiras', '1', '3', 'https://i.imgur.com/AXX6aFF.png', 45.99, 'Unidade 750mL'),
('WB13', 'Whisky Ballantines', '1', '3', 'https://i.imgur.com/hK05skd.png', 129.99, 'Unidade 1L'),
('WJD13', 'Whisky Jack Daniels', '1', '3', 'https://i.imgur.com/ESnFwks.png', 141.98, 'Unidade 1L'),
('WRL13', 'Whisky Red Label', '1', '3', 'https://i.imgur.com/1c6DfnG.png', 122.45, 'Unidade 750mL'),
('BBB14', 'Batata Bem Brasil', '1', '4', 'https://i.imgur.com/1aOePAj.png', 18.49, 'Unidade 1,05 kg'),
('BMC14', 'Batata McCain', '1', '4', 'https://i.imgur.com/r2Ihn9u.png', 24.84, 'Unidade 2,5 kg'),
('BPA14', 'Batata Palito Aurora', '1', '4', 'https://i.imgur.com/D97ihMD.png', 19.59, 'Unidade 2 kg'),
('ECS14', 'Escondidinho de Carne Seara', '1', '4', 'https://i.imgur.com/xVqU7ke.png', 14.99, 'Unidade 600g'),
('FPFSA14', 'Filé de Peito de Frango Sadia', '1', '4', 'https://i.imgur.com/OTASX7s.png', 19.99, 'Unidade 1 kg'),
('FPFSE14', 'Filé de Peito de Frango Seara', '1', '4', 'https://i.imgur.com/E6Q3zBD.png', 21.99, 'Unidade 1 kg'),
('HF14', 'Hambúrguer Frimesa', '1', '4', 'https://i.imgur.com/M3oqDxy.png', 12.79, 'Caixa 540g'),
('HGS14', 'Hambúrguer Gourmet Seara', '1', '4', 'https://i.imgur.com/96j7qnr.png', 22.76, 'Unidade 400g'),
('HPSA14', 'Hot Pocket Sadia', '1', '4', 'https://i.imgur.com/Kxq5876.png', 7.98, 'Unidade 145g'),
('LBSA14', 'Lasanha Bolonhesa Sadia', '1', '4', 'https://i.imgur.com/ALn1tH5.png', 12.58, 'Unidade 600g'),
('LFSE14', 'Lasanha de Frango Seara', '1', '4', 'https://i.imgur.com/YEbrSm2.png', 11.75, 'Unidade 600g'),
('LTF14', 'Linguiça Toscana Frimesa', '1', '4', 'https://i.imgur.com/lqgHzyy.png', 16.90, 'Unidade 600g'),
('LTZSA14', 'Linguiça Toscana Sadia', '1', '4', 'https://i.imgur.com/hAWK67I.png', 21.90, 'Unidade 1 kg'),
('LTPE14', 'Linguiça Toscana Seara', '1', '4', 'https://i.imgur.com/BgKd7KO.png', 17.90, 'Unidade 600g'),
('NFSE14', 'Nuggets Tekitos Seara', '1', '4', 'https://i.imgur.com/uWuvkAy.png', 8.49, 'Unidade 300g'),
('DVSA14', 'Nuggets Vegetais Sadia', '1', '4', 'https://i.imgur.com/QuVazLd.png', 9.79, 'Unidade 200g'),
('OCSSE14', 'Nuggets Chicken Supreme Seara', '1', '4', 'https://i.imgur.com/luOSZoG.png', 11.76, 'Unidade 300g'),
('PVFM14', 'Pão de Queijo Forno de Minas', '1', '4', 'https://i.imgur.com/lC5u2P0.png', 15.45, 'Unidade 400g'),
('PMSG14', 'Pão de Queijo São Geraldo', '1', '4', 'https://i.imgur.com/CJq6LV9.png', 14.45, 'Unidade 1kg'),
('PSSA14', 'Pizza Mussarela Sadia', '1', '4', 'https://i.imgur.com/LEDrUlQ.png', 17.85, 'Unidade 460g'),
('PLPC14', 'Pizza Pif Paf Calabresa', '1', '4', 'https://i.imgur.com/cOm3vi2.png', 16.99, 'Unidade 460g'),
('PUFC14', 'Pizza Seara Frango com Catupiry', '1', '4', 'https://i.imgur.com/BHy47Yt.png', 17.94, 'Unidade 460g'),
('PAPFR14', 'Pizza Pif Paf Frango com Requeijão', '1', '4', 'https://i.imgur.com/Mnpxsly.png', 16.78, 'Unidade 460g'),
('SBJSC14', 'Sorvete Ben and Jerry Strawberry Cheesecake', '1', '4', 'https://i.imgur.com/cJkDPla.png', 19.99, 'Unidade 120g'),
('SKMC14', 'Sorvete Kibon Mouse de Chocolate', '1', '4', 'https://i.imgur.com/ksYWgzg.png', 27.59, 'Unidade 1,5L'),
('SLA14', 'Sorvete Lacta', '1', '4', 'https://i.imgur.com/G21lJm4.png', 23.94, 'Unidade 1,5L'),
('SOP14', 'Sorvete Nestlé Prestígio', '1', '4', 'https://i.imgur.com/mJL5hao.png', 27.84, 'Unidade 1,5L');


INSERT INTO estoque (ID_PRODUTO,QUANTIDADE) VALUES
(1,10),
(3,30);