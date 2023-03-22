<?php

include('../config/config.php');
include('../src/database.php');

$titel = 'Artiklar Nättraby Vägmuseum';

include('../view/header.php');

// Connect to the database
$dsn = getDsn("nvm.sqlite");
$db = connectToDatabase($dsn);

//Create SQL statement
$sql = <<<EOD
SELECT
    name,
    author
FROM article
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql);

//Execute the SQL statement
$stmt->execute();

//Get and print result
$res = $stmt->fetchAll();

include("../view/php/artiklar.php");
include("../view/footer.php");
