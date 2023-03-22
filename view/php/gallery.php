<?php

?>

<main>
    <article>
        <div class="huvudrubrik">
            <h2>Bildgalleri</h2>
            <p>Här finner du alla bilder som tillhör objekten i Nättraby Vägmusuem. Swep igenom galleriet och klicka på valfri bild för mer information</p>
        </div>
        <div class="galleri">
        <?php foreach ($res as $row) :
            $image1 = htmlentities($row['image1'] ?? "");
            $image1Alt = htmlentities($row['image1Alt'] ?? "");
            $image2 = htmlentities($row['image2'] ?? "");
            $image2Alt = htmlentities($row['image2Alt'] ?? "");
            ?>
            <?php if ($image1 != "" && $image1Alt != "") :
                $imageEncoded = urlencode($row['image1']);
                $urlToImage = "img_process.php?name=" . htmlentities($imageEncoded);?>
                <div class="galleri-box">
                    <a href="<?= $urlToImage ?>"><img src="img/orig/<?= $image1 ?>" alt="<?= $image1Alt ?>"></a>
                </div>
            <?php endif;?>
            <?php if ($image2 != "" && $image2Alt != "") :
                $imageEncoded = urlencode($row['image2']);
                $urlToImage = "img_process.php?name=" . htmlentities($imageEncoded);?>
                <div class="galleri-box">
                    <a href="<?= $urlToImage ?>"><img src="img/orig/<?= $image2 ?>" alt="<?= $image2Alt ?>"></a>
                </div>
            <?php endif;?>
        <?php endforeach ?>
        </div>
    </article>
    <a class="back-to-top" href="gallery.php"><img src="img/arrow-icon.png" alt="upp-pil"></a>
</main>

