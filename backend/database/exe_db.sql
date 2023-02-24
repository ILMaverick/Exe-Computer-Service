-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 24, 2023 alle 20:09
-- Versione del server: 10.4.27-MariaDB
-- Versione PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exe_db`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `harware`
--

CREATE TABLE `harware` (
  `id_hardware` int(11) NOT NULL,
  `id_user_fk` int(11) NOT NULL,
  `code_hardware` varchar(30) NOT NULL,
  `typology` set('personal_computer','laptop','smartphone','console','monitor','other') NOT NULL DEFAULT 'other',
  `model` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `interventions`
--

CREATE TABLE `interventions` (
  `id_intervent` int(11) NOT NULL,
  `id_user_fk` int(11) NOT NULL,
  `id_tech_fk` int(11) NOT NULL,
  `code_intervent` varchar(20) NOT NULL,
  `id_hardware_fk` int(11) NOT NULL,
  `creat_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  `finish_date` datetime NOT NULL,
  `state_intervent` enum('in_queue','pending','processing','finished','withdraw','closed') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `status_description`
--

CREATE TABLE `status_description` (
  `id_descr_status` int(11) NOT NULL,
  `id_interv_fk` int(11) NOT NULL,
  `id_tech_fk` int(11) NOT NULL,
  `text_descr` text NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `techs`
--

CREATE TABLE `techs` (
  `id_tech` int(11) NOT NULL,
  `code_tech` varchar(10) NOT NULL,
  `name` int(11) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `user_code` varchar(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `tel_number` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date_signUp` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id_user`, `user_code`, `name`, `lastname`, `tel_number`, `email`, `password`, `date_signUp`) VALUES
(1, 'UC00000001', 'Giulia', 'Fabiani', '+391234567890', 'giuliafabiani@gmail.com', 'Prova123!', '2023-02-23 22:29:13');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `harware`
--
ALTER TABLE `harware`
  ADD PRIMARY KEY (`id_hardware`),
  ADD UNIQUE KEY `code_hardware` (`code_hardware`),
  ADD KEY `harware_ibfk_1` (`id_user_fk`);

--
-- Indici per le tabelle `interventions`
--
ALTER TABLE `interventions`
  ADD PRIMARY KEY (`id_intervent`),
  ADD UNIQUE KEY `code_intervent` (`code_intervent`),
  ADD KEY `interventions_ibfk_1` (`id_user_fk`),
  ADD KEY `interventions_ibfk_3` (`id_hardware_fk`),
  ADD KEY `id_tech_fk` (`id_tech_fk`);

--
-- Indici per le tabelle `status_description`
--
ALTER TABLE `status_description`
  ADD PRIMARY KEY (`id_descr_status`),
  ADD KEY `status_description_ibfk_2` (`id_interv_fk`),
  ADD KEY `id_tech_fk` (`id_tech_fk`);

--
-- Indici per le tabelle `techs`
--
ALTER TABLE `techs`
  ADD PRIMARY KEY (`id_tech`),
  ADD UNIQUE KEY `code_tech` (`code_tech`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `userCode` (`user_code`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `telNumber` (`tel_number`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `harware`
--
ALTER TABLE `harware`
  MODIFY `id_hardware` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `interventions`
--
ALTER TABLE `interventions`
  MODIFY `id_intervent` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `status_description`
--
ALTER TABLE `status_description`
  MODIFY `id_descr_status` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `techs`
--
ALTER TABLE `techs`
  MODIFY `id_tech` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `harware`
--
ALTER TABLE `harware`
  ADD CONSTRAINT `harware_ibfk_1` FOREIGN KEY (`id_user_fk`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Limiti per la tabella `interventions`
--
ALTER TABLE `interventions`
  ADD CONSTRAINT `interventions_ibfk_1` FOREIGN KEY (`id_user_fk`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `interventions_ibfk_3` FOREIGN KEY (`id_hardware_fk`) REFERENCES `harware` (`id_hardware`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `interventions_ibfk_4` FOREIGN KEY (`id_tech_fk`) REFERENCES `techs` (`id_tech`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Limiti per la tabella `status_description`
--
ALTER TABLE `status_description`
  ADD CONSTRAINT `status_description_ibfk_2` FOREIGN KEY (`id_interv_fk`) REFERENCES `interventions` (`id_intervent`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `status_description_ibfk_3` FOREIGN KEY (`id_tech_fk`) REFERENCES `techs` (`id_tech`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
