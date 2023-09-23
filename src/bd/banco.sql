CREATE TABLE Pacientes(
	PacienteId int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	isDeficiente bit NOT NULL,
	ContatoEmergencia  nvarchar(20) NOT NULL,
	Nome nvarchar(200) NOT NULL,
	Email nvarchar(200) NOT NULL,
	CPF nvarchar(11) NOT NULL,
	Senha nvarchar(257) NOT NULL,
	DataNascimento [datetime2](7) NOT NULL,
	Estado nvarchar(50) NOT NULL,
	FotoPerfil nvarchar(500) NOT NULL,
	Logradouro nvarchar(500) NOT NULL,
	Numero int NOT NULL,
	Profissao nvarchar(200) NOT NULL,
	Telefone nvarchar(20) NOT NULL,
	TipoCliente int NOT NULL,
);

CREATE TABLE Especialistas(
	EspecialistaId int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	IdentificacaoProf nvarchar(max) NOT NULL,
	Especialidade nvarchar(max) NOT NULL,
	Nome nvarchar(200) NOT NULL,
	Email nvarchar(200) NOT NULL,
	CPF nvarchar(11) NOT NULL,
	Senha nvarchar(257) NOT NULL,
	DataNascimento [datetime2](7) NOT NULL,
	Estado nvarchar(50) NOT NULL,
	FotoPerfil nvarchar(500) NOT NULL,
	Logradouro nvarchar(500) NOT NULL,
	Numero int NOT NULL,
	Profissao nvarchar(200) NOT NULL,
	Telefone nvarchar(20) NOT NULL,
	TipoCliente int NOT NULL,
);

CREATE TABLE Consultas(
	ConsultaId int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	DataConsulta [datetime2](7) NOT NULL,
	isConsultaRealizada bit NOT NULL,
	PacienteClienteId int NOT NULL,
	EspecialistaClienteId int NOT NULL,
);


CREATE TABLE ProblemasSaudeCliente(
	ProblemaSaudeClienteId int IDENTITY(1,1) PRIMARY KEY  NOT NULL,
	Problema nvarchar(max) NOT NULL,
	Descricao nvarchar(max) NOT NULL,
	PacienteClienteId int NOT NULL,
);


CREATE TABLE Avaliacoes(
	ConsultaId int NOT NULL,
	AvaliacaoId int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	Titulo nvarchar(500) NOT NULL,
	Descricao nvarchar(5000) NOT NULL,
);	

CREATE TABLE CategoriaEspecialista(
	CategoriasCategoriaId int NOT NULL,
	EspecialistasClienteId int NOT NULL,
);


CREATE TABLE Categorias(
	CategoriaId int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	NomeCategoria nvarchar(max) NOT NULL,
	InstituicaoId int NULL,
);

CREATE TABLE Chats(
	ChatId int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	DataCriacao [datetime2](7) NOT NULL,
	PacienteClienteId int NOT NULL,
	EspecialistaClienteId int NOT NULL,
);

CREATE TABLE Disponibilidades(
	DisponibilidadeId int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	Dia datetime2(7) NOT NULL,
	Horario datetime2(7) NOT NULL,
	Orientacao nvarchar(5000) NOT NULL,
	EspecialistaClienteId int NOT NULL,
);


CREATE TABLE Documentos(
	DocumentoId int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	URL nvarchar(500) NOT NULL,
	Titulo nvarchar(500) NOT NULL,
	Tipo nvarchar(50) NOT NULL,
	Descricao nvarchar(5000) NOT NULL,
	MedicamentoId int NOT NULL,
	ProblemaSaudeClienteId int NULL,
	MensagemId int NULL,
);


CREATE TABLE Chats(
	ChatId int IDENTITY(1,1) PRIMARY KEY  NOT NULL,
	DataCriacao [datetime2](7) NOT NULL,
	PacienteClienteId int NOT NULL,
	EspecialistaClienteId int NOT NULL,
);