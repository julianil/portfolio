<?php
include('../config/config.php');

$titel = 'Sessionen';

include('../view/header.php');

$sessionName = session_name();
$sessionId = session_id();
$sessionCookie = session_get_cookie_params();

?>

<main class="main">
    <article class = "article">
        <h1><?= $title ?></h1>
            <p>För att visa detaljer om sessionen och felsökning.</p>
            <p><a href = "session_destroy.php">Förstör sessionen.</a></p>
            <p><a href = "session_write.php">Skriv till sessionen.</a></p>
        
        <p>Name of session: '<?= $sessionName ?>'</p>
        <p>Id of this session: '<?= $sessionId ?>'</p>
        <p>Details of the session cookie:</p>
        <pre><?= print_r($sessionCookie, 1) ?></pre>

        <p>Content of the $_SESSION variable.</p>
        <pre><?= var_dump($_SESSION) ?></pre>
    </article> 
</main>

<?php include('../view/footer.php') ?>