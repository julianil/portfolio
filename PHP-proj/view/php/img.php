<?php

$name1 = htmlentities($res['name'] ?? "");
$title1 = htmlentities($res['title'] ?? "");
$image1 = htmlentities($res['image1'] ?? "");
$image1Alt = htmlentities($res['image1Alt'] ?? "");
$image1Text = htmlentities($res['image1Text'] ?? "");
$name2 = htmlentities($res1['name'] ?? "");
$title2 = htmlentities($res1['title'] ?? "");
$image2 = htmlentities($res1['image2'] ?? "");
$image2Alt = htmlentities($res1['image2Alt'] ?? "");
$image2Text = htmlentities($res1['image2Text'] ?? "");
?>

<main>
    <article>
        <?php if ($res) :
            $objectEncoded = urlencode($name1);
            $urlToObject = "objects_process.php?name=" . htmlentities($objectEncoded);
            ?>
            <div class="objekt">
                <div class="huvudrubrik">
                    <?= $title1 ?>
                    <p class="byline"><a href="<?= $urlToObject ?>">Läs mer om objektet</a>   |   <a href="gallery.php">Tillbaka till galleriet</a></p>
                </div>
                <div class="objekt-img">
                    <img src="img/orig/<?= $image1 ?>" alt="<?= $image1Alt ?>">
                    <div class="bild-text">
                        <?= $image1Text ?>
                    </div>
                </div>
            </div>
        <?php endif;?>
        <?php if ($res1) :
            $objectEncoded = urlencode($name2);
            $urlToObject = "objects_process.php?name=" . htmlentities($objectEncoded);
            ?>
            <div class="objekt">
                <div class="huvudrubrik">
                    <?= $title2 ?>
                    <p class="byline"><a href="<?= $urlToObject ?>">Läs mer om objektet</a>   |   <a href="gallery.php">Tillbaka till galleriet</a></p>
                </div>
                <div class="objekt-img">
                    <img src="img/orig/<?= $image2 ?>" alt="<?= $image2Alt ?>">
                    <div class="bild-text">
                        <?= $image2Text ?>
                    </div>
                </div>
            </div>
        <?php endif;?>
    </article>
    <a class="back-to-top" href="img.php"><img src="img/arrow-icon.png" alt="upp-pil"></a>
</main>
