-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mar 12, 2023 alle 11:56
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
-- Struttura della tabella `aggiornamenti`
--

CREATE TABLE `aggiornamenti` (
  `id_aggiornamento` int(11) NOT NULL,
  `id_interv_fk` int(11) NOT NULL,
  `id_tech_fk` int(11) NOT NULL,
  `descrizione` text NOT NULL,
  `data_creazione` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `harware`
--

CREATE TABLE `harware` (
  `id_hardware` int(11) NOT NULL,
  `id_utente_fk` int(11) NOT NULL,
  `tipologia` set('personal_computer','laptop','smartphone','console','monitor','altro') NOT NULL DEFAULT 'altro',
  `modello` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `interventi`
--

CREATE TABLE `interventi` (
  `id_intervento` int(11) NOT NULL,
  `id_utente_fk` int(11) NOT NULL,
  `id_tech_fk` int(11) NOT NULL,
  `id_hardware_fk` int(11) NOT NULL,
  `data_creazione` datetime NOT NULL,
  `data_aggiornamento` datetime NOT NULL,
  `data_chiusura` datetime NOT NULL,
  `stato_intervento` enum('in_coda','attesa_risposta','in_lavorazione','ultimato','ritirato','chiuso') NOT NULL DEFAULT 'in_coda',
  `descrizione` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id_utente` int(8) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `cognome` varchar(40) NOT NULL,
  `numero_tel` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `indirizzo` varchar(40) DEFAULT NULL,
  `numero_civico` int(5) DEFAULT NULL,
  `citta` varchar(20) DEFAULT NULL,
  `provincia` varchar(2) DEFAULT NULL,
  `ruolo` set('standard','tecnico','commerciale','') NOT NULL DEFAULT 'standard',
  `data_iscrizione` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id_utente`, `nome`, `cognome`, `numero_tel`, `email`, `password`, `indirizzo`, `numero_civico`, `citta`, `provincia`, `ruolo`, `data_iscrizione`) VALUES
(1, 'MATTEO', 'PALLOTTI', '3929217858', 'PALLOTTIMATTEO87@GMAIL.COM', '$2b$10$k9pXzUkWlmp.gDZZotyS4u6qzH8h42kpwaGCPXwT9BY85BdACl7Ki', 'Via Italo Svevo', 18, '', '', 'tecnico', '2023-03-07 01:29:27'),
(2, 'GIULIA', 'FABIANI', '3651256458', 'GIULIAFABIANI@EMAIL.IT', '$2b$10$APXbGxcSdLem9mw5PU/MGeXdQk4fOVWi//IeNMjMCyOu/Mx7PkmXG', '', 0, '', '', 'standard', '2023-03-12 11:02:14'),
(3, 'MARIO', 'ROSSI', '3642515365', 'MARIOROSSI@GMAIL.COM', '$2b$10$kXsXqPWx0YX9LJrfuCDY4u2wdxZyPj25QCbwIRdaP5jNnGQ2jLE1C', 'Via Martiri', 29, '', '', 'standard', '2023-03-12 11:04:39'),
(4, 'CARLO', 'BIANCHI', '3651246789', 'MARIOBIANCHI@LIBERO.IT', '$2b$10$Zv3mUVoQlSGZ7tytYfbAK.0dz9E8DPn7mJ9KOVMdUKmshl5iP31rm', 'Via Cefalonia', 5245, '', '', 'standard', '2023-03-12 11:12:05'),
(5, 'RITA', 'VERDI', '3698521470', 'RITAVERDI@TISCALI.IT', '$2b$10$HSHCQFENo/mngTJqgL688u9aSrv0shyu2TIiISGSCgzDJ6z.6bHxG', 'C.so Garibaldi', 26, '', '', 'standard', '2023-03-12 11:14:13'),
(6, 'MARCO', 'GIALLI', '3625415698', 'MARCOGIALLI@PEC.IT', '$2b$10$Mn/o7/zKgrfgZCJ3sx0q9edSM3RX8pheTrVtapRR6AU/4Ty5i7r4m', 'Via Indipendenza', 2654, '', '', 'standard', '2023-03-12 11:35:01');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `aggiornamenti`
--
ALTER TABLE `aggiornamenti`
  ADD PRIMARY KEY (`id_aggiornamento`),
  ADD KEY `id_interv_fk` (`id_interv_fk`) USING BTREE,
  ADD KEY `id_tech_fk` (`id_tech_fk`);

--
-- Indici per le tabelle `harware`
--
ALTER TABLE `harware`
  ADD PRIMARY KEY (`id_hardware`),
  ADD KEY `id_utente_fk` (`id_utente_fk`) USING BTREE;

--
-- Indici per le tabelle `interventi`
--
ALTER TABLE `interventi`
  ADD PRIMARY KEY (`id_intervento`),
  ADD KEY `id_utente_fk` (`id_utente_fk`) USING BTREE,
  ADD KEY `id_hardware_fk` (`id_hardware_fk`) USING BTREE,
  ADD KEY `id_tech_fk` (`id_tech_fk`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id_utente`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `numero_tel` (`numero_tel`) USING BTREE;

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `aggiornamenti`
--
ALTER TABLE `aggiornamenti`
  MODIFY `id_aggiornamento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `harware`
--
ALTER TABLE `harware`
  MODIFY `id_hardware` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `interventi`
--
ALTER TABLE `interventi`
  MODIFY `id_intervento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id_utente` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `aggiornamenti`
--
ALTER TABLE `aggiornamenti`
  ADD CONSTRAINT `aggiornamenti_ibfk_2` FOREIGN KEY (`id_interv_fk`) REFERENCES `interventi` (`id_intervento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `aggiornamenti_ibfk_3` FOREIGN KEY (`id_tech_fk`) REFERENCES `utenti` (`id_utente`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Limiti per la tabella `harware`
--
ALTER TABLE `harware`
  ADD CONSTRAINT `harware_ibfk_1` FOREIGN KEY (`id_utente_fk`) REFERENCES `utenti` (`id_utente`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Limiti per la tabella `interventi`
--
ALTER TABLE `interventi`
  ADD CONSTRAINT `interventi_ibfk_1` FOREIGN KEY (`id_utente_fk`) REFERENCES `utenti` (`id_utente`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `interventi_ibfk_3` FOREIGN KEY (`id_hardware_fk`) REFERENCES `harware` (`id_hardware`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `interventi_ibfk_4` FOREIGN KEY (`id_tech_fk`) REFERENCES `utenti` (`id_utente`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
