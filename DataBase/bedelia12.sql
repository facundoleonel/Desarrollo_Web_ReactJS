-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-11-2023 a las 01:08:39
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
(9, '!Buenos Aires celebra su primer Festival de Arte Urbano', 'La capital argentina se vistió de colores y creatividad con su primer Festival de Arte Urbano, que atrajo a artistas nacionales e internacionales. Las calles se convirtieron en lienzos gigantes para expresiones artísticas de todo tipo.', 'https://via.placeholder.com/800x600', 1),
(10, 'Argentina avanza en la lucha contra el cambio climático', 'Argentina anunció nuevas políticas ambientales para combatir el cambio climático, incluyendo la promoción del transporte público y la reducción de emisiones de carbono. El país busca cumplir con los compromisos del Acuerdo de París', 'https://via.placeholder.com/800x600', 1),
(11, 'Economía argentina muestra signos de recuperación', 'Después de un período de incertidumbre económica, Argentina está viendo signos positivos de recuperación con un aumento en la inversión extranjera y la estabilización de su moneda. Los expertos sugieren que la economía se está fortaleciendo.', 'https://via.placeholder.com/800x600', 1),
(12, 'Descubrimiento arqueológico en la Patagonia argentina', 'Arqueólogos argentinos hicieron un emocionante descubrimiento en la Patagonia, donde encontraron restos fósiles de una especie de dinosaurio hasta ahora desconocida. Este hallazgo podría reescribir la historia de los dinosaurios en la región.', 'https://via.placeholder.com/800x600', 1),
(13, 'Argentina se destaca en la producción de vinos', 'Los vinos argentinos continúan ganando reconocimiento a nivel mundial, con un aumento en las exportaciones y premios internacionales. La industria vinícola del país se encuentra en pleno auge.', 'https://via.placeholder.com/800x600', 1),
(14, 'asda', 'asd', 'asdasd', 1);

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
(7, 'Contador Público', 0, 1),
(8, 'Licenciatura en Sistemas', 0, 1);

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
(14, 7, 36, 1),
(15, 7, 37, 1),
(16, 8, 38, 1);

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
(1, 31685001, 'Lionel', 'Messi', '2005-12-31', 0, 'messi@correo.com', 'asd', 'Sintitulo.jpg', 1),
(2, 43325068, 'Tomas', 'Villafañe', '2005-12-31', 0, 'tomasv@correo.com', 'fsd', 'Sintitulo.jpg', 1),
(10, 12312, 'asd', 'asd', '2005-10-17', 0, 'asadasd@sadad.com', 'asd', 'bg-banner.png', 1),
(23, 12312, 'Tomas', 'Villafañe', '2005-01-01', 3, 'messi@correo.com', 'asd', 'bg-banner.png', 1),
(27, 123456, '2345', '23332||', '2005-11-11', 0, 'messi@correo.com', '213', 'Capturaold - now.png', 1);

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
(6, 2, 8, '0000-00-00', NULL),
(7, 10, 8, '0000-00-00', NULL),
(8, 23, 8, '0000-00-00', NULL),
(9, 1, 8, '0000-00-00', NULL);

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
(32, '2023-11-02', 1, 38),
(33, '2023-11-02', 1, 38),
(34, '2023-11-02', 2, 38);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `idMateria` int(11) NOT NULL,
  `horasSemanales` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `idCarrera` smallint(1) NOT NULL DEFAULT 1,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`idMateria`, `horasSemanales`, `nombre`, `idCarrera`, `activo`) VALUES
(36, 1, 'Contador 1', 7, 1),
(37, 2, 'Contador 2', 7, 1),
(38, 1, 'Sistema 1', 8, 1);

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
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `tipoUsuario`, `correoElectronico`, `clave`, `nombre`, `apellido`, `activo`) VALUES
(1, 0, 'bedelia@gmail.com', '$2b$04$uTO40PCv68XkwpraLkyWduAkhia/udeJWlGscYHrCBBgz36x4kzOy', 'Julio', 'Profe', 1),
(2, 1, 'decano@gmail.com', '$2b$04$7FOx.RPaTqov7VG99t.GyOBd5ZAVQE6vIVUgvE0DXLH7kQuj0oyr6', 'Hernan', 'Coronel', 1);

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
  MODIFY `idBlog` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `idCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `carreramateria`
--
ALTER TABLE `carreramateria`
  MODIFY `idCarreraMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `idEstudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `estudiantecarrera`
--
ALTER TABLE `estudiantecarrera`
  MODIFY `idEstudianteCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `estudiantemateria`
--
ALTER TABLE `estudiantemateria`
  MODIFY `idEstudianteMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `idMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
