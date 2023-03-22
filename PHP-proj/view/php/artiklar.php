<?php

?>

<main>
    <article>
        <div class="huvudrubrik">
            <h2>Artiklar</h2>
            <p>Här finner du alla artiklar relaterade till Nättraby vägmuseum. Klicka på valfri länk för att läsa mer</p>
        </div>
        <div class="line"></div>
        <div class="artikel">
        <?php foreach ($res as $row) :
            $articleEncoded = urlencode($row['name']);
            $urlToArticle = "artiklar_process.php?name=" . htmlentities($articleEncoded);
            ?>
            <h3><?= htmlentities($row['name']) ?></h3>
            <p class="byline">Författare: <?= htmlentities($row['author']) ?></p>
            <a href="<?= $urlToArticle ?>">Läs mer om <?= htmlentities($row['name']) ?></a>
            <div class="line"></div>
        <?php endforeach ?>
        </div>
    </article>
    <a class="back-to-top" href="artiklar.php"><img src="img/arrow-icon.png" alt="upp-pil"></a>
</main>
