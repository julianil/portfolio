<?php

include('../config/config.php');
include('../src/database.php');

// Get incoming data from query
$articleName = $_GET["name"] ?? "";

//Save object name to session and redirect
$_SESSION["articleName"] = $articleName;
redirectTo("artikel.php");
