-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-04-2018 a las 11:18:35
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotelinking`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigo`
--

CREATE TABLE `codigo` (
  `codigoPromocional` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `canjeado` varchar(1) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(150) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `codigo`
--

INSERT INTO `codigo` (`codigoPromocional`, `canjeado`, `email`) VALUES
('5ade187dcfe00', 's', 'hola@hola.com'),
('5ade19b21cb71', 's', 'hola@hola.com'),
('5ade253d40c66', 's', 'hola@hola.com'),
('5ade4caaae21d', 's', 'hola@hola.com'),
('5ade4dfabe079', 's', 'adeu@adeu.com'),
('5ade4e3fa6258', 's', 'adeu@adeu.com'),
('5ade4edb76182', 'n', 'adeu@adeu.com'),
('5ade4f2ca3682', 's', 'hola@hola.com'),
('5ade4f42648e5', 'n', 'hola@hola.com'),
('5adef5c67738b', 's', 'juan@juan.com'),
('5adef5ca73af8', 'n', 'juan@juan.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(150) COLLATE utf8_bin NOT NULL,
  `usuario` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `pass` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`email`, `usuario`, `pass`) VALUES
('adeu@adeu.com', 'adeu', 'adeu'),
('hola@hola.com', 'hola', 'hola'),
('juan@juan.com', 'Juan', 'juan');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `codigo`
--
ALTER TABLE `codigo`
  ADD KEY `email` (`email`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `codigo`
--
ALTER TABLE `codigo`
  ADD CONSTRAINT `codigo_ibfk_1` FOREIGN KEY (`email`) REFERENCES `usuarios` (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
