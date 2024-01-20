-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2023 at 12:03 AM
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
-- Database: `growth_craft`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `name`, `email`, `password_hash`) VALUES
(1, 'Abhishek', 'abhishek.wakchaure@growthcraft.in', '$2y$10$NATY7csT.lFsSjlVKY6P1ezJoNwIMEACZZi6fq2h4Gt9l2CU0GvrW'),
(2, 'Dinesh Surya', 'dineshsurya.2002@gmail.com', '$2y$10$VYgKTrpS.5sNmxTozpPSG.128X/fhxLHmIFGHntrW8aDstuPaKh9q');

-- --------------------------------------------------------

--
-- Table structure for table `properties_db_rent`
--

CREATE TABLE `properties_db_rent` (
  `prop_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(128) NOT NULL,
  `admin_id` int(11) NOT NULL DEFAULT 0,
  `property_name` varchar(256) NOT NULL,
  `address` text NOT NULL,
  `age` int(11) NOT NULL,
  `balcony` int(11) NOT NULL,
  `bathroom` int(11) NOT NULL,
  `bedroom` int(11) NOT NULL,
  `bhk` int(11) NOT NULL,
  `carpet` int(11) NOT NULL,
  `security_deposit` int(11) NOT NULL,
  `description` text NOT NULL,
  `furnished` varchar(128) NOT NULL,
  `garden` varchar(128) NOT NULL,
  `gym` varchar(128) NOT NULL,
  `hospital` varchar(128) NOT NULL,
  `lift` varchar(128) NOT NULL,
  `market_area` varchar(128) NOT NULL,
  `offer` varchar(128) NOT NULL,
  `parking_area` varchar(128) NOT NULL,
  `play_ground` varchar(128) NOT NULL,
  `power_backup` varchar(128) NOT NULL,
  `rent` int(11) NOT NULL,
  `room_floor` int(11) NOT NULL,
  `school` varchar(128) NOT NULL,
  `security_guard` varchar(128) NOT NULL,
  `shopping_mall` varchar(128) NOT NULL,
  `status` varchar(128) NOT NULL,
  `total_floors` int(11) NOT NULL,
  `type` varchar(128) NOT NULL,
  `water_supply` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `properties_db_rent`
--

INSERT INTO `properties_db_rent` (`prop_id`, `user_id`, `user_name`, `admin_id`, `property_name`, `address`, `age`, `balcony`, `bathroom`, `bedroom`, `bhk`, `carpet`, `security_deposit`, `description`, `furnished`, `garden`, `gym`, `hospital`, `lift`, `market_area`, `offer`, `parking_area`, `play_ground`, `power_backup`, `rent`, `room_floor`, `school`, `security_guard`, `shopping_mall`, `status`, `total_floors`, `type`, `water_supply`) VALUES
(6, 27, 'Aryan', 2, 'Dubai homes', 'In dubai, near burj khalifa', 2, 1, 1, 1, 2, 1, 200000, 'Biggest homes ever!', 'furnished', 'No', 'No', 'No', 'Yes', 'Yes', 'rent', 'Yes', 'No', 'Yes', 40000, 1, 'Yes', 'Yes', 'No', 'ready to move', 2, 'flat', 'Yes'),
(7, 30, 'Ryuga', 0, 'Agra homes', 'In Agra, near Taj mehal', 2, 1, 1, 1, 2, 1, 200000, 'Nicest homes ever!', 'furnished', 'No', 'No', 'No', 'Yes', 'Yes', 'rent', 'Yes', 'No', 'Yes', 40000, 1, 'Yes', 'Yes', 'No', 'ready to move', 2, 'flat', 'Yes'),
(8, 44, 'Himanshu', 1, 'Giriwar bhavan', 'Bhrama sarovar, Hariyana', 1, 1, 1, 1, 2, 1000, 12000, 'Best hostel', 'furnished', 'No', 'Yes', 'No', 'No', 'Yes', 'rent', 'Yes', 'No', 'No', 20000, 1, 'Yes', 'Yes', 'Yes', 'ready to move in', 0, 'flat', 'No'),
(9, 26, 'Abhishek', 0, 'BMS', 'Haryana', 1, 1, 1, 1, 2, 1000, 30000, 'Best homes in KKR', 'furnished', 'yes', 'yes', 'yes', 'yes', 'yes', 'rent', 'yes', 'yes', 'yes', 20000, 1, 'yes', 'yes', 'yes', 'ready to move', 1, 'flat', 'yes'),
(10, 29, 'Dinesh surya', 0, 'Hairyana homes', 'Hariyana', 1, 1, 1, 1, 1, 1, 2000, 'Best homes', 'furnished', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'rent', 'Yes', 'Yes', 'Yes', 2000, 1, 'Yes', 'Yes', 'Yes', 'ready to move', 1, 'flat', 'Yes'),
(11, 26, 'Abhishek', 0, 'Jadhu homes', 'Goa, pachim', 3, 2, 2, 1, 1, 2998, 200000, 'Best homes', 'furnished', 'Garden', 'Gym', 'Hospital', 'Lifts', 'Market Area', 'rent', 'Parking Area', 'Play Ground', 'Power Backup', 20000, 2, 'School', 'Security Guard', 'Shopping Mall', 'ready to move', 2, 'flat', 'Water Supply'),
(12, 29, 'Dinesh surya', 0, 'Tanni homes', 'Tanni street ', 1, 1, 1, 1, 2, 998, 200000, 'best homes in tanni street', 'furnished', 'Yes', 'No', 'Yes', 'Yes', 'No', 'rent', 'No', 'Yes', 'No', 12000, 4, 'Yes', 'No', 'No', 'ready to move', 1, 'flat', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `properties_db_sale`
--

CREATE TABLE `properties_db_sale` (
  `prop_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(128) NOT NULL,
  `admin_id` int(11) NOT NULL DEFAULT 0,
  `property_name` varchar(256) NOT NULL,
  `address` text NOT NULL,
  `age` int(11) NOT NULL,
  `balcony` int(11) NOT NULL,
  `bathroom` int(11) NOT NULL,
  `bedroom` int(11) NOT NULL,
  `bhk` int(11) NOT NULL,
  `carpet` int(11) NOT NULL,
  `deposit` int(11) NOT NULL,
  `description` text NOT NULL,
  `furnished` varchar(128) NOT NULL,
  `garden` varchar(128) NOT NULL,
  `gym` varchar(128) NOT NULL,
  `hospital` varchar(128) NOT NULL,
  `lift` varchar(128) NOT NULL,
  `loan` varchar(128) NOT NULL,
  `market_area` varchar(128) NOT NULL,
  `offer` varchar(128) NOT NULL,
  `parking_area` varchar(128) NOT NULL,
  `play_ground` varchar(128) NOT NULL,
  `power_backup` varchar(128) NOT NULL,
  `price` int(11) NOT NULL,
  `room_floor` int(11) NOT NULL,
  `school` varchar(128) NOT NULL,
  `security_guard` varchar(128) NOT NULL,
  `shopping_mall` varchar(128) NOT NULL,
  `status` varchar(128) NOT NULL,
  `total_floors` int(11) NOT NULL,
  `type` varchar(128) NOT NULL,
  `water_supply` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `properties_db_sale`
--

INSERT INTO `properties_db_sale` (`prop_id`, `user_id`, `user_name`, `admin_id`, `property_name`, `address`, `age`, `balcony`, `bathroom`, `bedroom`, `bhk`, `carpet`, `deposit`, `description`, `furnished`, `garden`, `gym`, `hospital`, `lift`, `loan`, `market_area`, `offer`, `parking_area`, `play_ground`, `power_backup`, `price`, `room_floor`, `school`, `security_guard`, `shopping_mall`, `status`, `total_floors`, `type`, `water_supply`) VALUES
(2, 26, 'Abhishek', 0, 'Adi emrald homes', 'Jubliee hills', 2, 1, 2, 3, 3, 2000, 100000, 'Best homes in vicinity of Jubliee', 'furnished', 'No', 'No', 'No', 'Yes', 'available', 'No', 'sale', 'Yes', 'No', 'Yes', 200000, 4, 'No', 'Yes', 'No', 'ready to move', 5, 'flat', 'Yes'),
(3, 29, 'Dinesh surya', 0, 'SVMS homes', 'Bhavani gardens, ITI junction', 2, 1, 2, 2, 2, 2000, 80000, 'Best homes in vizag!', 'furnished', 'No', 'No', 'No', 'Yes', 'available', 'No', 'sale', 'No', 'Yes', 'Yes', 120000, 2, 'No', 'Yes', 'No', 'ready to move', 3, 'flat', 'Yes'),
(4, 30, 'Ryuga', 1, 'Kakani nagar homes', 'Kakani nagar, ambala junction', 2, 0, 2, 1, 4, 1200, 20000, 'Best homes in ambala jn', 'furnished', 'No', 'No', 'Yes', 'Yes', 'not available', 'No', 'sale', 'No', 'No', 'No', 120200, 2, 'Yes', 'No', 'No', 'ready to move', 2, 'flat', 'No'),
(5, 27, 'Aryan', 2, 'Abhiram homes', 'Kakani nage, NAD', 2, 2, 2, 3, 3, 2000, 420000, 'Best homes ever', 'furnished', 'No', 'No', 'Yes', 'Yes', 'available', 'No', 'sale', 'Yes', 'Yes', 'No', 4000000, 2, 'No', 'Yes', 'Yes', 'ready to move', 3, 'flat', 'No'),
(11, 26, 'Abhishek', 0, 'Horah homes', 'Bhavani gardens', 2, 2, 2, 2, 6, 2, 2000, 'Best homes', 'semi-furnished', 'No', 'No', 'No', 'No', 'not available', 'No', 'sale', 'No', 'Yes', 'No', 20000, 2, 'No', 'Yes', 'No', 'under construction', 2, 'flat', 'No'),
(12, 26, 'Abhishek', 0, 'Visakha homes', 'NAD Visakhapatnam', 1, 6, 4, 2, 3, 1000, 3000, 'Best homes ever!', 'furnished', 'No', 'No', 'No', 'Yes', 'available', 'No', 'sale', 'No', 'Yes', 'Yes', 300000, 1, 'No', 'Yes', 'No', 'ready to move', 1, 'flat', 'No'),
(13, 26, 'Abhishek', 0, 'MVP homes', 'MVP nagar', 1, 3, 2, 1, 2, 2000, 30000, 'Best homes in mvp\n', 'furnished', 'yes', 'yes', 'yes', 'yes', 'available', 'yes', 'sale', 'yes', 'yes', 'yes', 300000, 1, 'yes', 'yes', 'yes', 'ready to move', 1, 'flat', 'yes'),
(15, 26, 'Abhishek', 2, 'Himanshu homes', 'Kaithal', 1, 1, 1, 1, 1, 1, 20000, 'Best homes in kaithal', 'furnished', 'yes', 'yes', 'yes', 'yes', 'available', 'yes', 'sale', 'yes', 'yes', 'yes', 200000, 1, 'yes', 'yes', 'yes', 'ready to move', 1, 'flat', 'yes'),
(16, 29, 'Dinesh surya', 0, 'Unnat homes', 'h7 NIT Kurukshetra', 1, 4, 3, 2, 1, 5000, 2000, 'BEST HOMES EVER!!!', 'furnished', 'No', 'No', 'No', 'No', 'available', 'No', 'sale', 'No', 'No', 'No', 20000, 3, 'No', 'No', 'No', 'ready to move', 2, 'flat', 'No'),
(18, 26, 'Abhishek', 0, 'Dinesh homes', 'Dinesh street', 1, 1, 1, 1, 1, 1, 20000, 'Best homes ', 'furnished', 'Yes', 'No', 'No', 'Yes', 'available', 'No', 'sale', 'No', 'Yes', 'Yes', 120000, 1, 'No', 'Yes', 'No', 'ready to move', 1, 'house', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password_hash`) VALUES
(1, '123', '123@exampe.com', '$2y$10$RU5nP1XAyrIrlsslP2gkN.bHZIaetiekoCKA1NgLwj/sHfu7KtQUy'),
(21, 'test12', 'tes12t@gmail.com', '$2y$10$Z6WR161W2Bvmu0lTczavaePYDKgLcIouA9VBMtIvdMZrNEgiqZU4e'),
(22, 'Test13', 'test13@gmail.in', '$2y$10$RlEB9WwmMjKcs/eoFFUuP.InSbdIDojGr9RFPabp/hppRcbDSFu.2'),
(23, 'kanagru', 'kangu@gmail.com', '$2y$10$k0jnPfCtkZ9TvERUxr9qpubplIEIk9kLW2BWvqEwc8gypjCEffTmC'),
(24, 'dinesh', 'test0@gmail.com', '$2y$10$7lxG/YDsS1f6YlxBcEkhou./Q1lj9xM4rnL5Lcg4wezEJ/j9t1NVe'),
(25, 'Dinesh surya Gidijala', 'dineshsurya.2002@gmail.com', '$2y$10$yXOFGKSvR0Zt1.iBMSGXDO2b1JNUO0Z8mhox6cb07v0huOOkQ13BS'),
(26, 'Abhishek', 'abhishek@gmail.com', '$2y$10$hH8RUOwHHazmOrwqpaxeNuCI85APgedpwo7Wu9oaZlo3741A1x7sm'),
(27, 'Aryan', 'aryan@gmail.com', '$2y$10$BeIi9affjn5Kj9CXM/OKAeYda2d9lx1AamNmEZmPOBeZMnjHjs2vi'),
(28, 'Kushgra', 'kush@gmail.com', '$2y$10$Kp.3FsGq8dthtNqP3WiJLeNEaPsCCjYOCiqyrzxkxPAHyL/umof.y'),
(29, 'Dinesh surya', '1@2.34', '$2y$10$C8J9xOuTih5B5eUwT7TLk.Y.TYbzjTbbqRgqPiQtw3P8sifL8EO0G'),
(30, 'Ryuga', '123@gmail.com', '$2y$10$VFNiRMiaex49QM6uIcpxyuhigO1cSXacqAn521avv3u5IJOcxzugy'),
(32, 'Aryan', '12@gmail.com', '$2y$10$G6ajKr7d3rjKcPF4oYB17Oi.RbF4hZu.vtD0OBY7.tFg5ZOivTOSK'),
(33, 'Dinesh surya', 'dineshsurya.20002@gmail.com', '$2y$10$XtlyuvdCGfGtCpDRp80zPOldK4zjRS6ZWy3nzFktCBvUX6kGqXVry'),
(38, 'Bishu', '1@gmail.com', '$2y$10$Tze7vPZmputozYCRdw9d1O88JoHaPDGGKKreYefN1nNdNHT3lKlu6'),
(40, 'Bishu', '1234@gmail.com', '$2y$10$EyOEADlZH7R2dmaQojUoT.fC5cKtA1CL9JeVgw3VC.Ve9zBL4PFP2'),
(42, 'Abhishek kadu', '12345@dinesh.com', '$2y$10$GEspwbBo8b5o85MNuPKSUOXPxBLfFuMZyl/IIHN141NUo3GxYtf0e'),
(43, '123', '123@123.in', '$2y$10$QTwSqxNLG2bNeOcV0606Juob0uxXa.PFySptKmyKsXWxl1Sf/MkyG'),
(44, 'Himanshu', 'himanshu@gmail.com', '$2y$10$MaOGqw1fCq6fFeHCdctmI.FOKA7hhTaHE9XOAU4gdTPENwTQX.bwa'),
(45, 'DINESH', 'QWER1@GMAILL.COM', '$2y$10$ltvthK6Xgc27TlFJS3in/.uR5QdQWT23D0MajdaAEgPOZlcChbrXu'),
(46, 'sad', 'asd@gds.vjg', '$2y$10$7z2hbiKXfjHIwy0e2Bl9tOPxkIDpHNeEiHrAXF1C6g72Oz5Ea7bUG'),
(47, '1123', '123@hhfd.dfg', '$2y$10$U27lOGZEbuQyxmpbCsS9veJevpZWZxuCg1xw2PKQasaJweLh8IFOO'),
(48, '24we', 'asd@gn.df', '$2y$10$ZARGNaI.XbEE2X/2wXv5su1ldb7WEDbuL3r6fv5tD3e9Xb7uhbowe'),
(49, 'Ryugaa', '12341234@gmail.com', '$2y$10$WkEEBcX9L4Hnqtl8f55r2uCaPk.2PI8ZpKZH9BI7X5gVZWcG9atiC'),
(50, '123123@gmail.com', '12341234@gmail.in', '$2y$10$9s/cMmEq1w2i5.zUONvHr.O5yVmSQBNeOgF5InrVDL7QnteRrS3Ua'),
(55, 'Ritik', '123@123.123', '$2y$10$hH4EJYlpL6A3QEL5COGZcuwoBXsy77tYopsFRaUvhqmpQ2Hu4ptk6'),
(57, 'James', '123@123.12', '$2y$10$hkA0R9/jRvuKEwsk7pySuuA5cOhH/xBFCvKKD43lmodRnhSWNeuqa'),
(58, 'Karthik', '123@123.123123', '$2y$10$HfLHOlnA22H/z.dmHPIW8OyoyQf57.yliBBuTBR53pMA7a41B1kUq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `properties_db_rent`
--
ALTER TABLE `properties_db_rent`
  ADD PRIMARY KEY (`prop_id`);

--
-- Indexes for table `properties_db_sale`
--
ALTER TABLE `properties_db_sale`
  ADD PRIMARY KEY (`prop_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `properties_db_rent`
--
ALTER TABLE `properties_db_rent`
  MODIFY `prop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `properties_db_sale`
--
ALTER TABLE `properties_db_sale`
  MODIFY `prop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
