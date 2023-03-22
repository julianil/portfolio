<?php

function connectToDatabase(string $dsn): object
{
    try {
        $db = new PDO($dsn);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo "Failed to connect to the database using DSN:<br>'$dsn'<br>";
        throw $e;
    }

    return $db;
}

function getDsn(string $databaseFile): string
{
    $fileName = "../db/$databaseFile";
    if ($_SERVER["SERVER_NAME"] !== "www.student.bth.se") {
        $fileName = 'C:\\db\\' . $databaseFile;
    }
    $dsn = "sqlite:$fileName";

    return $dsn;
}
