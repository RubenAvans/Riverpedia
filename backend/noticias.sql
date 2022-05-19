-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 19-05-2022 a las 03:47:45
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `riverpedia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

DROP TABLE IF EXISTS `noticias`;
CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) CHARACTER SET utf8 NOT NULL,
  `subtitulo` text CHARACTER SET utf8 NOT NULL,
  `cuerpo` text CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Enzo Pérez para la historia: cuando River ganó con un jugador en el arco', 'Un año atrás, el Millonario hacía historia en la Copa Libertadores: derrotaba a Independiente Santa Fe con Enzo Pérez en el arco y disputaba su primer encuentro con un jugador de campo bajo los tres palos. ¡Un partido inolvidable!', 'La era de Marcelo Gallardo en River quedará marcada a fuego en los hinchas riverplatenses por grandísimas gestas que se realizaron en el ciclo: 14 títulos, la inolvidable final de Madrid, los clásicos ganados a Boca y un altísimo vuelo futbolístico. Pero, sin dudas, otro de los grandes capítulos históricos del River de Gallardo tuvo lugar el 19 de mayo del 2021: Enzo Pérez se vistió de héroe, atajó y el Millonario hizo historia en la Libertadores...\r\n\r\nEnzo Pérez dejó todo por ponerse la camiseta de River. Siendo joven y estando vigente en Europa, negoció su salida del Valencia, cumplió su sueño de vestir la banda roja y, desde que llegó, demostró estar a la altura tanto dentro de la cancha como fuera de ella.\r\n\r\nEl volante, aquella noche del 19 de mayo, se puso los guantes y el buzo de arquero: debido a un brote de coronavirus en el plantel de River (hubo veinte casos positivos), Gallardo se quedó sin arquero para enfrentar a Independiente Santa Fe en el Monumental. A pesar del pedido de la dirigencia del Millonario de poder inscribir a dos guardametas más para dicho encuentro, CONMEBOL no dio lugar y el Muñeco tuvo que armar el once con los jugadores que tenía a disposición. Y ahí apareció el liderazgo de Enzo...\r\n\r\nEl capitán del Millonario no dudó y se postuló para ir al arco en los 90 minutos. ¿Había atajado anteriormente? En algún que otro entrenamiento, pero no más que eso. Enzo recibió consejos de Armani, Bologna y Lux en la previa para afrontar el encuentro con más tranquilidad. Además, también lo hizo César Zinelli, colaborador del cuerpo técnico. Y estuvo más que a la altura: River ganó 2-1, intentó sacar todas las pelotas (hasta las que iban afuera) y el Monumental lo ovacionó.\r\n\r\nLa formación de River ese día fue:\r\n\r\nEnzo Pérez; Milton Casco, Tomás Lecanda, Jonatan Maidana, David Martínez, Fabrizio Angileri; Felipe Peña Bifore, José Paradela, Jorge Carrascal, Julián Álvarez; Agustín Fontana.'),
(2, '¿Cómo podría formar River con tantas bajas?', 'Entre lesionados, contagiados de Covid y suspendidos, a Gallardo le faltan diez futbolistas y tendrá que reacomodar el equipo para recibir a Colo Colo.', 'Justo en la víspera de cumplirse un año del día que Enzo Pérez debió debutar como arquero de River frente a Independiente Santa Fe por la Copa Libertadores 2021, en Núñez otra vez volvieron a aparecer casos de Covid-19 que le traen problemas a Marcelo Gallardo para armar el equipo. El Más Grande debe recibir este jueves, desde las 21 horas, a Colo Colo y otra vez no podrá contrar con su arquero titular, Franco Armani, aunque sí por el momento están disponibles Ezequiel Centurión y Franco Petroli, los suplentes.\r\n\r\nEn la mañana de este miércoles, el club confirmó los casos positivos de Armani, Tomás Pochettino y Javier Pinola, que obviamente no estarán disponibles para el encuentro frente a los chilenos. El Muñeco tampoco podrá contar con Juan Fernando Quintero, quien se volvió a desgarrar de la misma lesión en el isquiotibial izquierdo que había sufrido justo cuando estaba a punto de regresar. Y otro que padece una molestia muscular en el isquiotibial izquierdo es Cristian Ferreira.'),
(3, 'hola soy un titulo', 'hola soy un subtitulo', 'hola soy un cuerpo');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
