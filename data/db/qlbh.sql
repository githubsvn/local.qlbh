-- phpMyAdmin SQL Dump
-- version 3.3.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 11, 2013 at 05:12 PM
-- Server version: 5.1.54
-- PHP Version: 5.3.5-1ubuntu7.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `qlbh`
--

-- --------------------------------------------------------

--
-- Table structure for table `mtx_acl_module`
--

CREATE TABLE IF NOT EXISTS `mtx_acl_module` (
  `acl_module_id` int(11) NOT NULL AUTO_INCREMENT,
  `acl_module_name` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(8) DEFAULT NULL,
  PRIMARY KEY (`acl_module_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `mtx_acl_module`
--

INSERT INTO `mtx_acl_module` (`acl_module_id`, `acl_module_name`, `status`) VALUES
(1, 'admin', 1),
(3, 'default', 1),
(4, 'language', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mtx_acl_privilege`
--

CREATE TABLE IF NOT EXISTS `mtx_acl_privilege` (
  `acl_privilege_id` int(11) NOT NULL AUTO_INCREMENT,
  `acl_resource_id` int(11) NOT NULL,
  `acl_privilege_name` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(8) DEFAULT NULL,
  PRIMARY KEY (`acl_privilege_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=82 ;

--
-- Dumping data for table `mtx_acl_privilege`
--

INSERT INTO `mtx_acl_privilege` (`acl_privilege_id`, `acl_resource_id`, `acl_privilege_name`, `status`) VALUES
(20, 12, 'index', 1),
(21, 13, 'index', 1),
(22, 13, 'add', 1),
(23, 14, 'models', 1),
(24, 15, 'login', 1),
(25, 15, 'logout', 1),
(26, 16, 'module', 1),
(27, 16, 'add-module', 1),
(28, 16, 'resource', 1),
(29, 16, 'add-resource', 1),
(30, 16, 'privilege', 1),
(31, 16, 'add-privilege', 1),
(33, 16, 'get-opt-resource', 1),
(34, 16, 'assign-permisison', 1),
(35, 16, 'get-opt-privilege', 1),
(37, 16, 'permission', 1),
(64, 42, 'index', 1),
(65, 42, 'add', 1),
(66, 43, 'export', 1),
(67, 42, 'import', 1),
(68, 42, 'delete', 1),
(69, 42, 'change-status', 1),
(70, 42, 'check-default', 1),
(71, 43, 'index', 1),
(72, 43, 'add-label', 1),
(73, 43, 'save-label', 1),
(74, 43, 'generate-ini', 1),
(75, 43, 'delete-label', 1),
(76, 44, 'get-list-json', 1),
(77, 44, 'add', 1),
(78, 45, 'get-list-json', 1),
(79, 45, 'add', 1),
(80, 44, 'delete', 1),
(81, 45, 'delete', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mtx_acl_resource`
--

CREATE TABLE IF NOT EXISTS `mtx_acl_resource` (
  `acl_resource_id` int(11) NOT NULL AUTO_INCREMENT,
  `acl_module_id` int(11) NOT NULL,
  `acl_resource_name` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(8) DEFAULT NULL,
  PRIMARY KEY (`acl_resource_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=46 ;

--
-- Dumping data for table `mtx_acl_resource`
--

INSERT INTO `mtx_acl_resource` (`acl_resource_id`, `acl_module_id`, `acl_resource_name`, `status`) VALUES
(12, 1, 'index', 1),
(13, 1, 'users', 1),
(14, 1, 'generator', 1),
(15, 1, 'auth', 1),
(16, 1, 'acl', 1),
(42, 4, 'admin', 1),
(43, 4, 'manager', 1),
(44, 1, 'ncc', 1),
(45, 1, 'nganhhang', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mtx_acl_role`
--

CREATE TABLE IF NOT EXISTS `mtx_acl_role` (
  `acl_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `acl_role_name` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `status` tinyint(8) DEFAULT NULL,
  PRIMARY KEY (`acl_role_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `mtx_acl_role`
--

INSERT INTO `mtx_acl_role` (`acl_role_id`, `acl_role_name`, `description`, `status`) VALUES
(5, 'administrator', NULL, 1),
(6, 'user', NULL, 1),
(7, 'Guest', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mtx_acl_role_privilege`
--

CREATE TABLE IF NOT EXISTS `mtx_acl_role_privilege` (
  `acl_roleprivilege_id` int(11) NOT NULL AUTO_INCREMENT,
  `acl_role_id` int(11) NOT NULL,
  `acl_privilege_id` int(11) NOT NULL,
  `status` tinyint(8) DEFAULT NULL,
  PRIMARY KEY (`acl_roleprivilege_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=85 ;

--
-- Dumping data for table `mtx_acl_role_privilege`
--

INSERT INTO `mtx_acl_role_privilege` (`acl_roleprivilege_id`, `acl_role_id`, `acl_privilege_id`, `status`) VALUES
(22, 5, 20, 1),
(23, 5, 21, 1),
(24, 5, 22, 1),
(25, 5, 23, 1),
(26, 5, 24, 1),
(27, 5, 25, 1),
(29, 5, 27, 1),
(30, 5, 28, 1),
(31, 5, 29, 1),
(32, 5, 30, 1),
(33, 5, 31, 1),
(34, 5, 33, 1),
(35, 5, 34, 1),
(36, 5, 35, 1),
(38, 6, 20, 1),
(39, 5, 26, 1),
(40, 5, 37, 1),
(67, 5, 65, 1),
(68, 5, 69, 1),
(69, 5, 70, 1),
(70, 5, 68, 1),
(71, 5, 67, 1),
(72, 5, 64, 1),
(73, 5, 72, 1),
(74, 5, 75, 1),
(75, 5, 66, 1),
(76, 5, 74, 1),
(77, 5, 71, 1),
(78, 5, 73, 1),
(79, 5, 76, 1),
(80, 5, 77, 1),
(81, 5, 78, 1),
(82, 5, 79, 1),
(83, 5, 80, 1),
(84, 5, 81, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mtx_acl_role_user`
--

CREATE TABLE IF NOT EXISTS `mtx_acl_role_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `acl_role_id` int(11) NOT NULL,
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `mtx_acl_role_user`
--

INSERT INTO `mtx_acl_role_user` (`id`, `user_id`, `acl_role_id`, `status`) VALUES
(7, 102, 5, 1),
(9, 109, 5, 1),
(21, 119, 5, 1),
(22, 120, 5, 1),
(23, 121, 5, 1),
(24, 122, 5, 1),
(25, 123, 5, 1),
(26, 124, 5, 1),
(27, 125, 6, 1),
(29, 127, 5, 1),
(30, 127, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mtx_acl_users`
--

CREATE TABLE IF NOT EXISTS `mtx_acl_users` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(11) unsigned NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `mtx_acl_users`
--

INSERT INTO `mtx_acl_users` (`uid`, `role_id`, `user_id`) VALUES
(1, 5, 102);

-- --------------------------------------------------------

--
-- Table structure for table `mtx_country`
--

CREATE TABLE IF NOT EXISTS `mtx_country` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(2) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `name_cap` varchar(255) DEFAULT NULL,
  `code` varchar(5) DEFAULT NULL,
  `num_code` int(11) DEFAULT NULL,
  `date_create` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=240 ;

--
-- Dumping data for table `mtx_country`
--

INSERT INTO `mtx_country` (`id`, `key`, `name`, `name_cap`, `code`, `num_code`, `date_create`) VALUES
(1, 'AF', 'AFGHANISTAN', 'Afghanistan', 'AFG', 4, NULL),
(2, 'AL', 'ALBANIA', 'Albania', 'ALB', 8, NULL),
(3, 'DZ', 'ALGERIA', 'Algeria', 'DZA', 12, NULL),
(4, 'AS', 'AMERICAN SAMOA', 'American Samoa', 'ASM', 16, NULL),
(5, 'AD', 'ANDORRA', 'Andorra', 'AND', 20, NULL),
(6, 'AO', 'ANGOLA', 'Angola', 'AGO', 24, NULL),
(7, 'AI', 'ANGUILLA', 'Anguilla', 'AIA', 660, NULL),
(8, 'AQ', 'ANTARCTICA', 'Antarctica', NULL, NULL, NULL),
(9, 'AG', 'ANTIGUA AND BARBUDA', 'Antigua and Barbuda', 'ATG', 28, NULL),
(10, 'AR', 'ARGENTINA', 'Argentina', 'ARG', 32, NULL),
(11, 'AM', 'ARMENIA', 'Armenia', 'ARM', 51, NULL),
(12, 'AW', 'ARUBA', 'Aruba', 'ABW', 533, NULL),
(13, 'AU', 'AUSTRALIA', 'Australia', 'AUS', 36, NULL),
(14, 'AT', 'AUSTRIA', 'Austria', 'AUT', 40, NULL),
(15, 'AZ', 'AZERBAIJAN', 'Azerbaijan', 'AZE', 31, NULL),
(16, 'BS', 'BAHAMAS', 'Bahamas', 'BHS', 44, NULL),
(17, 'BH', 'BAHRAIN', 'Bahrain', 'BHR', 48, NULL),
(18, 'BD', 'BANGLADESH', 'Bangladesh', 'BGD', 50, NULL),
(19, 'BB', 'BARBADOS', 'Barbados', 'BRB', 52, NULL),
(20, 'BY', 'BELARUS', 'Belarus', 'BLR', 112, NULL),
(21, 'BE', 'BELGIUM', 'Belgium', 'BEL', 56, NULL),
(22, 'BZ', 'BELIZE', 'Belize', 'BLZ', 84, NULL),
(23, 'BJ', 'BENIN', 'Benin', 'BEN', 204, NULL),
(24, 'BM', 'BERMUDA', 'Bermuda', 'BMU', 60, NULL),
(25, 'BT', 'BHUTAN', 'Bhutan', 'BTN', 64, NULL),
(26, 'BO', 'BOLIVIA', 'Bolivia', 'BOL', 68, NULL),
(27, 'BA', 'BOSNIA AND HERZEGOVINA', 'Bosnia and Herzegovina', 'BIH', 70, NULL),
(28, 'BW', 'BOTSWANA', 'Botswana', 'BWA', 72, NULL),
(29, 'BV', 'BOUVET ISLAND', 'Bouvet Island', NULL, NULL, NULL),
(30, 'BR', 'BRAZIL', 'Brazil', 'BRA', 76, NULL),
(31, 'IO', 'BRITISH INDIAN OCEAN TERRITORY', 'British Indian Ocean Territory', NULL, NULL, NULL),
(32, 'BN', 'BRUNEI DARUSSALAM', 'Brunei Darussalam', 'BRN', 96, NULL),
(33, 'BG', 'BULGARIA', 'Bulgaria', 'BGR', 100, NULL),
(34, 'BF', 'BURKINA FASO', 'Burkina Faso', 'BFA', 854, NULL),
(35, 'BI', 'BURUNDI', 'Burundi', 'BDI', 108, NULL),
(36, 'KH', 'CAMBODIA', 'Cambodia', 'KHM', 116, NULL),
(37, 'CM', 'CAMEROON', 'Cameroon', 'CMR', 120, NULL),
(38, 'CA', 'CANADA', 'Canada', 'CAN', 124, NULL),
(39, 'CV', 'CAPE VERDE', 'Cape Verde', 'CPV', 132, NULL),
(40, 'KY', 'CAYMAN ISLANDS', 'Cayman Islands', 'CYM', 136, NULL),
(41, 'CF', 'CENTRAL AFRICAN REPUBLIC', 'Central African Republic', 'CAF', 140, NULL),
(42, 'TD', 'CHAD', 'Chad', 'TCD', 148, NULL),
(43, 'CL', 'CHILE', 'Chile', 'CHL', 152, NULL),
(44, 'CN', 'CHINA', 'China', 'CHN', 156, NULL),
(45, 'CX', 'CHRISTMAS ISLAND', 'Christmas Island', NULL, NULL, NULL),
(46, 'CC', 'COCOS (KEELING) ISLANDS', 'Cocos (Keeling) Islands', NULL, NULL, NULL),
(47, 'CO', 'COLOMBIA', 'Colombia', 'COL', 170, NULL),
(48, 'KM', 'COMOROS', 'Comoros', 'COM', 174, NULL),
(49, 'CG', 'CONGO', 'Congo', 'COG', 178, NULL),
(50, 'CD', 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'Congo, the Democratic Republic of the', 'COD', 180, NULL),
(51, 'CK', 'COOK ISLANDS', 'Cook Islands', 'COK', 184, NULL),
(52, 'CR', 'COSTA RICA', 'Costa Rica', 'CRI', 188, NULL),
(53, 'CI', 'COTE D''IVOIRE', 'Cote D''Ivoire', 'CIV', 384, NULL),
(54, 'HR', 'CROATIA', 'Croatia', 'HRV', 191, NULL),
(55, 'CU', 'CUBA', 'Cuba', 'CUB', 192, NULL),
(56, 'CY', 'CYPRUS', 'Cyprus', 'CYP', 196, NULL),
(57, 'CZ', 'CZECH REPUBLIC', 'Czech Republic', 'CZE', 203, NULL),
(58, 'DK', 'DENMARK', 'Denmark', 'DNK', 208, NULL),
(59, 'DJ', 'DJIBOUTI', 'Djibouti', 'DJI', 262, NULL),
(60, 'DM', 'DOMINICA', 'Dominica', 'DMA', 212, NULL),
(61, 'DO', 'DOMINICAN REPUBLIC', 'Dominican Republic', 'DOM', 214, NULL),
(62, 'EC', 'ECUADOR', 'Ecuador', 'ECU', 218, NULL),
(63, 'EG', 'EGYPT', 'Egypt', 'EGY', 818, NULL),
(64, 'SV', 'EL SALVADOR', 'El Salvador', 'SLV', 222, NULL),
(65, 'GQ', 'EQUATORIAL GUINEA', 'Equatorial Guinea', 'GNQ', 226, NULL),
(66, 'ER', 'ERITREA', 'Eritrea', 'ERI', 232, NULL),
(67, 'EE', 'ESTONIA', 'Estonia', 'EST', 233, NULL),
(68, 'ET', 'ETHIOPIA', 'Ethiopia', 'ETH', 231, NULL),
(69, 'FK', 'FALKLAND ISLANDS (MALVINAS)', 'Falkland Islands (Malvinas)', 'FLK', 238, NULL),
(70, 'FO', 'FAROE ISLANDS', 'Faroe Islands', 'FRO', 234, NULL),
(71, 'FJ', 'FIJI', 'Fiji', 'FJI', 242, NULL),
(72, 'FI', 'FINLAND', 'Finland', 'FIN', 246, NULL),
(73, 'FR', 'FRANCE', 'France', 'FRA', 250, NULL),
(74, 'GF', 'FRENCH GUIANA', 'French Guiana', 'GUF', 254, NULL),
(75, 'PF', 'FRENCH POLYNESIA', 'French Polynesia', 'PYF', 258, NULL),
(76, 'TF', 'FRENCH SOUTHERN TERRITORIES', 'French Southern Territories', NULL, NULL, NULL),
(77, 'GA', 'GABON', 'Gabon', 'GAB', 266, NULL),
(78, 'GM', 'GAMBIA', 'Gambia', 'GMB', 270, NULL),
(79, 'GE', 'GEORGIA', 'Georgia', 'GEO', 268, NULL),
(80, 'DE', 'GERMANY', 'Germany', 'DEU', 276, NULL),
(81, 'GH', 'GHANA', 'Ghana', 'GHA', 288, NULL),
(82, 'GI', 'GIBRALTAR', 'Gibraltar', 'GIB', 292, NULL),
(83, 'GR', 'GREECE', 'Greece', 'GRC', 300, NULL),
(84, 'GL', 'GREENLAND', 'Greenland', 'GRL', 304, NULL),
(85, 'GD', 'GRENADA', 'Grenada', 'GRD', 308, NULL),
(86, 'GP', 'GUADELOUPE', 'Guadeloupe', 'GLP', 312, NULL),
(87, 'GU', 'GUAM', 'Guam', 'GUM', 316, NULL),
(88, 'GT', 'GUATEMALA', 'Guatemala', 'GTM', 320, NULL),
(89, 'GN', 'GUINEA', 'Guinea', 'GIN', 324, NULL),
(90, 'GW', 'GUINEA-BISSAU', 'Guinea-Bissau', 'GNB', 624, NULL),
(91, 'GY', 'GUYANA', 'Guyana', 'GUY', 328, NULL),
(92, 'HT', 'HAITI', 'Haiti', 'HTI', 332, NULL),
(93, 'HM', 'HEARD ISLAND AND MCDONALD ISLANDS', 'Heard Island and Mcdonald Islands', NULL, NULL, NULL),
(94, 'VA', 'HOLY SEE (VATICAN CITY STATE)', 'Holy See (Vatican City State)', 'VAT', 336, NULL),
(95, 'HN', 'HONDURAS', 'Honduras', 'HND', 340, NULL),
(96, 'HK', 'HONG KONG', 'Hong Kong', 'HKG', 344, NULL),
(97, 'HU', 'HUNGARY', 'Hungary', 'HUN', 348, NULL),
(98, 'IS', 'ICELAND', 'Iceland', 'ISL', 352, NULL),
(99, 'IN', 'INDIA', 'India', 'IND', 356, NULL),
(100, 'ID', 'INDONESIA', 'Indonesia', 'IDN', 360, NULL),
(101, 'IR', 'IRAN, ISLAMIC REPUBLIC OF', 'Iran, Islamic Republic of', 'IRN', 364, NULL),
(102, 'IQ', 'IRAQ', 'Iraq', 'IRQ', 368, NULL),
(103, 'IE', 'IRELAND', 'Ireland', 'IRL', 372, NULL),
(104, 'IL', 'ISRAEL', 'Israel', 'ISR', 376, NULL),
(105, 'IT', 'ITALY', 'Italy', 'ITA', 380, NULL),
(106, 'JM', 'JAMAICA', 'Jamaica', 'JAM', 388, NULL),
(107, 'JP', 'JAPAN', 'Japan', 'JPN', 392, NULL),
(108, 'JO', 'JORDAN', 'Jordan', 'JOR', 400, NULL),
(109, 'KZ', 'KAZAKHSTAN', 'Kazakhstan', 'KAZ', 398, NULL),
(110, 'KE', 'KENYA', 'Kenya', 'KEN', 404, NULL),
(111, 'KI', 'KIRIBATI', 'Kiribati', 'KIR', 296, NULL),
(112, 'KP', 'KOREA, DEMOCRATIC PEOPLE''S REPUBLIC OF', 'Korea, Democratic People''s Republic of', 'PRK', 408, NULL),
(113, 'KR', 'KOREA, REPUBLIC OF', 'Korea, Republic of', 'KOR', 410, NULL),
(114, 'KW', 'KUWAIT', 'Kuwait', 'KWT', 414, NULL),
(115, 'KG', 'KYRGYZSTAN', 'Kyrgyzstan', 'KGZ', 417, NULL),
(116, 'LA', 'LAO PEOPLE''S DEMOCRATIC REPUBLIC', 'Lao People''s Democratic Republic', 'LAO', 418, NULL),
(117, 'LV', 'LATVIA', 'Latvia', 'LVA', 428, NULL),
(118, 'LB', 'LEBANON', 'Lebanon', 'LBN', 422, NULL),
(119, 'LS', 'LESOTHO', 'Lesotho', 'LSO', 426, NULL),
(120, 'LR', 'LIBERIA', 'Liberia', 'LBR', 430, NULL),
(121, 'LY', 'LIBYAN ARAB JAMAHIRIYA', 'Libyan Arab Jamahiriya', 'LBY', 434, NULL),
(122, 'LI', 'LIECHTENSTEIN', 'Liechtenstein', 'LIE', 438, NULL),
(123, 'LT', 'LITHUANIA', 'Lithuania', 'LTU', 440, NULL),
(124, 'LU', 'LUXEMBOURG', 'Luxembourg', 'LUX', 442, NULL),
(125, 'MO', 'MACAO', 'Macao', 'MAC', 446, NULL),
(126, 'MK', 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'Macedonia, the Former Yugoslav Republic of', 'MKD', 807, NULL),
(127, 'MG', 'MADAGASCAR', 'Madagascar', 'MDG', 450, NULL),
(128, 'MW', 'MALAWI', 'Malawi', 'MWI', 454, NULL),
(129, 'MY', 'MALAYSIA', 'Malaysia', 'MYS', 458, NULL),
(130, 'MV', 'MALDIVES', 'Maldives', 'MDV', 462, NULL),
(131, 'ML', 'MALI', 'Mali', 'MLI', 466, NULL),
(132, 'MT', 'MALTA', 'Malta', 'MLT', 470, NULL),
(133, 'MH', 'MARSHALL ISLANDS', 'Marshall Islands', 'MHL', 584, NULL),
(134, 'MQ', 'MARTINIQUE', 'Martinique', 'MTQ', 474, NULL),
(135, 'MR', 'MAURITANIA', 'Mauritania', 'MRT', 478, NULL),
(136, 'MU', 'MAURITIUS', 'Mauritius', 'MUS', 480, NULL),
(137, 'YT', 'MAYOTTE', 'Mayotte', NULL, NULL, NULL),
(138, 'MX', 'MEXICO', 'Mexico', 'MEX', 484, NULL),
(139, 'FM', 'MICRONESIA, FEDERATED STATES OF', 'Micronesia, Federated States of', 'FSM', 583, NULL),
(140, 'MD', 'MOLDOVA, REPUBLIC OF', 'Moldova, Republic of', 'MDA', 498, NULL),
(141, 'MC', 'MONACO', 'Monaco', 'MCO', 492, NULL),
(142, 'MN', 'MONGOLIA', 'Mongolia', 'MNG', 496, NULL),
(143, 'MS', 'MONTSERRAT', 'Montserrat', 'MSR', 500, NULL),
(144, 'MA', 'MOROCCO', 'Morocco', 'MAR', 504, NULL),
(145, 'MZ', 'MOZAMBIQUE', 'Mozambique', 'MOZ', 508, NULL),
(146, 'MM', 'MYANMAR', 'Myanmar', 'MMR', 104, NULL),
(147, 'NA', 'NAMIBIA', 'Namibia', 'NAM', 516, NULL),
(148, 'NR', 'NAURU', 'Nauru', 'NRU', 520, NULL),
(149, 'NP', 'NEPAL', 'Nepal', 'NPL', 524, NULL),
(150, 'NL', 'NETHERLANDS', 'Netherlands', 'NLD', 528, NULL),
(151, 'AN', 'NETHERLANDS ANTILLES', 'Netherlands Antilles', 'ANT', 530, NULL),
(152, 'NC', 'NEW CALEDONIA', 'New Caledonia', 'NCL', 540, NULL),
(153, 'NZ', 'NEW ZEALAND', 'New Zealand', 'NZL', 554, NULL),
(154, 'NI', 'NICARAGUA', 'Nicaragua', 'NIC', 558, NULL),
(155, 'NE', 'NIGER', 'Niger', 'NER', 562, NULL),
(156, 'NG', 'NIGERIA', 'Nigeria', 'NGA', 566, NULL),
(157, 'NU', 'NIUE', 'Niue', 'NIU', 570, NULL),
(158, 'NF', 'NORFOLK ISLAND', 'Norfolk Island', 'NFK', 574, NULL),
(159, 'MP', 'NORTHERN MARIANA ISLANDS', 'Northern Mariana Islands', 'MNP', 580, NULL),
(160, 'NO', 'NORWAY', 'Norway', 'NOR', 578, NULL),
(161, 'OM', 'OMAN', 'Oman', 'OMN', 512, NULL),
(162, 'PK', 'PAKISTAN', 'Pakistan', 'PAK', 586, NULL),
(163, 'PW', 'PALAU', 'Palau', 'PLW', 585, NULL),
(164, 'PS', 'PALESTINIAN TERRITORY, OCCUPIED', 'Palestinian Territory, Occupied', NULL, NULL, NULL),
(165, 'PA', 'PANAMA', 'Panama', 'PAN', 591, NULL),
(166, 'PG', 'PAPUA NEW GUINEA', 'Papua New Guinea', 'PNG', 598, NULL),
(167, 'PY', 'PARAGUAY', 'Paraguay', 'PRY', 600, NULL),
(168, 'PE', 'PERU', 'Peru', 'PER', 604, NULL),
(169, 'PH', 'PHILIPPINES', 'Philippines', 'PHL', 608, NULL),
(170, 'PN', 'PITCAIRN', 'Pitcairn', 'PCN', 612, NULL),
(171, 'PL', 'POLAND', 'Poland', 'POL', 616, NULL),
(172, 'PT', 'PORTUGAL', 'Portugal', 'PRT', 620, NULL),
(173, 'PR', 'PUERTO RICO', 'Puerto Rico', 'PRI', 630, NULL),
(174, 'QA', 'QATAR', 'Qatar', 'QAT', 634, NULL),
(175, 'RE', 'REUNION', 'Reunion', 'REU', 638, NULL),
(176, 'RO', 'ROMANIA', 'Romania', 'ROM', 642, NULL),
(177, 'RU', 'RUSSIAN FEDERATION', 'Russian Federation', 'RUS', 643, NULL),
(178, 'RW', 'RWANDA', 'Rwanda', 'RWA', 646, NULL),
(179, 'SH', 'SAINT HELENA', 'Saint Helena', 'SHN', 654, NULL),
(180, 'KN', 'SAINT KITTS AND NEVIS', 'Saint Kitts and Nevis', 'KNA', 659, NULL),
(181, 'LC', 'SAINT LUCIA', 'Saint Lucia', 'LCA', 662, NULL),
(182, 'PM', 'SAINT PIERRE AND MIQUELON', 'Saint Pierre and Miquelon', 'SPM', 666, NULL),
(183, 'VC', 'SAINT VINCENT AND THE GRENADINES', 'Saint Vincent and the Grenadines', 'VCT', 670, NULL),
(184, 'WS', 'SAMOA', 'Samoa', 'WSM', 882, NULL),
(185, 'SM', 'SAN MARINO', 'San Marino', 'SMR', 674, NULL),
(186, 'ST', 'SAO TOME AND PRINCIPE', 'Sao Tome and Principe', 'STP', 678, NULL),
(187, 'SA', 'SAUDI ARABIA', 'Saudi Arabia', 'SAU', 682, NULL),
(188, 'SN', 'SENEGAL', 'Senegal', 'SEN', 686, NULL),
(189, 'CS', 'SERBIA AND MONTENEGRO', 'Serbia and Montenegro', NULL, NULL, NULL),
(190, 'SC', 'SEYCHELLES', 'Seychelles', 'SYC', 690, NULL),
(191, 'SL', 'SIERRA LEONE', 'Sierra Leone', 'SLE', 694, NULL),
(192, 'SG', 'SINGAPORE', 'Singapore', 'SGP', 702, NULL),
(193, 'SK', 'SLOVAKIA', 'Slovakia', 'SVK', 703, NULL),
(194, 'SI', 'SLOVENIA', 'Slovenia', 'SVN', 705, NULL),
(195, 'SB', 'SOLOMON ISLANDS', 'Solomon Islands', 'SLB', 90, NULL),
(196, 'SO', 'SOMALIA', 'Somalia', 'SOM', 706, NULL),
(197, 'ZA', 'SOUTH AFRICA', 'South Africa', 'ZAF', 710, NULL),
(198, 'GS', 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'South Georgia and the South Sandwich Islands', NULL, NULL, NULL),
(199, 'ES', 'SPAIN', 'Spain', 'ESP', 724, NULL),
(200, 'LK', 'SRI LANKA', 'Sri Lanka', 'LKA', 144, NULL),
(201, 'SD', 'SUDAN', 'Sudan', 'SDN', 736, NULL),
(202, 'SR', 'SURINAME', 'Suriname', 'SUR', 740, NULL),
(203, 'SJ', 'SVALBARD AND JAN MAYEN', 'Svalbard and Jan Mayen', 'SJM', 744, NULL),
(204, 'SZ', 'SWAZILAND', 'Swaziland', 'SWZ', 748, NULL),
(205, 'SE', 'SWEDEN', 'Sweden', 'SWE', 752, NULL),
(206, 'CH', 'SWITZERLAND', 'Switzerland', 'CHE', 756, NULL),
(207, 'SY', 'SYRIAN ARAB REPUBLIC', 'Syrian Arab Republic', 'SYR', 760, NULL),
(208, 'TW', 'TAIWAN, PROVINCE OF CHINA', 'Taiwan, Province of China', 'TWN', 158, NULL),
(209, 'TJ', 'TAJIKISTAN', 'Tajikistan', 'TJK', 762, NULL),
(210, 'TZ', 'TANZANIA, UNITED REPUBLIC OF', 'Tanzania, United Republic of', 'TZA', 834, NULL),
(211, 'TH', 'THAILAND', 'Thailand', 'THA', 764, NULL),
(212, 'TL', 'TIMOR-LESTE', 'Timor-Leste', NULL, NULL, NULL),
(213, 'TG', 'TOGO', 'Togo', 'TGO', 768, NULL),
(214, 'TK', 'TOKELAU', 'Tokelau', 'TKL', 772, NULL),
(215, 'TO', 'TONGA', 'Tonga', 'TON', 776, NULL),
(216, 'TT', 'TRINIDAD AND TOBAGO', 'Trinidad and Tobago', 'TTO', 780, NULL),
(217, 'TN', 'TUNISIA', 'Tunisia', 'TUN', 788, NULL),
(218, 'TR', 'TURKEY', 'Turkey', 'TUR', 792, NULL),
(219, 'TM', 'TURKMENISTAN', 'Turkmenistan', 'TKM', 795, NULL),
(220, 'TC', 'TURKS AND CAICOS ISLANDS', 'Turks and Caicos Islands', 'TCA', 796, NULL),
(221, 'TV', 'TUVALU', 'Tuvalu', 'TUV', 798, NULL),
(222, 'UG', 'UGANDA', 'Uganda', 'UGA', 800, NULL),
(223, 'UA', 'UKRAINE', 'Ukraine', 'UKR', 804, NULL),
(224, 'AE', 'UNITED ARAB EMIRATES', 'United Arab Emirates', 'ARE', 784, NULL),
(225, 'GB', 'UNITED KINGDOM', 'United Kingdom', 'GBR', 826, NULL),
(226, 'US', 'UNITED STATES', 'United States', 'USA', 840, NULL),
(227, 'UM', 'UNITED STATES MINOR OUTLYING ISLANDS', 'United States Minor Outlying Islands', NULL, NULL, NULL),
(228, 'UY', 'URUGUAY', 'Uruguay', 'URY', 858, NULL),
(229, 'UZ', 'UZBEKISTAN', 'Uzbekistan', 'UZB', 860, NULL),
(230, 'VU', 'VANUATU', 'Vanuatu', 'VUT', 548, NULL),
(231, 'VE', 'VENEZUELA', 'Venezuela', 'VEN', 862, NULL),
(232, 'VN', 'VIET NAM', 'Viet Nam', 'VNM', 704, NULL),
(233, 'VG', 'VIRGIN ISLANDS, BRITISH', 'Virgin Islands, British', 'VGB', 92, NULL),
(234, 'VI', 'VIRGIN ISLANDS, U.S.', 'Virgin Islands, U.s.', 'VIR', 850, NULL),
(235, 'WF', 'WALLIS AND FUTUNA', 'Wallis and Futuna', 'WLF', 876, NULL),
(236, 'EH', 'WESTERN SAHARA', 'Western Sahara', 'ESH', 732, NULL),
(237, 'YE', 'YEMEN', 'Yemen', 'YEM', 887, NULL),
(238, 'ZM', 'ZAMBIA', 'Zambia', 'ZMB', 894, NULL),
(239, 'ZW', 'ZIMBABWE', 'Zimbabwe', 'ZWE', 716, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mtx_ncc`
--

CREATE TABLE IF NOT EXISTS `mtx_ncc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) NOT NULL,
  `mst` varchar(255) DEFAULT NULL,
  `diachi` varchar(255) DEFAULT NULL,
  `dienthoai` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `tk_ten` varchar(255) DEFAULT NULL,
  `tk_sotk` varchar(255) DEFAULT NULL,
  `tk_nganhang` varchar(255) DEFAULT NULL,
  `tk_diachi_nganhang` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `mtx_ncc`
--

INSERT INTO `mtx_ncc` (`id`, `ten`, `mst`, `diachi`, `dienthoai`, `fax`, `tk_ten`, `tk_sotk`, `tk_nganhang`, `tk_diachi_nganhang`) VALUES
(1, 'CTY Cổ Phần Ngân Long', NULL, '145/7, Ba Tháng Hai, P.11, Q.10', '08 3833 8520', NULL, NULL, NULL, NULL, NULL),
(2, 'Cửa Hàng Hương Thủy', '123456', 'Chợ Khu Phố Hai, P.An Lạc, Q.Bình Tân, HCM', '123456789', '55555', '111', '1111', '111', '1111'),
(3, 'Shop Tài Ký - Chợ Kim Biên', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Nhà Phân Phối Hưng Tuấn', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Nhà Sách Quang Bình', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Công Ty TNHH Đại Tín Đạt', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'Công Ty TNHH Gia Thịnh', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'Công Ty TNHH Siêu Việt', '123456', '', '', '', '', '', '', ''),
(9, 'Nhà Phân Phồi Vân Trinh', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'A', '', '', '', '', '', '', '', ''),
(13, 'B', '', '', '', '', '', '', '', ''),
(18, 'A2', '', '', '', '', '', '', '', ''),
(19, 'A3', '', '', '', '', '', '', '', ''),
(36, 'D2', '', '', '', '', '', '', '', ''),
(38, 'D4', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `mtx_nganhhang`
--

CREATE TABLE IF NOT EXISTS `mtx_nganhhang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `mtx_nganhhang`
--

INSERT INTO `mtx_nganhhang` (`id`, `ten`) VALUES
(1, 'A'),
(5, 'B'),
(4, 'D111'),
(6, 'C');

-- --------------------------------------------------------

--
-- Table structure for table `mtx_site_language`
--

CREATE TABLE IF NOT EXISTS `mtx_site_language` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `lang_key` varchar(4) CHARACTER SET utf8 NOT NULL,
  `translated` varchar(2) CHARACTER SET utf8 DEFAULT NULL,
  `translated_date` datetime DEFAULT NULL,
  `default` varchar(2) CHARACTER SET utf8 NOT NULL,
  `date_create` timestamp NULL DEFAULT NULL,
  `date_modify` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `mtx_site_language`
--

INSERT INTO `mtx_site_language` (`id`, `role_id`, `lang_key`, `translated`, `translated_date`, `default`, `date_create`, `date_modify`) VALUES
(1, 7, 'GB', NULL, NULL, '0', NULL, '2012-02-25 15:51:41'),
(2, 7, 'VN', NULL, NULL, '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mtx_site_language_default`
--

CREATE TABLE IF NOT EXISTS `mtx_site_language_default` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `default_text` text CHARACTER SET utf8 NOT NULL,
  `action` text CHARACTER SET utf8 NOT NULL,
  `date_create` timestamp NULL DEFAULT NULL,
  `date_modify` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `mtx_site_language_default`
--


-- --------------------------------------------------------

--
-- Table structure for table `mtx_site_language_multi`
--

CREATE TABLE IF NOT EXISTS `mtx_site_language_multi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `language_default_id` int(11) NOT NULL,
  `lang_key` varchar(4) CHARACTER SET utf8 NOT NULL,
  `translate_text` text CHARACTER SET utf8 NOT NULL,
  `date_create` timestamp NULL DEFAULT NULL,
  `date_modify` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `mtx_site_language_multi`
--


-- --------------------------------------------------------

--
-- Table structure for table `mtx_users`
--

CREATE TABLE IF NOT EXISTS `mtx_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET latin1 NOT NULL,
  `password` varchar(50) CHARACTER SET latin1 NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `user_created` int(11) DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  `user_modified` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Unique` (`username`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=130 ;

--
-- Dumping data for table `mtx_users`
--

INSERT INTO `mtx_users` (`id`, `username`, `password`, `first_name`, `last_name`, `email`, `status`, `date_created`, `user_created`, `date_modified`, `user_modified`) VALUES
(101, 'superadmin', 'cb3aefbdffbc81588f3d43c394428b16d4346b44', NULL, NULL, NULL, 1, '0000-00-00 00:00:00', NULL, NULL, NULL),
(102, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Thien', 'Le', NULL, 1, '2011-12-15 00:00:00', NULL, NULL, NULL),
(109, 'thien.le', 'e10adc3949ba59abbe56e057f20f883e', '', '', '', 1, '2012-02-04 08:36:34', 102, '2012-02-04 08:36:34', 102),
(125, 'thienle', '5f4dcc3b5aa765d61d8327deb882cf99', 'Thien', 'Le', 'thien.le@gmail.com', 1, '2012-02-22 16:30:30', 102, '2012-02-22 16:30:30', 102),
(124, 'user4', '21232f297a57a5a743894a0e4a801fc3', 'user4', 'luser4', 'user4@gmail.com', 1, '2012-02-22 16:27:15', 102, '2012-02-22 16:27:15', 102),
(127, 'test1', '827ccb0eea8a706c4c34a16891f84e7b', 'test1', 'Thiện', 'leminhthien84@gmail.com', 1, '2012-05-19 10:56:54', 102, '2012-05-19 11:01:20', 102),
(129, 'test', '', NULL, NULL, NULL, NULL, '2012-05-26 15:52:10', NULL, NULL, NULL);