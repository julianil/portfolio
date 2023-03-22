<?php

include('../config/config.php');
require("../src/database.php");

$titel = 'Om Nättraby Vägmuseum';

include('../view/header.php');

// Connect to the database
$dsn = getDsn("nvm.sqlite");
$db = connectToDatabase($dsn);

//Create SQL statement
$sql = <<<EOD
SELECT
    name,
    title,
    data,
    author
FROM article
WHERE
    name = 'kontakt'
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql);

//Execute the SQL statement
$stmt->execute();

//Get and print result
$res = $stmt->fetch();

//Create SQL statement
$sql1 = <<<EOD
SELECT
    data
FROM article
WHERE
    name = 'nattraby-vagmuseum'
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql1);

//Execute the SQL statement
$stmt->execute();

//Get and print result
$res1 = $stmt->fetch();

include('../view/php/om.php');
include('../view/footer.php');
