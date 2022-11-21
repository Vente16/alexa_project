-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 21, 2022 at 12:24 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `OPERADORA_OPS`
--

-- --------------------------------------------------------

--
-- Table structure for table `CLIENTS`
--

CREATE TABLE `CLIENTS` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `APELLIDO` varchar(200) NOT NULL,
  `TELEFONO` varchar(50) NOT NULL,
  `DOCUMENTO` varchar(50) NOT NULL,
  `TIPO_DOCUMENTO` varchar(200) NOT NULL,
  `FORM_BUILDER_ID` int(11) NOT NULL,
  `ACTION` int(11) DEFAULT NULL,
  `ESTADO` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `CLIENTS`
--

INSERT INTO `CLIENTS` (`ID`, `NOMBRE`, `APELLIDO`, `TELEFONO`, `DOCUMENTO`, `TIPO_DOCUMENTO`, `FORM_BUILDER_ID`, `ACTION`, `ESTADO`) VALUES
(1, 'CLIENTE ACTUALIZADO 3', 'APELLIDO ACTUALIZADO 3', '333333', '73223222*', 'PASAPORTE', 7, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `FORMS_BUILDER`
--

CREATE TABLE `FORMS_BUILDER` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `BUILDER` text NOT NULL,
  `ID_USER` int(11) NOT NULL DEFAULT '1',
  `CREATION_DATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `FORMS_BUILDER`
--

INSERT INTO `FORMS_BUILDER` (`ID`, `NAME`, `BUILDER`, `ID_USER`, `CREATION_DATE`) VALUES
(1, '', '{\"0\":{\"name\":\"name\",\"dbfield\":\"uandaud\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},\"1\":{\"name\":\"nonnas\",\"dbfield\":\"que\",\"type\":\"file\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},\"2\":{\"name\":\"nonnas\",\"dbfield\":\"sisas\",\"type\":\"file\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"}}', 1, '2022-11-03 17:55:38'),
(2, 'TEGINOASIDMNIAD ', '{\"0\":{\"name\":\"name\",\"dbfield\":\"uandaud\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},\"1\":{\"name\":\"nonnas\",\"dbfield\":\"que\",\"type\":\"file\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},\"2\":{\"name\":\"nonnas\",\"dbfield\":\"sisas\",\"type\":\"file\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"}}', 1, '2022-11-03 17:56:17'),
(3, 'FORMULARO_PRODUCTOS', '[{\"name\":\"NOMBRE\",\"dbfield\":\"NAME\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"FOTO\",\"dbfield\":\"PHOTO\",\"type\":\"file\",\"required\":false,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"DESCRIPCION\",\"dbfield\":\"DESCRIPTION\",\"type\":\"textarea\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"PRECIO\",\"dbfield\":\"PRICE\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"}]', 1, '2022-11-03 18:29:01'),
(4, 'FORMULARIO PARA PRODUCTOS', '[{\"name\":\"NOMBRE DE PRODUCTO\",\"dbfield\":\"NOMBRE\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"FOTO\",\"dbfield\":\"FOTO\",\"type\":\"file\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"DESCRIPCION DEL PRODUCTO\",\"dbfield\":\"DESCRIPCION\",\"type\":\"textarea\",\"required\":false,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"CATEGORIA PRODUCTO\",\"dbfield\":\"CATEGORIA\",\"type\":\"select\",\"required\":false,\"rules\":\"\",\"options\":[\"Teconlogia\",\"Celulares\",\"Electrodomesticos\",\"Zapatos\",\"Deportes\",\"Perfumes\",\"Juguetes\",\"Comida\",\"Dormitorio\",\"Accesorios\"],\"value\":\"\",\"url\":\"\"},{\"name\":\"PRECIO PRODUCTO\",\"dbfield\":\"PRECIO\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"}]', 1, '2022-11-08 13:27:05'),
(5, 'TEGINOASIDMNIAD ', '{\"0\":{\"name\":\"name\",\"dbfield\":\"uandaud\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},\"1\":{\"name\":\"nonnas\",\"dbfield\":\"que\",\"type\":\"file\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},\"2\":{\"name\":\"nonnas\",\"dbfield\":\"sisas\",\"type\":\"file\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"}}', 1, '2022-11-16 21:03:04'),
(6, 'TEGINOASIDMNIAD ', '{\"0\":{\"name\":\"name\",\"dbfield\":\"uandaud\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},\"1\":{\"name\":\"nonnas\",\"dbfield\":\"que\",\"type\":\"file\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},\"2\":{\"name\":\"nonnas\",\"dbfield\":\"sisas\",\"type\":\"file\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"}}', 1, '2022-11-16 21:36:57'),
(7, 'FORMULARIO PARA CLIENTES', '[{\"name\":\"NOMBRE CLIENTE\",\"dbfield\":\"NOMBRE\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"APELLIDO CLIENTE\",\"dbfield\":\"APELLIDO\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"TELEFONO  CLIENTE\",\"dbfield\":\"TELEFONO\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"DOCUMENTO  CLIENTE\",\"dbfield\":\"DOCUMENTO\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"TIPO DOCUMENTO  CLIENTE\",\"dbfield\":\"TIPO_DOCUMENTO\",\"type\":\"select\",\"required\":true,\"rules\":\"\",\"options\":[\"CÉDULA DE CUIDADANÍA\",\"CÉDULA DE EXTRANJERÍA\",\"PASAPORTE\"],\"value\":\"\",\"url\":\"\"}]', 1, '2022-11-20 19:23:44'),
(8, 'FORMULARIO PARA PROVEEDORES', '[{\"name\":\"NOMBRE DEL PROVEEDOR\",\"dbfield\":\"NOMBRE\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"NIT DEL PROVEEDOR\",\"dbfield\":\"NIT\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"DIRECCIÓN DEL PROVEEDOR\",\"dbfield\":\"DIRECCION\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"TELEFONO DEL PROVEEDOR\",\"dbfield\":\"TELEFONO\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"}]', 1, '2022-11-20 19:54:38'),
(9, 'FORMULARIO PARA USUARIOS', '[{\"name\":\"NOMBRE\",\"dbfield\":\"NOMBRE\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"APELLIDO\",\"dbfield\":\"APELLIDO\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"CONTRASEÑA\",\"dbfield\":\"PASSWORD\",\"type\":\"password\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"},{\"name\":\"ROL DE USUARIO\",\"dbfield\":\"ROL\",\"type\":\"select\",\"required\":true,\"rules\":\"\",\"options\":[\"ADMINISTRADOR\",\"VENDEDOR\",\"OPERARIO\"],\"value\":\"\",\"url\":\"\"},{\"name\":\"CORREO\",\"dbfield\":\"EMAIL\",\"type\":\"text\",\"required\":true,\"rules\":\"\",\"options\":[],\"value\":\"\",\"url\":\"\"}]', 1, '2022-11-20 20:46:38');

-- --------------------------------------------------------

--
-- Table structure for table `MODULES`
--

CREATE TABLE `MODULES` (
  `ID` int(11) NOT NULL,
  `NAME` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `PRODUCTS`
--

CREATE TABLE `PRODUCTS` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `FOTO` text NOT NULL,
  `DESCRIPCION` text NOT NULL,
  `CATEGORIA` varchar(200) DEFAULT NULL,
  `PRECIO` varchar(10) NOT NULL,
  `FORM_BUILDER_ID` int(11) NOT NULL,
  `ID_USER` int(11) DEFAULT '1',
  `DATE` datetime DEFAULT CURRENT_TIMESTAMP,
  `ACTION` varchar(10) DEFAULT NULL,
  `ESTADO` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `PRODUCTS`
--

INSERT INTO `PRODUCTS` (`ID`, `NOMBRE`, `FOTO`, `DESCRIPCION`, `CATEGORIA`, `PRECIO`, `FORM_BUILDER_ID`, `ID_USER`, `DATE`, `ACTION`, `ESTADO`) VALUES
(1, 'MI PRIMER PRODUCTO ACTUALIZADO', 'api/files/_image_636ac87f7591b.jpeg', 'ESTE SERIA EL PRIMER PRODUCTO DE PRUEBA', 'Perfumes', '58.7654', 4, 1, '2022-11-08 16:22:07', NULL, 0),
(2, 'ARQUITECTURA JEJE', 'api/files/_image_636ac9cb36355.png', '3322', 'Deportes', '533333', 4, 1, '2022-11-08 16:24:29', NULL, 0),
(3, 'NUEVO NOMBRE', 'api/files/_image_63759f9b72834.png', 'PRODCUTO DE PRUEBA PARA ESTO', 'Electrodomesticos', '44444', 4, 1, '2022-11-08 16:25:37', NULL, 1),
(4, 'PRODUCTO DE PRUEBA', 'api/files/_image_637597c7aa75a.png', 'Descripcion para el producto', 'Celulares', '4039933', 4, 1, '2022-11-16 21:09:11', NULL, 1),
(5, 'PRUEBA PRODUCTO', 'api/files/_image_637599123e5a9.jpeg', 'an amazing product', 'CATEGORIA', '3342', 78, 1, '2022-11-16 21:14:42', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `PROVIDERS`
--

CREATE TABLE `PROVIDERS` (
  `ID` int(11) NOT NULL,
  `NOMBRE` text NOT NULL,
  `NIT` varchar(20) NOT NULL,
  `DIRECCION` varchar(200) NOT NULL,
  `TELEFONO` varchar(20) NOT NULL,
  `FORM_BUILDER_ID` int(11) NOT NULL,
  `ACTION` int(11) DEFAULT NULL,
  `ESTADO` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `PROVIDERS`
--

INSERT INTO `PROVIDERS` (`ID`, `NOMBRE`, `NIT`, `DIRECCION`, `TELEFONO`, `FORM_BUILDER_ID`, `ACTION`, `ESTADO`) VALUES
(1, 'TEXTILES S.A.S', '44444', 'CALLE 50 # 20 - 30', '85858585', 8, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `TABLES_BUILDER`
--

CREATE TABLE `TABLES_BUILDER` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `NAME_TABLE` varchar(100) NOT NULL,
  `FIELDS` text NOT NULL,
  `BUILDER` text NOT NULL,
  `ID_USER` int(11) NOT NULL DEFAULT '1',
  `DATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TABLES_BUILDER`
--

INSERT INTO `TABLES_BUILDER` (`ID`, `NAME`, `NAME_TABLE`, `FIELDS`, `BUILDER`, `ID_USER`, `DATE`) VALUES
(1, 'TABLA BUILDER', 'TABLES_BUILDER', 'ID,NAME,NAME_TABLE,FIELDS', '{\"name\":\"TABLA BUILDER\",\"tableName\":\"TABLES_BUILDER\",\"fields\":{\"ID\":true,\"NAME\":true,\"NAME_TABLE\":true,\"FIELDS\":true,\"BUILDER\":false,\"ID_USER\":false,\"DATE\":false},\"fieldsFiltered\":[\"ID\",\"NAME\",\"NAME_TABLE\",\"FIELDS\",\"ACTION\"],\"filedsFilteredJoined\":\"ID,NAME,NAME_TABLE,FIELDS,ACTION\"}', 1, '2022-11-02 23:16:35'),
(2, 'MY BUILD USERS', 'USERS', 'ID,NAME,ACTION', '{\"name\":\"MY BUILD USERS\",\"tableName\":\"USERS\",\"fields\":{\"ID\":true,\"NAME\":true,\"LASTNAME\":false,\"PASSWORD\":false,\"ROL\":false,\"EMAIL\":true},\"fieldsFiltered\":[\"ID\",\"NAME\",\"EMAIL\",\"ACTION\"],\"filedsFilteredJoined\":\"ID,NAME,EMAIL,ACTION\"}', 1, '2022-11-03 09:20:22'),
(7, 'BUILDER PRODUCTOS', 'PRODUCTS', 'ID,NOMBRE,FOTO,CATEGORIA,PRECIO,ACTION', '{\"name\":\"BUILDER PRODUCTOS\",\"tableName\":\"PRODUCTS\",\"fields\":{\"ID\":true,\"NOMBRE\":true,\"FOTO\":true,\"DESCRIPCION\":false,\"CATEGORIA\":true,\"PRECIO\":true,\"FORM_BUILDER_ID\":false,\"ID_USER\":false,\"DATE\":false,\"ACTION\":false},\"fieldsFiltered\":[\"ID\",\"NOMBRE\",\"FOTO\",\"CATEGORIA\",\"PRECIO\",\"ACTION\"],\"filedsFilteredJoined\":\"ID,NOMBRE,FOTO,CATEGORIA,PRECIO,ACTION\"}', 1, '2022-11-08 09:45:09'),
(8, 'TEST', 'MODULES', 'ID, NAME', '{\"browsers\":{\"firefox\":{\"name\":\"Firefox\",\"pref_url\":\"about:config\",\"releases\":{\"1\":{\"release_date\":\"2004-11-09\",\"status\":\"retired\",\"engine\":\"Gecko\",\"engine_version\":\"1.7\"}}}}}', 1, '2022-11-16 21:01:31'),
(9, 'CLIENTS BUILDER', 'CLIENTS', 'ID,NOMBRE,APELLIDO,DOCUMENTO,ACTION', '{\"name\":\"CLIENTS BUILDER\",\"tableName\":\"CLIENTS\",\"fields\":{\"ID\":true,\"NOMBRE\":true,\"APELLIDO\":true,\"TELEFONO\":false,\"DOCUMENTO\":true,\"TIPO_DOCUMENTO\":false,\"ACTION\":true,\"ESTADO\":false},\"fieldsFiltered\":[\"ID\",\"NOMBRE\",\"APELLIDO\",\"DOCUMENTO\",\"ACTION\",\"ACTION\"],\"filedsFilteredJoined\":\"ID,NOMBRE,APELLIDO,DOCUMENTO,ACTION,ACTION\"}', 1, '2022-11-20 19:14:14'),
(10, 'PROVIDERS BUILDER', 'PROVIDERS', 'ID,NOMBRE,NIT,DIRECCION,TELEFONO,ACTION', '{\"name\":\"PROVIDERS BUILDER\",\"tableName\":\"PROVIDERS\",\"fields\":{\"ID\":true,\"NOMBRE\":true,\"NIT\":true,\"DIRECCION\":true,\"TELEFONO\":true,\"FORM_BUILDER_ID\":false,\"ACTION\":true,\"ESTADO\":false},\"fieldsFiltered\":[\"ID\",\"NOMBRE\",\"NIT\",\"DIRECCION\",\"TELEFONO\",\"ACTION\",\"ACTION\"],\"filedsFilteredJoined\":\"ID,NOMBRE,NIT,DIRECCION,TELEFONO,ACTION,ACTION\"}', 1, '2022-11-20 19:52:12'),
(11, 'USERS BUILDER', 'USERS', 'ID,NOMBRE,APELLIDO,ROL,EMAIL,ACTION', '{\"name\":\"USERS BUILDER\",\"tableName\":\"USERS\",\"fields\":{\"ID\":true,\"NOMBRE\":true,\"APELLIDO\":true,\"PASSWORD\":false,\"ROL\":true,\"EMAIL\":true,\"FORM_BUILDER_ID\":false,\"ACTION\":false,\"ESTADO\":false},\"fieldsFiltered\":[\"ID\",\"NOMBRE\",\"APELLIDO\",\"ROL\",\"EMAIL\",\"ACTION\"],\"filedsFilteredJoined\":\"ID,NOMBRE,APELLIDO,ROL,EMAIL,ACTION\"}', 1, '2022-11-20 20:48:32');

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `APELLIDO` varchar(200) NOT NULL,
  `PASSWORD` varchar(200) NOT NULL,
  `ROL` varchar(200) NOT NULL DEFAULT 'ADMIN',
  `EMAIL` varchar(200) NOT NULL,
  `FORM_BUILDER_ID` int(11) NOT NULL,
  `ACTION` varchar(1) DEFAULT NULL,
  `ESTADO` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `USERS`
--

INSERT INTO `USERS` (`ID`, `NOMBRE`, `APELLIDO`, `PASSWORD`, `ROL`, `EMAIL`, `FORM_BUILDER_ID`, `ACTION`, `ESTADO`) VALUES
(1, 'John test', 'Vente test', '12345678', 'ADMINISTRADOR', 'correo@prueba.com', 9, NULL, 1),
(2, 'Alexa', 'Marquez', 'alexa123', 'SUBADMINI', 'alexa@marquez.com', 9, NULL, 1),
(3, 'MI USUARIO', 'APELLIDO P ', '123', 'VENDEDOR', 'email@usuario2.com', 9, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CLIENTS`
--
ALTER TABLE `CLIENTS`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `FORMS_BUILDER`
--
ALTER TABLE `FORMS_BUILDER`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `MODULES`
--
ALTER TABLE `MODULES`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `PRODUCTS`
--
ALTER TABLE `PRODUCTS`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `PROVIDERS`
--
ALTER TABLE `PROVIDERS`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `TABLES_BUILDER`
--
ALTER TABLE `TABLES_BUILDER`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `CLIENTS`
--
ALTER TABLE `CLIENTS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `FORMS_BUILDER`
--
ALTER TABLE `FORMS_BUILDER`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `MODULES`
--
ALTER TABLE `MODULES`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PRODUCTS`
--
ALTER TABLE `PRODUCTS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `PROVIDERS`
--
ALTER TABLE `PROVIDERS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `TABLES_BUILDER`
--
ALTER TABLE `TABLES_BUILDER`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `USERS`
--
ALTER TABLE `USERS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
