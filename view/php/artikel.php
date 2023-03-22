<?php

$title = htmlentities($res['title'] ?? "");
$author = htmlentities($res['author'] ?? "");
$name = htmlentities($res['name'] ?? "");
$mapImage = htmlentities($res['mapImage'] ?? "");
$gps = htmlentities($res['gps'] ?? "");
$image1 = htmlentities($res['image1'] ?? "");
$image1Alt = htmlentities($res['image1Alt'] ?? "");
$image1Text = htmlentities($res['image1Text'] ?? "");
$image2 = htmlentities($res['image2'] ?? "");
$image2Alt = htmlentities($res['image2Alt'] ?? "");
$image2Text = htmlentities($res['image2Text'] ?? "");
?>

<main>
    <article>
        <div class= "artikel">
            <div class="huvudrubrik">
                <?= $title ?>
            </div>
            <p class="byline">Författare: <?= $author ?>   |   <a href="artiklar.php">Tillbaka till alla artiklar</a></p>
            <h3><?= htmlentities($res['name']) ?></h3>
            <?php if ($mapImage != "" && $gps != "") :?>
                <div class="artikel-img">
                    <img src="<?= $mapImage ?>" alt="Karta">
                    <div class="bild-text">
                        <?= $gps ?>
                    </div>
                </div>
            <?php endif;?>
            <div class="artikel-data">
                <?= html_entity_decode($res['data']) ?>
            </div>
            <?php if ($image1 != "" && $image1Alt != "") :?>
                <div class="artikel-img">
                    <img src="img/orig/<?= $image1 ?>" alt="<?= $image1Alt ?>">
                    <div class="bild-text">
                        <?= $image1Text ?>
                    </div>
                </div>
            <?php endif;?>
            <?php if ($image2 != "" && $image2Alt != "") :?>
                <div class="artikel-img">
                    <img src="img/orig/<?= $image2 ?>" alt="<?= $image2Alt ?>">
                    <div class="bild-text">
                        <?= $image2Text ?>
                    </div>
                </div>
            <?php endif;?>
        </div>
    </article>
    <a class="back-to-top" href="artikel.php"><img src="img/arrow-icon.png" alt="upp-pil"></a>
</main>
