<?php

/**
 * Sök efter objekt och artiklar
 */

include('../config/config.php');
require("../src/database.php");

$titel = 'Sökning Nättraby Vägmuseum';

include('../view/header.php');

?>
<main class="main">
    <article class="article">

<?php
include('../view/php/searchForm.php');

// Get details from the query string
$query = $_GET['query'] ?? null;

// Connect to the database
$dsn = getDsn("nvm.sqlite");
$db = connectToDatabase($dsn);
// Create the SQL statement
$sql = <<<EOD
SELECT
    name,
    image1,
    image1Alt,
    image1Text
FROM object
WHERE
    name LIKE ?
;
EOD;
// Prepare the SQL statement so it can be executed
$stmt = $db->prepare($sql);
// Execute the SQL statement towards the database
$args = [$query];
$stmt->execute($args);
// Get the resultset
$res = $stmt->fetchAll();
// Create the SQL statement
$sql1 = <<<EOD
SELECT
    name,
    author
FROM article
WHERE
    name LIKE ?
;
EOD;
// Prepare the SQL statement so it can be executed
$stmt = $db->prepare($sql1);
// Execute the SQL statement towards the database
$args = [$query];
$stmt->execute($args);
// Get the resultset
$res1 = $stmt->fetchAll();


include('../view/php/searchResult.php');
include('../view/footer.php');
