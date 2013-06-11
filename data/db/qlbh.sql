-- phpMyAdmin SQL Dump
-- version 3.3.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 11, 2013 at 05:38 PM
-- Server version: 5.1.54
-- PHP Version: 5.3.5-1ubuntu7.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `local.qlbh`
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=76 ;

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
(75, 43, 'delete-label', 1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=44 ;

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
(43, 4, 'manager', 1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=79 ;

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
(78, 5, 73, 1);

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

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
(8, 'Công Ty TNHH Siêu Việt', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Nhà Phân Phồi Vân Trinh', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=483 ;

--
-- Dumping data for table `mtx_site_language_default`
--

INSERT INTO `mtx_site_language_default` (`id`, `role_id`, `default_text`, `action`, `date_create`, `date_modify`) VALUES
(251, 7, 'Admin - Listing Product Category', '', '2012-02-24 16:02:46', '2012-03-08 15:22:22'),
(252, 7, 'msg_select_record', '', '2012-02-24 16:02:46', '2012-03-08 15:22:23'),
(253, 7, 'Product Category search', '', '2012-02-24 16:02:46', '2012-03-08 15:22:23'),
(254, 7, 'Name', '', '2012-02-24 16:02:47', '2012-03-08 15:22:23'),
(255, 7, 'Status', '', '2012-02-24 16:02:47', '2012-03-08 15:22:23'),
(256, 7, 'All', '', '2012-02-24 16:02:47', '2012-03-08 15:22:23'),
(257, 7, 'Active', '', '2012-02-24 16:02:47', '2012-03-08 15:22:23'),
(258, 7, 'Unactive', '', '2012-02-24 16:02:47', '2012-03-08 15:22:24'),
(259, 7, 'Search', '', '2012-02-24 16:02:47', '2012-03-08 15:22:24'),
(260, 7, 'Product Category List', '', '2012-02-24 16:02:47', '2012-03-08 15:22:24'),
(261, 7, 'Add', '', '2012-02-24 16:02:47', '2012-03-08 15:22:24'),
(262, 7, 'Delete', '', '2012-02-24 16:02:47', '2012-03-08 15:22:24'),
(263, 7, 'Order', '', '2012-02-24 16:02:47', '2012-03-08 15:22:24'),
(264, 7, 'Id', '', '2012-02-24 16:02:48', '2012-03-08 15:22:25'),
(265, 7, 'Parent Cat', '', '2012-02-24 16:02:48', '2012-03-08 15:22:25'),
(266, 7, 'Loading...', '', '2012-02-24 16:02:48', '2012-03-08 15:22:25'),
(267, 7, 'Home', '', '2012-02-24 16:02:48', '2012-03-08 15:22:25'),
(268, 7, 'Logout', '', '2012-02-24 16:02:48', '2012-03-08 15:22:25'),
(269, 7, 'Administrator control panel', '', '2012-02-24 16:02:48', '2012-03-08 15:22:25'),
(270, 7, 'Welcome', '', '2012-02-24 16:02:48', '2012-03-08 15:22:26'),
(271, 7, 'Detail User''s information', '', '2012-02-24 16:02:49', '2012-03-08 15:22:26'),
(272, 7, 'Product management', '', '2012-02-24 16:02:49', '2012-03-08 15:22:26'),
(273, 7, 'List Cat', '', '2012-02-24 16:02:49', '2012-03-08 15:22:26'),
(274, 7, 'Add Cat', '', '2012-02-24 16:02:49', '2012-03-08 15:22:26'),
(275, 7, 'List Product', '', '2012-02-24 16:02:49', '2012-03-08 15:22:26'),
(276, 7, 'Add Product', '', '2012-02-24 16:02:49', '2012-03-08 15:22:27'),
(277, 7, 'Export', '', '2012-02-24 16:02:49', '2012-03-08 15:22:27'),
(278, 7, 'Import', '', '2012-02-24 16:02:49', '2012-03-08 15:22:27'),
(279, 7, 'Quotation', '', '2012-02-24 16:02:49', '2012-03-08 15:22:27'),
(280, 7, 'Upload image', '', '2012-02-24 16:02:49', '2012-03-08 15:22:27'),
(281, 7, 'Parner management', '', '2012-02-24 16:02:50', '2012-03-08 15:22:27'),
(282, 7, 'List', '', '2012-02-24 16:02:50', '2012-03-08 15:22:28'),
(283, 7, 'News management', '', '2012-02-24 16:02:50', '2012-03-08 15:22:28'),
(284, 7, 'Add News by RSS', '', '2012-02-24 16:02:50', '2012-03-08 15:22:28'),
(285, 7, 'Page management', '', '2012-02-24 16:02:50', '2012-03-08 15:22:28'),
(286, 7, 'Event management', '', '2012-02-24 16:02:50', '2012-03-08 15:22:28'),
(287, 7, 'Music management', '', '2012-02-24 16:02:50', '2012-03-08 15:22:28'),
(288, 7, 'System', '', '2012-02-24 16:02:50', '2012-03-08 15:22:29'),
(289, 7, 'User List', '', '2012-02-24 16:02:51', '2012-03-08 15:22:29'),
(290, 7, 'Add User', '', '2012-02-24 16:02:51', '2012-03-08 15:22:29'),
(291, 7, 'Generator Models', '', '2012-02-24 16:02:51', '2012-03-08 15:22:29'),
(292, 7, 'System ACL', '', '2012-02-24 16:02:51', '2012-03-08 15:22:29'),
(293, 7, 'Module', '', '2012-02-24 16:02:51', '2012-03-08 15:22:29'),
(294, 7, 'Resource (controller)', '', '2012-02-24 16:02:51', '2012-03-08 15:22:30'),
(295, 7, 'Privilege (action)', '', '2012-02-24 16:02:51', '2012-03-08 15:22:30'),
(296, 7, 'Permission', '', '2012-02-24 16:02:51', '2012-03-08 15:22:30'),
(297, 7, '2011 All rights reserved.', '', '2012-02-24 16:02:51', '2012-03-08 15:22:30'),
(298, 7, 'Administrator Language', '', '2012-02-24 16:05:05', '2012-03-08 15:22:30'),
(299, 7, 'Label Managerment', '', '2012-02-24 16:08:14', '2012-03-08 15:22:31'),
(300, 7, 'Language', '', '2012-02-24 16:08:14', '2012-03-08 15:22:31'),
(301, 7, 'Action', '', '2012-02-24 16:09:09', '2012-03-08 15:22:31'),
(302, 7, 'Original Text', '', '2012-02-24 16:09:09', '2012-03-08 15:22:31'),
(303, 7, 'Translated Text', '', '2012-02-24 16:09:09', '2012-03-08 15:22:31'),
(304, 7, 'Save', '', '2012-02-24 16:09:09', '2012-03-08 15:22:31'),
(305, 7, 'Add new', '', '2012-02-24 16:09:09', '2012-03-08 15:22:32'),
(306, 7, 'Generate ini file', '', '2012-02-24 16:09:09', '2012-03-08 15:22:32'),
(307, 7, 'Add new Label', '', '2012-02-24 16:09:10', '2012-03-08 15:22:32'),
(308, 7, 'Name is not valid.', '', '2012-02-24 16:51:03', '2012-03-08 15:22:32'),
(309, 7, 'Admin - Adding Product Category', '', '2012-02-24 16:51:03', '2012-03-08 15:22:32'),
(310, 7, 'Name is not empty.', '', '2012-02-24 16:51:03', '2012-03-08 15:22:33'),
(311, 7, 'Adding Product Category', '', '2012-02-24 16:51:03', '2012-03-08 15:22:33'),
(312, 7, 'Parent Category', '', '2012-02-24 16:51:03', '2012-03-08 15:22:34'),
(313, 7, 'Description', '', '2012-02-24 16:51:03', '2012-03-08 15:22:34'),
(314, 7, 'Cancel', '', '2012-02-24 16:51:04', '2012-03-08 15:22:34'),
(315, 7, 'Admin - Listing event', '', '2012-02-24 16:52:14', '2012-03-08 15:22:34'),
(316, 7, 'Event search', '', '2012-02-24 16:52:14', '2012-03-08 15:22:34'),
(317, 7, 'Event List', '', '2012-02-24 16:52:14', '2012-03-08 15:22:34'),
(318, 7, 'Event', '', '2012-02-24 16:52:15', '2012-03-08 15:22:34'),
(319, 7, 'Date Start', '', '2012-02-24 16:52:15', '2012-03-08 15:22:35'),
(320, 7, 'Date End', '', '2012-02-24 16:52:15', '2012-03-08 15:22:35'),
(321, 7, 'Action is success.', '', '2012-02-24 16:52:34', '2012-03-08 15:22:35'),
(322, 7, 'Admin - Listing Product', '', '2012-02-24 16:54:11', '2012-03-08 15:22:35'),
(323, 7, 'Product search', '', '2012-02-24 16:54:11', '2012-03-08 15:22:35'),
(324, 7, 'Categories', '', '2012-02-24 16:54:12', '2012-03-08 15:22:36'),
(325, 7, 'Product List', '', '2012-02-24 16:54:12', '2012-03-08 15:22:36'),
(326, 7, 'Cat name', '', '2012-02-24 16:54:12', '2012-03-08 15:22:36'),
(327, 7, 'Quantity', '', '2012-02-24 16:54:12', '2012-03-08 15:22:36'),
(328, 7, 'Price', '', '2012-02-24 16:54:12', '2012-03-08 15:22:36'),
(329, 7, 'Type is not valid', '', '2012-02-24 16:54:14', '2012-03-08 15:22:36'),
(330, 7, 'Size is not valid', '', '2012-02-24 16:54:14', '2012-03-08 15:22:37'),
(331, 7, 'Admin - Adding Product', '', '2012-02-24 16:54:14', '2012-03-08 15:22:37'),
(332, 7, 'Category is not empty.', '', '2012-02-24 16:54:14', '2012-03-08 15:22:37'),
(333, 7, 'Adding Product', '', '2012-02-24 16:54:14', '2012-03-08 15:22:37'),
(334, 7, 'Category', '', '2012-02-24 16:54:14', '2012-03-08 15:22:37'),
(335, 7, 'Code', '', '2012-02-24 16:54:15', '2012-03-08 15:22:38'),
(336, 7, 'Image', '', '2012-02-24 16:54:15', '2012-03-08 15:22:38'),
(337, 7, 'Detail', '', '2012-02-24 16:54:15', '2012-03-08 15:22:38'),
(338, 7, 'Is typical', '', '2012-02-24 16:54:15', '2012-03-08 15:22:38'),
(339, 7, 'Admin - Imports Product', '', '2012-02-24 16:54:17', '2012-03-08 15:22:38'),
(340, 7, 'File is not empty.', '', '2012-02-24 16:54:17', '2012-03-08 15:22:38'),
(341, 7, 'Import Product', '', '2012-02-24 16:54:17', '2012-03-08 15:22:38'),
(342, 7, 'File', '', '2012-02-24 16:54:17', '2012-03-08 15:22:39'),
(343, 7, 'Admin - Listing Quotations', '', '2012-02-24 16:54:19', '2012-03-08 15:22:39'),
(344, 7, 'Qoutation search', '', '2012-02-24 16:54:19', '2012-03-08 15:22:39'),
(345, 7, 'Quotations List', '', '2012-02-24 16:54:20', '2012-03-08 15:22:39'),
(346, 7, 'Export to success!', '', '2012-02-24 16:54:22', '2012-03-08 15:22:39'),
(347, 7, 'Admin - Upload image for Product', '', '2012-02-24 16:54:27', '2012-03-08 15:22:40'),
(348, 7, 'Upload image for Product', '', '2012-02-24 16:54:27', '2012-03-08 15:22:40'),
(349, 7, 'Admin - Listing parner', '', '2012-02-24 16:54:30', '2012-03-08 15:22:40'),
(350, 7, 'Parner search', '', '2012-02-24 16:54:30', '2012-03-08 15:22:40'),
(351, 7, 'Parner List', '', '2012-02-24 16:54:31', '2012-03-08 15:22:40'),
(352, 7, 'Logo', '', '2012-02-24 16:54:31', '2012-03-08 15:22:40'),
(353, 7, 'Admin - Adding parner', '', '2012-02-24 16:54:32', '2012-03-08 15:22:40'),
(354, 7, 'Adding parner', '', '2012-02-24 16:54:32', '2012-03-08 15:22:41'),
(355, 7, 'Website', '', '2012-02-24 16:54:32', '2012-03-08 15:22:41'),
(356, 7, 'Admin - Listing News', '', '2012-02-24 16:54:34', '2012-03-08 15:22:41'),
(357, 7, 'News search', '', '2012-02-24 16:54:34', '2012-03-08 15:22:41'),
(358, 7, 'News List', '', '2012-02-24 16:54:35', '2012-03-08 15:22:41'),
(359, 7, 'title', '', '2012-02-24 16:54:35', '2012-03-08 15:22:42'),
(360, 7, 'Title is not valid.', '', '2012-02-24 16:54:36', '2012-03-08 15:22:42'),
(361, 7, 'Admin - Adding news', '', '2012-02-24 16:54:36', '2012-03-08 15:22:42'),
(362, 7, 'Title is not empty.', '', '2012-02-24 16:54:37', '2012-03-08 15:22:42'),
(363, 7, 'Cat is not empty.', '', '2012-02-24 16:54:37', '2012-03-08 15:22:42'),
(364, 7, 'Adding news', '', '2012-02-24 16:54:37', '2012-03-08 15:22:42'),
(365, 7, 'Alias', '', '2012-02-24 16:54:37', '2012-03-08 15:22:42'),
(366, 7, 'Intro', '', '2012-02-24 16:54:37', '2012-03-08 15:22:43'),
(367, 7, 'Url is not valid.', '', '2012-02-24 16:54:39', '2012-03-08 15:22:43'),
(368, 7, 'Admin - Adding news by RSS', '', '2012-02-24 16:54:39', '2012-03-08 15:22:43'),
(369, 7, 'Link is not empty.', '', '2012-02-24 16:54:39', '2012-03-08 15:22:43'),
(370, 7, 'Adding news by RSS', '', '2012-02-24 16:54:39', '2012-03-08 15:22:43'),
(371, 7, 'Url', '', '2012-02-24 16:54:39', '2012-03-08 15:22:43'),
(372, 7, 'Admin - Listing News Category', '', '2012-02-24 16:54:45', '2012-03-08 15:22:44'),
(373, 7, 'News Category search', '', '2012-02-24 16:54:45', '2012-03-08 15:22:44'),
(374, 7, 'News Category List', '', '2012-02-24 16:54:45', '2012-03-08 15:22:44'),
(375, 7, 'Admin - Adding News Category', '', '2012-02-24 16:54:48', '2012-03-08 15:22:45'),
(376, 7, 'Adding News Category', '', '2012-02-24 16:54:48', '2012-03-08 15:22:45'),
(377, 7, 'Admin - Listing page', '', '2012-02-24 16:54:52', '2012-03-08 15:22:45'),
(378, 7, 'Page search', '', '2012-02-24 16:54:52', '2012-03-08 15:22:45'),
(379, 7, 'Page List', '', '2012-02-24 16:54:52', '2012-03-08 15:22:45'),
(380, 7, 'Code is not valid.', '', '2012-02-24 16:55:14', '2012-03-08 15:22:45'),
(381, 7, 'Admin - Adding page', '', '2012-02-24 16:55:14', '2012-03-08 15:22:45'),
(382, 7, 'Code is not empty.', '', '2012-02-24 16:55:14', '2012-03-08 15:22:46'),
(383, 7, 'Adding page', '', '2012-02-24 16:55:14', '2012-03-08 15:22:46'),
(384, 7, 'Admin - Adding event', '', '2012-02-24 16:55:26', '2012-03-08 15:22:46'),
(385, 7, 'Adding event', '', '2012-02-24 16:55:26', '2012-03-08 15:22:46'),
(386, 7, 'Admin - Listing Music', '', '2012-02-24 16:55:30', '2012-03-08 15:22:46'),
(387, 7, 'Music search', '', '2012-02-24 16:55:30', '2012-03-08 15:22:46'),
(388, 7, 'Music List', '', '2012-02-24 16:55:30', '2012-03-08 15:22:47'),
(389, 7, 'Music', '', '2012-02-24 16:55:30', '2012-03-08 15:22:47'),
(390, 7, 'Admin - Adding music', '', '2012-02-24 16:55:33', '2012-03-08 15:22:47'),
(391, 7, 'Adding Music', '', '2012-02-24 16:55:34', '2012-03-08 15:22:47'),
(392, 7, 'User search', '', '2012-02-24 16:55:39', '2012-03-08 15:22:47'),
(393, 7, 'Username', '', '2012-02-24 16:55:40', '2012-03-08 15:22:47'),
(394, 7, 'Email', '', '2012-02-24 16:55:40', '2012-03-08 15:22:47'),
(395, 7, 'Username is not valid.', '', '2012-02-24 16:55:44', '2012-03-08 15:22:48'),
(396, 7, 'Password is not valid.', '', '2012-02-24 16:55:44', '2012-03-08 15:22:48'),
(397, 7, 'Repassword is not valid.', '', '2012-02-24 16:55:44', '2012-03-08 15:22:48'),
(398, 7, 'Admin - Adding user', '', '2012-02-24 16:55:44', '2012-03-08 15:22:48'),
(399, 7, 'Username is not empty.', '', '2012-02-24 16:55:44', '2012-03-08 15:22:48'),
(400, 7, 'Password is not empty.', '', '2012-02-24 16:55:44', '2012-03-08 15:22:48'),
(401, 7, 'Adding user', '', '2012-02-24 16:55:44', '2012-03-08 15:22:49'),
(402, 7, 'Role', '', '2012-02-24 16:55:45', '2012-03-08 15:22:49'),
(403, 7, 'Password', '', '2012-02-24 16:55:45', '2012-03-08 15:22:49'),
(404, 7, 'Repeat Password', '', '2012-02-24 16:55:45', '2012-03-08 15:22:49'),
(405, 7, 'First name', '', '2012-02-24 16:55:45', '2012-03-08 15:22:49'),
(406, 7, 'Last name', '', '2012-02-24 16:55:45', '2012-03-08 15:22:49'),
(407, 7, 'Admin - Listing module', '', '2012-02-24 16:56:03', '2012-03-08 15:22:49'),
(408, 7, 'Module search', '', '2012-02-24 16:56:03', '2012-03-08 15:22:50'),
(409, 7, 'Module List', '', '2012-02-24 16:56:03', '2012-03-08 15:22:50'),
(410, 7, 'Stauts', '', '2012-02-24 16:56:03', '2012-03-08 15:22:50'),
(411, 7, 'Admin - Listing resource', '', '2012-02-24 16:56:09', '2012-03-08 15:22:50'),
(412, 7, 'Resource search', '', '2012-02-24 16:56:09', '2012-03-08 15:22:50'),
(413, 7, 'Resource List', '', '2012-02-24 16:56:09', '2012-03-08 15:22:50'),
(414, 7, 'Admin - Listing privilege', '', '2012-02-24 16:56:15', '2012-03-08 15:22:50'),
(415, 7, 'Privilege search', '', '2012-02-24 16:56:15', '2012-03-08 15:22:51'),
(416, 7, 'Privilege List', '', '2012-02-24 16:56:15', '2012-03-08 15:22:51'),
(417, 7, 'Resource', '', '2012-02-24 16:56:15', '2012-03-08 15:22:51'),
(418, 7, 'Admin - Listing permission', '', '2012-02-24 16:56:22', '2012-03-08 15:22:51'),
(419, 7, 'Permision List', '', '2012-02-24 16:56:22', '2012-03-08 15:22:51'),
(420, 7, 'LOGIN', '', '2012-02-25 08:40:28', '2012-03-08 15:22:51'),
(421, 7, 'User name', '', '2012-02-25 08:40:28', '2012-03-08 15:22:52'),
(422, 7, 'Please input username and password that to login to system.', '', '2012-02-25 08:40:28', '2012-03-08 15:22:52'),
(423, 7, 'Loading', '', '2012-02-25 08:40:28', '2012-03-08 15:22:52'),
(424, 7, 'Don''t have permission.', '', '2012-02-25 08:43:16', '2012-03-08 15:22:52'),
(425, 7, 'You want to delete logo?', '', '2012-02-26 03:04:44', '2012-03-08 15:22:52'),
(426, 7, 'LAPTOP', '', '2012-02-26 03:46:57', '2012-03-08 15:22:52'),
(427, 7, 'VND', '', '2012-02-26 03:46:57', '2012-03-08 15:22:52'),
(428, 7, 'View Detail', '', '2012-02-26 03:46:58', '2012-03-08 15:22:53'),
(429, 7, 'SCREEN LCD', '', '2012-02-26 04:52:34', '2012-03-08 15:22:53'),
(430, 7, 'COMPUTER', '', '2012-02-26 04:55:30', '2012-03-08 15:22:53'),
(431, 7, 'News lastest', '', '2012-02-26 07:49:46', '2012-03-08 15:22:53'),
(432, 7, 'Hot Events', '', '2012-02-26 07:58:05', '2012-03-08 15:22:53'),
(433, 7, 'Parner', '', '2012-02-26 08:08:17', '2012-03-08 15:22:53'),
(434, 7, 'You want to delete music?', '', '2012-02-26 08:35:10', '2012-03-08 15:22:54'),
(435, 7, 'Loading music', '', '2012-02-26 08:46:21', '2012-03-08 15:22:54'),
(436, 7, 'Forum', '', '2012-02-26 09:04:14', '2012-03-08 15:22:54'),
(437, 7, 'About', '', '2012-02-26 09:07:21', '2012-03-08 15:22:54'),
(438, 7, 'Product', '', '2012-02-26 09:07:21', '2012-03-08 15:22:54'),
(439, 7, 'News', '', '2012-02-26 09:07:21', '2012-03-08 15:22:54'),
(440, 7, 'Services', '', '2012-02-26 09:07:21', '2012-03-08 15:22:55'),
(441, 7, 'Contact', '', '2012-02-26 09:07:44', '2012-03-08 15:22:55'),
(442, 7, 'Module name is not valid.', '', '2012-02-27 13:45:46', '2012-03-08 15:22:55'),
(443, 7, 'Admin - Adding module.', '', '2012-02-27 13:45:46', '2012-03-08 15:22:56'),
(444, 7, 'Adding module', '', '2012-02-27 13:45:46', '2012-03-08 15:22:56'),
(445, 7, 'Menu Products', '', '2012-02-28 16:55:21', '2012-03-08 15:22:56'),
(446, 7, 'Typical Product', '', '2012-02-28 18:29:59', '2012-03-08 15:22:56'),
(447, 7, 'There is no result.', '', '2012-02-29 14:19:37', '2012-03-08 15:22:56'),
(448, 7, 'Title News', '', '2012-02-29 14:23:38', '2012-03-08 15:22:56'),
(449, 7, 'News relative', '', '2012-02-29 14:34:26', '2012-03-08 15:22:57'),
(450, 7, 'News Older', '', '2012-02-29 15:08:39', '2012-03-08 15:22:57'),
(451, 7, 'You want to delete image?', '', '2012-02-29 15:57:41', '2012-03-08 15:22:57'),
(452, 7, 'Title Event', '', '2012-02-29 17:45:13', '2012-03-08 15:22:57'),
(453, 7, 'Other Events', '', '2012-02-29 17:45:13', '2012-03-08 15:22:57'),
(454, 7, 'Support', '', '2012-03-01 15:22:56', '2012-03-08 15:22:57'),
(455, 7, 'Product detail', '', '2012-03-04 06:33:00', '2012-03-08 15:22:58'),
(456, 7, 'Updating...', '', '2012-03-04 08:47:19', '2012-03-08 15:22:58'),
(457, 7, 'Product name', '', '2012-03-05 14:52:40', '2012-03-08 15:22:58'),
(458, 7, 'Manufacturer', '', '2012-03-05 14:52:40', '2012-03-08 15:22:58'),
(459, 7, 'Support online', '', '2012-03-05 15:22:13', '2012-03-08 15:22:58'),
(461, 7, 'Counter', '', '2012-03-05 15:50:22', '2012-03-08 15:22:58'),
(462, 7, 'Service', '', '2012-03-05 16:02:24', '2012-03-08 15:22:58'),
(463, 7, 'Support Custommer', '', '2012-03-05 16:09:54', '2012-03-08 15:22:59'),
(464, 7, 'Download Quotation', '', '2012-03-05 16:12:04', '2012-03-08 15:22:59'),
(465, 7, 'NAM HAI COMPUTER', '', '2012-03-06 14:54:19', '2012-03-08 15:22:59'),
(467, 7, 'Contact admin', '', '2012-03-06 16:34:04', '2012-03-08 15:22:59'),
(468, 7, 'Products', '', '2012-03-07 16:51:41', '2012-03-08 15:22:59'),
(469, 7, 'Action is not success.', '', '2012-03-09 14:39:47', '2012-03-09 14:39:47'),
(470, 7, 'TEST LANGUGE', '', '2012-03-09 15:42:59', '2012-03-09 15:42:59'),
(471, 7, 'HERE', '', '2012-03-09 16:38:13', '2012-03-09 16:38:13'),
(472, 7, 'HAHA', '', '2012-03-09 17:09:54', '2012-03-09 17:09:54'),
(473, 7, 'Only support Excel 2007', '', '2012-03-10 08:46:45', '2012-03-10 08:46:45'),
(474, 7, 'List News Cat', '', '2012-03-10 08:46:46', '2012-03-10 08:46:46'),
(475, 7, 'Add News Cat', '', '2012-03-10 08:46:46', '2012-03-10 08:46:46'),
(476, 7, 'Price is not valid.', '', '2012-03-12 16:59:47', '2012-03-12 16:59:47'),
(477, 7, 'Quantity is not valid.', '', '2012-03-12 16:59:47', '2012-03-12 16:59:47'),
(478, 7, 'Advertising management', '', '2012-05-19 10:51:40', '2012-05-19 10:51:40'),
(479, 7, 'Support management', '', '2012-05-19 10:51:41', '2012-05-19 10:51:41'),
(480, 7, 'Language management', '', '2012-05-19 10:51:41', '2012-05-19 10:51:41'),
(481, 7, 'Resource name is not valid.', '', '2012-05-19 11:27:29', '2012-05-19 11:27:29'),
(482, 7, 'Admin - Adding resource.', '', '2012-05-19 11:27:30', '2012-05-19 11:27:30');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=218 ;

--
-- Dumping data for table `mtx_site_language_multi`
--

INSERT INTO `mtx_site_language_multi` (`id`, `language_default_id`, `lang_key`, `translate_text`, `date_create`, `date_modify`) VALUES
(1, 251, 'VN', 'DS Chuyên Mục Sản Phẩm', '2012-02-24 16:38:07', '2012-03-08 15:22:22'),
(2, 252, 'VN', 'Xin vui lòng chọn ít nhất 1 mẩu tin.', '2012-02-24 16:38:07', '2012-03-08 15:22:23'),
(3, 253, 'VN', 'Tìm kiếm Chuyên mục sản phẩm', '2012-02-24 16:38:07', '2012-03-08 15:22:23'),
(4, 254, 'VN', 'Tên', '2012-02-24 16:38:07', '2012-03-08 15:22:23'),
(5, 255, 'VN', 'Trạng thái', '2012-02-24 16:38:08', '2012-03-08 15:22:23'),
(6, 256, 'VN', 'Tất cả', '2012-02-24 16:38:08', '2012-03-08 15:22:23'),
(7, 257, 'VN', 'Kích hoạt', '2012-02-24 16:38:08', '2012-03-08 15:22:23'),
(8, 258, 'VN', 'Chưa kích hoạt', '2012-02-24 16:38:08', '2012-03-08 15:22:24'),
(9, 259, 'VN', 'Tìm kiếm', '2012-02-24 16:38:08', '2012-03-08 15:22:24'),
(10, 260, 'VN', 'DS Chuyên Mục Sản Phẩm', '2012-02-24 16:38:08', '2012-03-08 15:22:24'),
(11, 261, 'VN', 'Thêm mới', '2012-02-24 16:38:08', '2012-03-08 15:22:24'),
(12, 262, 'VN', 'Xóa', '2012-02-24 16:38:09', '2012-03-08 15:22:24'),
(13, 263, 'VN', 'Thứ tự', '2012-02-24 16:38:09', '2012-03-08 15:22:25'),
(14, 264, 'VN', 'Id', '2012-02-24 16:38:09', '2012-03-08 15:22:25'),
(15, 265, 'VN', 'Chuyên mục cha', '2012-02-24 16:38:09', '2012-03-08 15:22:25'),
(16, 266, 'VN', 'Đang tải ...', '2012-02-24 16:38:09', '2012-03-08 15:22:25'),
(17, 267, 'VN', 'Trang Chủ', '2012-02-24 16:38:09', '2012-03-08 15:22:25'),
(18, 268, 'VN', 'Đăng xuất', '2012-02-24 16:38:09', '2012-03-08 15:22:25'),
(19, 269, 'VN', 'QUẢN TRỊ HỆ THỐNG', '2012-02-24 16:38:10', '2012-03-08 15:22:26'),
(20, 270, 'VN', 'Chào mừng', '2012-02-24 16:38:10', '2012-03-08 15:22:26'),
(21, 271, 'VN', 'Thông tin chi tiết tài khoản', '2012-02-24 16:38:10', '2012-03-08 15:22:26'),
(22, 272, 'VN', 'QL sản phẩm', '2012-02-24 16:38:10', '2012-03-08 15:22:26'),
(23, 273, 'VN', 'DS Chuyên mục sản phẩm', '2012-02-24 16:38:10', '2012-03-08 15:22:26'),
(24, 274, 'VN', 'Thêm mới', '2012-02-24 16:38:10', '2012-03-08 15:22:26'),
(25, 275, 'VN', 'DS Sản phẩm', '2012-02-24 16:38:11', '2012-03-08 15:22:27'),
(26, 276, 'VN', 'Thêm mới', '2012-02-24 16:38:11', '2012-03-08 15:22:27'),
(27, 277, 'VN', 'Export', '2012-02-24 16:38:11', '2012-03-08 15:22:27'),
(28, 278, 'VN', 'Import', '2012-02-24 16:38:11', '2012-03-08 15:22:27'),
(29, 279, 'VN', 'Bảng báo giá', '2012-02-24 16:38:11', '2012-03-08 15:22:27'),
(30, 280, 'VN', 'Upload hình ảnh', '2012-02-24 16:38:11', '2012-03-08 15:22:27'),
(31, 281, 'VN', 'Quản lý Đối tác', '2012-02-24 16:38:12', '2012-03-08 15:22:28'),
(32, 282, 'VN', 'Danh sách', '2012-02-24 16:38:12', '2012-03-08 15:22:28'),
(33, 283, 'VN', 'QL Tin tức', '2012-02-24 16:38:12', '2012-03-08 15:22:28'),
(34, 284, 'VN', 'Thêm tin từ RSS', '2012-02-24 16:38:12', '2012-03-08 15:22:28'),
(35, 285, 'VN', 'QL Trang tỉnh', '2012-02-24 16:38:12', '2012-03-08 15:22:28'),
(36, 286, 'VN', 'QL Sự kiện', '2012-02-24 16:38:12', '2012-03-08 15:22:28'),
(37, 287, 'VN', 'QL Âm nhạc', '2012-02-24 16:38:12', '2012-03-08 15:22:29'),
(38, 288, 'VN', 'Hệ Thống', '2012-02-24 16:38:13', '2012-03-08 15:22:29'),
(39, 289, 'VN', 'DS Người dùng', '2012-02-24 16:38:13', '2012-03-08 15:22:29'),
(40, 290, 'VN', 'Thêm mới', '2012-02-24 16:38:13', '2012-03-08 15:22:29'),
(41, 291, 'VN', '', '2012-02-24 16:38:13', '2012-03-08 15:22:29'),
(42, 292, 'VN', '', '2012-02-24 16:38:13', '2012-03-08 15:22:29'),
(43, 293, 'VN', '', '2012-02-24 16:38:13', '2012-03-08 15:22:30'),
(44, 294, 'VN', '', '2012-02-24 16:38:13', '2012-03-08 15:22:30'),
(45, 295, 'VN', '', '2012-02-24 16:38:14', '2012-03-08 15:22:30'),
(46, 296, 'VN', '', '2012-02-24 16:38:14', '2012-03-08 15:22:30'),
(47, 297, 'VN', '', '2012-02-24 16:38:14', '2012-03-08 15:22:30'),
(48, 298, 'VN', 'QL Ngôn ngữ', '2012-02-24 16:38:14', '2012-03-08 15:22:30'),
(49, 299, 'VN', 'Quản lý Label', '2012-02-24 16:38:14', '2012-03-08 15:22:31'),
(50, 300, 'VN', 'Ngôn ngữ', '2012-02-24 16:38:14', '2012-03-08 15:22:31'),
(51, 301, 'VN', '', '2012-02-24 16:38:14', '2012-03-08 15:22:31'),
(52, 302, 'VN', '', '2012-02-24 16:38:15', '2012-03-08 15:22:31'),
(53, 303, 'VN', '', '2012-02-24 16:38:15', '2012-03-08 15:22:31'),
(54, 304, 'VN', 'Lưu', '2012-02-24 16:38:15', '2012-03-08 15:22:31'),
(55, 305, 'VN', 'Thêm mới', '2012-02-24 16:38:15', '2012-03-08 15:22:32'),
(56, 306, 'VN', 'Xuất File INI', '2012-02-24 16:38:15', '2012-03-08 15:22:32'),
(57, 307, 'VN', '', '2012-02-24 16:38:15', '2012-03-08 15:22:32'),
(58, 308, 'VN', '', '2012-03-06 14:56:10', '2012-03-08 15:22:32'),
(59, 309, 'VN', '', '2012-03-06 14:56:10', '2012-03-08 15:22:32'),
(60, 310, 'VN', '', '2012-03-06 14:56:10', '2012-03-08 15:22:33'),
(61, 311, 'VN', '', '2012-03-06 14:56:10', '2012-03-08 15:22:33'),
(62, 312, 'VN', '', '2012-03-06 14:56:11', '2012-03-08 15:22:34'),
(63, 313, 'VN', '', '2012-03-06 14:56:11', '2012-03-08 15:22:34'),
(64, 314, 'VN', '', '2012-03-06 14:56:12', '2012-03-08 15:22:34'),
(65, 315, 'VN', '', '2012-03-06 14:56:12', '2012-03-08 15:22:34'),
(66, 316, 'VN', '', '2012-03-06 14:56:12', '2012-03-08 15:22:34'),
(67, 317, 'VN', '', '2012-03-06 14:56:12', '2012-03-08 15:22:34'),
(68, 318, 'VN', '', '2012-03-06 14:56:12', '2012-03-08 15:22:35'),
(69, 319, 'VN', '', '2012-03-06 14:56:12', '2012-03-08 15:22:35'),
(70, 320, 'VN', '', '2012-03-06 14:56:13', '2012-03-08 15:22:35'),
(71, 321, 'VN', '', '2012-03-06 14:56:13', '2012-03-08 15:22:35'),
(72, 322, 'VN', '', '2012-03-06 14:56:13', '2012-03-08 15:22:35'),
(73, 323, 'VN', 'Tìm Sản Phẩm', '2012-03-06 14:56:13', '2012-03-08 15:22:35'),
(74, 324, 'VN', 'Chuyên mục', '2012-03-06 14:56:13', '2012-03-08 15:22:36'),
(75, 325, 'VN', 'Danh sách sản phẩm', '2012-03-06 14:56:13', '2012-03-08 15:22:36'),
(76, 326, 'VN', 'Tên chuyên mục', '2012-03-06 14:56:14', '2012-03-08 15:22:36'),
(77, 327, 'VN', 'Số lượng', '2012-03-06 14:56:14', '2012-03-08 15:22:36'),
(78, 328, 'VN', 'Đơn Giá', '2012-03-06 14:56:14', '2012-03-08 15:22:36'),
(79, 329, 'VN', '', '2012-03-06 14:56:14', '2012-03-08 15:22:36'),
(80, 330, 'VN', '', '2012-03-06 14:56:14', '2012-03-08 15:22:37'),
(81, 331, 'VN', '', '2012-03-06 14:56:14', '2012-03-08 15:22:37'),
(82, 332, 'VN', '', '2012-03-06 14:56:14', '2012-03-08 15:22:37'),
(83, 333, 'VN', '', '2012-03-06 14:56:15', '2012-03-08 15:22:37'),
(84, 334, 'VN', '', '2012-03-06 14:56:15', '2012-03-08 15:22:37'),
(85, 335, 'VN', 'Mã Hàng', '2012-03-06 14:56:15', '2012-03-08 15:22:38'),
(86, 336, 'VN', '', '2012-03-06 14:56:15', '2012-03-08 15:22:38'),
(87, 337, 'VN', '', '2012-03-06 14:56:15', '2012-03-08 15:22:38'),
(88, 338, 'VN', '', '2012-03-06 14:56:15', '2012-03-08 15:22:38'),
(89, 339, 'VN', '', '2012-03-06 14:56:16', '2012-03-08 15:22:38'),
(90, 340, 'VN', '', '2012-03-06 14:56:16', '2012-03-08 15:22:38'),
(91, 341, 'VN', '', '2012-03-06 14:56:16', '2012-03-08 15:22:38'),
(92, 342, 'VN', '', '2012-03-06 14:56:16', '2012-03-08 15:22:39'),
(93, 343, 'VN', '', '2012-03-06 14:56:16', '2012-03-08 15:22:39'),
(94, 344, 'VN', '', '2012-03-06 14:56:16', '2012-03-08 15:22:39'),
(95, 345, 'VN', '', '2012-03-06 14:56:16', '2012-03-08 15:22:39'),
(96, 346, 'VN', '', '2012-03-06 14:56:17', '2012-03-08 15:22:39'),
(97, 347, 'VN', '', '2012-03-06 14:56:17', '2012-03-08 15:22:40'),
(98, 348, 'VN', '', '2012-03-06 14:56:17', '2012-03-08 15:22:40'),
(99, 349, 'VN', '', '2012-03-06 14:56:17', '2012-03-08 15:22:40'),
(100, 350, 'VN', '', '2012-03-06 14:56:17', '2012-03-08 15:22:40'),
(101, 351, 'VN', '', '2012-03-06 14:56:17', '2012-03-08 15:22:40'),
(102, 352, 'VN', '', '2012-03-06 14:56:18', '2012-03-08 15:22:40'),
(103, 353, 'VN', '', '2012-03-06 14:56:18', '2012-03-08 15:22:41'),
(104, 354, 'VN', '', '2012-03-06 14:56:18', '2012-03-08 15:22:41'),
(105, 355, 'VN', '', '2012-03-06 14:56:18', '2012-03-08 15:22:41'),
(106, 356, 'VN', '', '2012-03-06 14:56:18', '2012-03-08 15:22:41'),
(107, 357, 'VN', '', '2012-03-06 14:56:18', '2012-03-08 15:22:41'),
(108, 358, 'VN', '', '2012-03-06 14:56:18', '2012-03-08 15:22:41'),
(109, 359, 'VN', '', '2012-03-06 14:56:19', '2012-03-08 15:22:42'),
(110, 360, 'VN', '', '2012-03-06 14:56:19', '2012-03-08 15:22:42'),
(111, 361, 'VN', '', '2012-03-06 14:56:19', '2012-03-08 15:22:42'),
(112, 362, 'VN', '', '2012-03-06 14:56:19', '2012-03-08 15:22:42'),
(113, 363, 'VN', '', '2012-03-06 14:56:19', '2012-03-08 15:22:42'),
(114, 364, 'VN', '', '2012-03-06 14:56:19', '2012-03-08 15:22:42'),
(115, 365, 'VN', '', '2012-03-06 14:56:20', '2012-03-08 15:22:42'),
(116, 366, 'VN', 'Mô Tả ngắn', '2012-03-06 14:56:20', '2012-03-08 15:22:43'),
(117, 367, 'VN', '', '2012-03-06 14:56:20', '2012-03-08 15:22:43'),
(118, 368, 'VN', '', '2012-03-06 14:56:20', '2012-03-08 15:22:43'),
(119, 369, 'VN', '', '2012-03-06 14:56:20', '2012-03-08 15:22:43'),
(120, 370, 'VN', '', '2012-03-06 14:56:20', '2012-03-08 15:22:43'),
(121, 371, 'VN', '', '2012-03-06 14:56:20', '2012-03-08 15:22:43'),
(122, 372, 'VN', '', '2012-03-06 14:56:21', '2012-03-08 15:22:44'),
(123, 373, 'VN', '', '2012-03-06 14:56:21', '2012-03-08 15:22:44'),
(124, 374, 'VN', '', '2012-03-06 14:56:21', '2012-03-08 15:22:45'),
(125, 375, 'VN', '', '2012-03-06 14:56:21', '2012-03-08 15:22:45'),
(126, 376, 'VN', '', '2012-03-06 14:56:21', '2012-03-08 15:22:45'),
(127, 377, 'VN', '', '2012-03-06 14:56:21', '2012-03-08 15:22:45'),
(128, 378, 'VN', '', '2012-03-06 14:56:22', '2012-03-08 15:22:45'),
(129, 379, 'VN', '', '2012-03-06 14:56:22', '2012-03-08 15:22:45'),
(130, 380, 'VN', '', '2012-03-06 14:56:22', '2012-03-08 15:22:45'),
(131, 381, 'VN', '', '2012-03-06 14:56:22', '2012-03-08 15:22:46'),
(132, 382, 'VN', '', '2012-03-06 14:56:23', '2012-03-08 15:22:46'),
(133, 383, 'VN', '', '2012-03-06 14:56:23', '2012-03-08 15:22:46'),
(134, 384, 'VN', '', '2012-03-06 14:56:23', '2012-03-08 15:22:46'),
(135, 385, 'VN', '', '2012-03-06 14:56:23', '2012-03-08 15:22:46'),
(136, 386, 'VN', '', '2012-03-06 14:56:23', '2012-03-08 15:22:46'),
(137, 387, 'VN', '', '2012-03-06 14:56:24', '2012-03-08 15:22:46'),
(138, 388, 'VN', '', '2012-03-06 14:56:24', '2012-03-08 15:22:47'),
(139, 389, 'VN', '', '2012-03-06 14:56:24', '2012-03-08 15:22:47'),
(140, 390, 'VN', '', '2012-03-06 14:56:24', '2012-03-08 15:22:47'),
(141, 391, 'VN', '', '2012-03-06 14:56:24', '2012-03-08 15:22:47'),
(142, 392, 'VN', 'Tìm người dùng', '2012-03-06 14:56:24', '2012-03-08 15:22:47'),
(143, 393, 'VN', 'Tên đăng nhập', '2012-03-06 14:56:25', '2012-03-08 15:22:47'),
(144, 394, 'VN', '', '2012-03-06 14:56:25', '2012-03-08 15:22:48'),
(145, 395, 'VN', 'Tên đăng nhập không hợp lệ', '2012-03-06 14:56:25', '2012-03-08 15:22:48'),
(146, 396, 'VN', 'Mật khẩu không hợp lệ', '2012-03-06 14:56:25', '2012-03-08 15:22:48'),
(147, 397, 'VN', 'Mật khẩu không giống', '2012-03-06 14:56:25', '2012-03-08 15:22:48'),
(148, 398, 'VN', 'Thêm người dùng', '2012-03-06 14:56:25', '2012-03-08 15:22:48'),
(149, 399, 'VN', 'Tên đăng nhập trống', '2012-03-06 14:56:25', '2012-03-08 15:22:48'),
(150, 400, 'VN', 'Mật khẩu trống', '2012-03-06 14:56:26', '2012-03-08 15:22:48'),
(151, 401, 'VN', '', '2012-03-06 14:56:26', '2012-03-08 15:22:49'),
(152, 402, 'VN', '', '2012-03-06 14:56:26', '2012-03-08 15:22:49'),
(153, 403, 'VN', '', '2012-03-06 14:56:26', '2012-03-08 15:22:49'),
(154, 404, 'VN', '', '2012-03-06 14:56:26', '2012-03-08 15:22:49'),
(155, 405, 'VN', 'Tên', '2012-03-06 14:56:26', '2012-03-08 15:22:49'),
(156, 406, 'VN', 'Họ', '2012-03-06 14:56:26', '2012-03-08 15:22:49'),
(157, 407, 'VN', '', '2012-03-06 14:56:27', '2012-03-08 15:22:50'),
(158, 408, 'VN', '', '2012-03-06 14:56:27', '2012-03-08 15:22:50'),
(159, 409, 'VN', '', '2012-03-06 14:56:27', '2012-03-08 15:22:50'),
(160, 410, 'VN', 'Tình trạng', '2012-03-06 14:56:27', '2012-03-08 15:22:50'),
(161, 411, 'VN', '', '2012-03-06 14:56:27', '2012-03-08 15:22:50'),
(162, 412, 'VN', '', '2012-03-06 14:56:27', '2012-03-08 15:22:50'),
(163, 413, 'VN', '', '2012-03-06 14:56:28', '2012-03-08 15:22:50'),
(164, 414, 'VN', '', '2012-03-06 14:56:28', '2012-03-08 15:22:51'),
(165, 415, 'VN', '', '2012-03-06 14:56:28', '2012-03-08 15:22:51'),
(166, 416, 'VN', '', '2012-03-06 14:56:28', '2012-03-08 15:22:51'),
(167, 417, 'VN', '', '2012-03-06 14:56:28', '2012-03-08 15:22:51'),
(168, 418, 'VN', '', '2012-03-06 14:56:28', '2012-03-08 15:22:51'),
(169, 419, 'VN', '', '2012-03-06 14:56:28', '2012-03-08 15:22:51'),
(170, 420, 'VN', 'Đăng Nhập', '2012-03-06 14:56:29', '2012-03-08 15:22:52'),
(171, 421, 'VN', 'Tên đăng nhập', '2012-03-06 14:56:29', '2012-03-08 15:22:52'),
(172, 422, 'VN', 'Xin vui lòng nhập tên và mật khẩu', '2012-03-06 14:56:29', '2012-03-08 15:22:52'),
(173, 423, 'VN', 'Đang tải ...', '2012-03-06 14:56:29', '2012-03-08 15:22:52'),
(174, 424, 'VN', 'Bạn không có quyền.', '2012-03-06 14:56:29', '2012-03-08 15:22:52'),
(175, 425, 'VN', '', '2012-03-06 14:56:29', '2012-03-08 15:22:52'),
(176, 426, 'VN', 'Máy tính xách tay', '2012-03-06 14:56:29', '2012-03-08 15:22:52'),
(177, 427, 'VN', 'VNĐ', '2012-03-06 14:56:30', '2012-03-08 15:22:53'),
(178, 428, 'VN', 'Xem chi tiết', '2012-03-06 14:56:30', '2012-03-08 15:22:53'),
(179, 429, 'VN', 'MÀN HÌNH', '2012-03-06 14:56:30', '2012-03-08 15:22:53'),
(180, 430, 'VN', 'MÁY TÍNH', '2012-03-06 14:56:30', '2012-03-08 15:22:53'),
(181, 431, 'VN', 'Tin Mới Nhất', '2012-03-06 14:56:30', '2012-03-08 15:22:53'),
(182, 432, 'VN', 'Sự Kiện Nổi Bật', '2012-03-06 14:56:30', '2012-03-08 15:22:53'),
(183, 433, 'VN', 'Đối Tác', '2012-03-06 14:56:30', '2012-03-08 15:22:54'),
(184, 434, 'VN', '', '2012-03-06 14:56:31', '2012-03-08 15:22:54'),
(185, 435, 'VN', 'Đang tải', '2012-03-06 14:57:13', '2012-03-08 15:22:54'),
(186, 436, 'VN', 'Diễn Đàn', '2012-03-06 14:57:13', '2012-03-08 15:22:54'),
(187, 437, 'VN', 'Giới Thiệu', '2012-03-06 14:57:13', '2012-03-08 15:22:54'),
(188, 438, 'VN', 'Sản Phẩm', '2012-03-06 14:57:13', '2012-03-08 15:22:54'),
(189, 439, 'VN', 'Tin Tức', '2012-03-06 14:57:13', '2012-03-08 15:22:55'),
(190, 440, 'VN', 'Dịch Vụ Tư Vấn', '2012-03-06 14:57:14', '2012-03-08 15:22:55'),
(191, 441, 'VN', 'Liên Hệ', '2012-03-06 14:57:14', '2012-03-08 15:22:55'),
(192, 442, 'VN', '', '2012-03-06 14:57:14', '2012-03-08 15:22:56'),
(193, 443, 'VN', '', '2012-03-06 14:57:14', '2012-03-08 15:22:56'),
(194, 444, 'VN', '', '2012-03-06 14:57:14', '2012-03-08 15:22:56'),
(195, 445, 'VN', 'SẢN PHẨM', '2012-03-06 14:57:14', '2012-03-08 15:22:56'),
(196, 446, 'VN', 'Sản Phẩm Đặc Biệt', '2012-03-06 14:57:14', '2012-03-08 15:22:56'),
(197, 447, 'VN', 'Đang cập nhật ...', '2012-03-06 14:57:14', '2012-03-08 15:22:56'),
(198, 448, 'VN', 'TIN TỨC', '2012-03-06 14:57:15', '2012-03-08 15:22:56'),
(199, 449, 'VN', 'Tin liên quan', '2012-03-06 14:57:15', '2012-03-08 15:22:57'),
(200, 450, 'VN', 'Tin cũ hơn', '2012-03-06 14:57:15', '2012-03-08 15:22:57'),
(201, 451, 'VN', '', '2012-03-06 14:57:15', '2012-03-08 15:22:57'),
(202, 452, 'VN', 'Sự Kiện', '2012-03-06 14:57:15', '2012-03-08 15:22:57'),
(203, 453, 'VN', 'Sự kiện khác', '2012-03-06 14:57:15', '2012-03-08 15:22:57'),
(204, 454, 'VN', 'Hỗ Trợ', '2012-03-06 14:57:15', '2012-03-08 15:22:57'),
(205, 455, 'VN', 'Thông Tin Chi Tiết', '2012-03-06 14:57:16', '2012-03-08 15:22:58'),
(206, 456, 'VN', 'Đang cập nhật ...', '2012-03-06 14:57:16', '2012-03-08 15:22:58'),
(207, 457, 'VN', 'Tên sản phẩm', '2012-03-06 14:57:16', '2012-03-08 15:22:58'),
(208, 458, 'VN', 'Nhà sản xuất', '2012-03-06 14:57:16', '2012-03-08 15:22:58'),
(209, 459, 'VN', 'Hỗ Trợ Trực Tuyến', '2012-03-06 14:57:16', '2012-03-08 15:22:58'),
(211, 461, 'VN', 'Lượt Truy Cập', '2012-03-06 14:57:16', '2012-03-08 15:22:58'),
(212, 462, 'VN', 'Dịch Vụ Tư Vấn', '2012-03-06 14:57:16', '2012-03-08 15:22:58'),
(213, 463, 'VN', 'Hỗ Trợ Khách Hàng', '2012-03-06 14:57:17', '2012-03-08 15:22:59'),
(214, 464, 'VN', 'Bảng báo giá', '2012-03-06 14:57:17', '2012-03-08 15:22:59'),
(215, 465, 'VN', 'VI TÍNH NAM HẢI', '2012-03-06 14:57:17', '2012-03-08 15:22:59'),
(216, 467, 'VN', 'Xin vui lòng liên hệ quản trị', '2012-03-07 14:13:29', '2012-03-08 15:22:59'),
(217, 468, 'VN', 'Sản Phẩm', '2012-03-07 16:54:53', '2012-03-08 15:22:59');

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
