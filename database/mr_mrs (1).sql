-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2024 at 06:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mr&mrs`
--

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `photo` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `title`, `photo`, `date`) VALUES
(1, 'Wedding on the ', 'gallery-3.jpg', '2024-02-04'),
(4, 'Wedding on the ', 'gallery-6.jpg', '2024-02-06'),
(8, 'Wedding on the beach', 'gallery-4.jpg', '2024-02-08'),
(9, 'Bride in room', 'gallery-8.jpg', '2024-02-10'),
(10, 'Garden photo', 'gallery-5.jpg', '2024-02-09'),
(11, 'Rose day', 'gallery-7.jpg', '2024-02-11'),
(12, 'Celebreate  with Bride', 'gallery-1.jpg', '2024-02-08');

-- --------------------------------------------------------

--
-- Table structure for table `guest`
--

CREATE TABLE `guest` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `identity` varchar(100) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `guest`
--

INSERT INTO `guest` (`id`, `name`, `identity`, `photo`) VALUES
(1, 'Helal', 'Grooms man', 'groomsmen-2.png'),
(3, 'Fazle', 'Brides man', 'Groomsmen-1.png'),
(4, 'Sazib', 'Grooms man', 'Groomsmen-3.png'),
(5, 'Shauli', 'Bride Woman', 'bridesmaid-1.png'),
(6, 'Helen', 'Bride Woman', 'bridesmaid-3.png'),
(7, 'Maria', 'Bride Woman', 'bridesmaid-4.png'),
(8, 'Jhon', 'Bride man', 'groomsmen-4.png'),
(9, 'Jerry', 'Grooms Woman', 'bridesmaid-team-2.png');

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

CREATE TABLE `story` (
  `id` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `title` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `story`
--

INSERT INTO `story` (`id`, `photo`, `title`, `date`, `details`) VALUES
(2, 'story-2.jpg', 'Wedding on the beach', '2024-02-08', 'Lorem Ipsum has been the industry standard dummy'),
(8, 'story-3.jpg', 'Wedding on the', '2024-02-09', 'Wedding on the beach'),
(10, 'story-1.jpg', 'Ipsum has been ', '2024-02-11', 'Lorem Ipsum has been the industry standard dummy');

-- --------------------------------------------------------

--
-- Table structure for table `timeline`
--

CREATE TABLE `timeline` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `details` varchar(255) NOT NULL,
  `start_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `end_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `timeline`
--

INSERT INTO `timeline` (`id`, `title`, `details`, `start_time`, `end_time`) VALUES
(1, 'Dinner', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', '2024-02-08 22:11:00', '2024-02-08 09:11:00'),
(2, 'Wedding on the beach', 'Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur', '2024-02-08 19:30:00', '2024-02-08 22:30:00'),
(3, 'Wedding on the beach', 'Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur', '2024-02-09 19:30:00', '2024-02-09 22:30:00'),
(4, 'Weeding Party', 'Quick List of Wedding Roles · Honor Attendants · Maid/Matron of Honor · Best Man · Bridesmaids · Bridesmen · Groomsmen · Groomswomen · Junior', '2024-02-10 21:39:00', '2024-02-10 14:40:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Abdullah', 'abdullah@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guest`
--
ALTER TABLE `guest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `story`
--
ALTER TABLE `story`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timeline`
--
ALTER TABLE `timeline`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `guest`
--
ALTER TABLE `guest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `story`
--
ALTER TABLE `story`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `timeline`
--
ALTER TABLE `timeline`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
