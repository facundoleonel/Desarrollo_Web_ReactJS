-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2023 a las 18:36:18
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bedelia12`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog`
--

CREATE TABLE `blog` (
  `idBlog` smallint(6) NOT NULL,
  `titulo` varchar(60) NOT NULL,
  `contenido` varchar(255) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`idBlog`, `titulo`, `contenido`, `imagen`, `activo`) VALUES
(8, 'Argentina anuncia inversión récord en energía renovable', 'El gobierno argentino anunció una inversión histórica de 2.5 mil millones de dólares en proyectos de energía renovable para reducir su huella de carbono. Se espera que esta medida impulse la economía y promueva fuentes de energía más limpias.', 'https://via.placeholder.com/800x600', 1),
(9, 'Buenos Aires celebra su primer Festival de Arte Urbano', 'La capital argentina se vistió de colores y creatividad con su primer Festival de Arte Urbano, que atrajo a artistas nacionales e internacionales. Las calles se convirtieron en lienzos gigantes para expresiones artísticas de todo tipo.', 'https://via.placeholder.com/800x600', 1),
(10, 'Argentina avanza en la lucha contra el cambio climático', 'Argentina anunció nuevas políticas ambientales para combatir el cambio climático, incluyendo la promoción del transporte público y la reducción de emisiones de carbono. El país busca cumplir con los compromisos del Acuerdo de París', 'https://via.placeholder.com/800x600', 1),
(11, 'Economía argentina muestra signos de recuperación', 'Después de un período de incertidumbre económica, Argentina está viendo signos positivos de recuperación con un aumento en la inversión extranjera y la estabilización de su moneda. Los expertos sugieren que la economía se está fortaleciendo.', 'https://via.placeholder.com/800x600', 1),
(12, 'Descubrimiento arqueológico en la Patagonia argentina', 'Arqueólogos argentinos hicieron un emocionante descubrimiento en la Patagonia, donde encontraron restos fósiles de una especie de dinosaurio hasta ahora desconocida. Este hallazgo podría reescribir la historia de los dinosaurios en la región.', 'https://via.placeholder.com/800x600', 1),
(13, 'Argentina se destaca en la producción de vinos', 'Los vinos argentinos continúan ganando reconocimiento a nivel mundial, con un aumento en las exportaciones y premios internacionales. La industria vinícola del país se encuentra en pleno auge.', 'https://via.placeholder.com/800x600', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `idCarrera` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `modalidad` tinyint(1) NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `carrera`
--

INSERT INTO `carrera` (`idCarrera`, `nombre`, `modalidad`, `activo`) VALUES
(1, 'TIDW', 1, 1),
(2, 'Lic en Sistemas', 0, 1),
(3, 'Programador de Sistemas', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreramateria`
--

CREATE TABLE `carreramateria` (
  `idCarreraMateria` int(11) NOT NULL,
  `idCarrera` int(11) NOT NULL,
  `idMateria` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `carreramateria`
--

INSERT INTO `carreramateria` (`idCarreraMateria`, `idCarrera`, `idMateria`, `activo`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 1, 3, 1),
(4, 1, 4, 1),
(5, 1, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `idEstudiante` int(11) NOT NULL,
  `dni` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `nacionalidad` tinyint(1) NOT NULL DEFAULT 0,
  `correoElectronico` varchar(100) NOT NULL,
  `celular` varchar(50) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`idEstudiante`, `dni`, `nombre`, `apellido`, `fechaNacimiento`, `nacionalidad`, `correoElectronico`, `celular`, `foto`, `activo`) VALUES
(1, 31685001, 'Lionel', 'Messi', '2023-10-12', 0, 'messi@correo.com', 'asd', 'asdasd', 1),
(2, 43325068, 'Tomas', 'Villafañe', '2023-10-11', 0, 'tomasv@correo.com', 'fsd', 'ds', 1),
(3, 39029137, 'Camila', 'Suarez', NULL, 0, 'camilas@correo.com', NULL, NULL, 0),
(4, 43264515, 'Mateo', 'Barainca', NULL, 0, 'mateob@correo.com', NULL, NULL, 0),
(10, 12312, 'asd', 'asd', '2023-10-17', 0, 'asadasd@sadad.com', 'asd', 'asd', 1),
(13, 2323, 'asdas', 'asdasd', '2023-10-18', 2, 'asadasd@sadad.com', NULL, NULL, 0),
(14, 2323, 'asdas', 'asdasd', '2023-10-18', 2, 'asadasd@sadad.com', NULL, NULL, 0),
(22, 12312, 'asdas', 'asd', '2023-10-18', 2, 'asadasd@sadad.com', 'qweqe', 'asasd', 0),
(23, 12312, 'Tomas', 'Villafañe', '2023-10-17', 3, 'messi@correo.com', 'asd', 'sadad', 1),
(24, 12312, 'Tomas', 'asd', '2023-10-20', 0, 'messi@correo.com', 'qweqe', 'asd', 1),
(25, 12313, 'qqweq', 'asasd', '2023-10-20', -1, 'tomasv@correo.com', 'asdad', 'sada', 0),
(26, 12312, 'Tomas', 'asd', '2023-10-12', 2, 'tomasv@correo.com', 'sadds', 'asasd', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantecarrera`
--

CREATE TABLE `estudiantecarrera` (
  `idEstudianteCarrera` int(11) NOT NULL,
  `estudiante` int(11) NOT NULL,
  `carrera` int(11) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `estudiantecarrera`
--

INSERT INTO `estudiantecarrera` (`idEstudianteCarrera`, `estudiante`, `carrera`, `fechaAlta`, `fechaBaja`) VALUES
(1, 1, 1, '2023-09-12', NULL),
(2, 2, 1, '2023-09-12', NULL),
(3, 3, 1, '2023-09-12', NULL),
(4, 4, 1, '2023-09-12', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantemateria`
--

CREATE TABLE `estudiantemateria` (
  `idEstudianteMateria` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `estudiante` int(11) NOT NULL,
  `materia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `estudiantemateria`
--

INSERT INTO `estudiantemateria` (`idEstudianteMateria`, `fecha`, `estudiante`, `materia`) VALUES
(6, '2023-09-12', 1, 1),
(7, '2023-09-12', 1, 2),
(8, '2023-09-12', 1, 3),
(9, '2023-09-12', 1, 4),
(10, '2023-09-12', 1, 5),
(11, '2023-09-12', 2, 1),
(12, '2023-09-12', 2, 2),
(13, '2023-09-12', 2, 3),
(14, '2023-09-12', 3, 1),
(15, '2023-09-12', 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `idMateria` int(11) NOT NULL,
  `horasSemanales` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipoMateria` tinyint(1) NOT NULL DEFAULT 1,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`idMateria`, `horasSemanales`, `nombre`, `tipoMateria`, `activo`) VALUES
(1, 7, 'Int. a la Informática', 1, 1),
(2, 7, 'Prog 1', 1, 1),
(3, 7, 'Arq. de Computadoras', 1, 1),
(4, 7, 'Diseño Gráfico', 1, 1),
(5, 7, 'Prog 2', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `tipoUsuario` tinyint(1) NOT NULL DEFAULT 1,
  `correoElectronico` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`idBlog`);

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`idCarrera`);

--
-- Indices de la tabla `carreramateria`
--
ALTER TABLE `carreramateria`
  ADD PRIMARY KEY (`idCarreraMateria`),
  ADD KEY `carreraMateria_fk0` (`idCarrera`),
  ADD KEY `carreraMateria_fk1` (`idMateria`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`idEstudiante`);

--
-- Indices de la tabla `estudiantecarrera`
--
ALTER TABLE `estudiantecarrera`
  ADD PRIMARY KEY (`idEstudianteCarrera`),
  ADD KEY `estudianteCarrera_fk0` (`estudiante`),
  ADD KEY `estudianteCarrera_fk1` (`carrera`);

--
-- Indices de la tabla `estudiantemateria`
--
ALTER TABLE `estudiantemateria`
  ADD PRIMARY KEY (`idEstudianteMateria`),
  ADD KEY `estudianteMateria_fk0` (`estudiante`),
  ADD KEY `estudianteMateria_fk1` (`materia`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`idMateria`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `correoElectronico` (`correoElectronico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blog`
--
ALTER TABLE `blog`
  MODIFY `idBlog` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `idCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `carreramateria`
--
ALTER TABLE `carreramateria`
  MODIFY `idCarreraMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `idEstudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `estudiantecarrera`
--
ALTER TABLE `estudiantecarrera`
  MODIFY `idEstudianteCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `estudiantemateria`
--
ALTER TABLE `estudiantemateria`
  MODIFY `idEstudianteMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `idMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carreramateria`
--
ALTER TABLE `carreramateria`
  ADD CONSTRAINT `carreraMateria_fk0` FOREIGN KEY (`idCarrera`) REFERENCES `carrera` (`idCarrera`),
  ADD CONSTRAINT `carreraMateria_fk1` FOREIGN KEY (`idMateria`) REFERENCES `materia` (`idMateria`);

--
-- Filtros para la tabla `estudiantecarrera`
--
ALTER TABLE `estudiantecarrera`
  ADD CONSTRAINT `estudianteCarrera_fk0` FOREIGN KEY (`estudiante`) REFERENCES `estudiante` (`idEstudiante`),
  ADD CONSTRAINT `estudianteCarrera_fk1` FOREIGN KEY (`carrera`) REFERENCES `carrera` (`idCarrera`);

--
-- Filtros para la tabla `estudiantemateria`
--
ALTER TABLE `estudiantemateria`
  ADD CONSTRAINT `estudianteMateria_fk0` FOREIGN KEY (`estudiante`) REFERENCES `estudiante` (`idEstudiante`),
  ADD CONSTRAINT `estudianteMateria_fk1` FOREIGN KEY (`materia`) REFERENCES `materia` (`idMateria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
