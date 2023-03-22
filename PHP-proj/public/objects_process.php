<?php

include('../config/config.php');
include('../src/database.php');

// Get incoming data from query
$objectName = $_GET["name"] ?? "";

//Save object name to session and redirect
$_SESSION["objectName"] = $objectName;
redirectTo("object.php");
