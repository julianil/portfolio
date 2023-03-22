<?php

include('../config/config.php');
include('../src/database.php');

// Get incoming data from query
$nameImg = $_GET["name"] ?? "";

//Save object name to session and redirect
$_SESSION["nameImg"] = $nameImg;
redirectTo("img.php");
