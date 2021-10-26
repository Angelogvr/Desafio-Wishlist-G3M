CREATE DATABASE M_WISHLIST
GO

USE M_WISHLIST
GO

CREATE TABLE USUARIO (
	idUsuario INT PRIMARY KEY IDENTITY,
	username VARCHAR(50) UNIQUE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	senha VARCHAR(20) UNIQUE NOT NULL,
)

CREATE TABLE DESEJOS (
	idDesejo INT PRIMARY KEY IDENTITY,
	idUsuario INT FOREIGN KEY REFERENCES USUARIO(idUsuario),
	descricao VARCHAR(256) NOT NULL,
	dataCadastro DATE NOT NULL,
)