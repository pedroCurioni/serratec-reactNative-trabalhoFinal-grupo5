select * from categoria c ;

CREATE TABLE public.categoria (
	id_categoria serial4 NOT NULL,
	nome_categoria varchar(255) NULL,
	imagem varchar NULL,
	CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria)
);

CREATE TABLE public.estoque (
	id_estoque serial4 NOT NULL,
	id_produto int8 NULL,
	quantidade int8 NULL,
	CONSTRAINT estoque_pkey PRIMARY KEY (id_estoque)
);

CREATE TABLE public.fornecedor (
	id_fornecedor serial4 NOT NULL,
	tipo varchar(255) NULL,
	razao_social varchar(255) NULL,
	cnpj varchar(14) NOT NULL,
	uf varchar(2) NULL,
	telefone varchar(100) NULL,
	email varchar(255) NULL,
	nome_fantasia varchar(255) NULL,
	status_situacao varchar(100) NULL,
	bairro varchar(255) NULL,
	logradouro varchar(255) NULL,
	numero int8 NULL,
	complemento varchar(100) NULL,
	cep varchar(10) NULL,
	municipio varchar(255) NULL,
	data_abertura timestamp NULL,
	CONSTRAINT fornecedor_pkey PRIMARY KEY (id_fornecedor)
);

CREATE TABLE public.perfil (
	id_perfil serial4 NOT NULL,
	nome_perfil varchar(100) NULL,
	CONSTRAINT perfil_pkey PRIMARY KEY (id_perfil)
);

CREATE TABLE public.usuario (
	id_usuario serial4 NOT NULL,
	nome_usuario varchar(100) NULL,
  foto_perfil varchar NULL,
	email varchar(100) NULL,
	senha varchar(255) NULL,
	CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario)
);


CREATE TABLE public.produto (
	id_produto serial4 NOT NULL,
	sku varchar(255) NULL,
	nome_produto varchar(255) NULL,
	id_fornecedor int8 NOT NULL,
	id_categoria int8 NOT NULL,
	imagem_produto varchar NULL,
	descricao_produto varchar(255) not null,
	preco_produto numeric(21,2) not null,
	estrelas_produto int8 not null,
	CONSTRAINT produto_pkey PRIMARY KEY (id_produto),
	CONSTRAINT produto_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categoria(id_categoria),
	CONSTRAINT produto_id_fornecedor_fkey FOREIGN KEY (id_fornecedor) REFERENCES public.fornecedor(id_fornecedor)
);


CREATE TABLE public.usuario_rel_perfil (
	id_usuario int8 NULL,
	id_perfil int8 NULL,
	CONSTRAINT usuario_rel_perfil_id_perfil_fkey FOREIGN KEY (id_perfil) REFERENCES public.perfil(id_perfil),
	CONSTRAINT usuario_rel_perfil_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario)
);
