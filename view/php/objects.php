<?php

?>

<main>
    <article>
        <div class="huvudrubrik">
            <h2>Objekt</h2>
            <p>Här finner du alla Nättraby vägmuseums objekt. Klicka på valfritt objekt för att läsa mer</p>
        </div>
        <div class="container"> 
            <?php foreach ($res as $row) :
                $objectEncoded = urlencode($row['name']);
                $urlToObject = "objects_process.php?name=" . htmlentities($objectEncoded);
                $image1 = htmlentities($row['image1'] ?? "");
                $image1Alt = htmlentities($row['image1Alt'] ?? "");
                ?>
                <figure class="box">
                    <a href="<?= $urlToObject ?>"><img src="img/orig/<?= $image1 ?>" alt="<?= $image1Alt ?>"></a>
                    <figcaption class="box-caption"><?= htmlentities($row['image1Text']) ?><br><br>
                    <a href="<?= $urlToObject ?>">Läs mer om <?= htmlentities($row['name']) ?></a>
                    </figcaption>
                </figure>
            <?php endforeach ?>
        </div>
    </article>
    <a class="back-to-top" href="objects.php"><img src="img/arrow-icon.png" alt="upp-pil"></a>
</main>
