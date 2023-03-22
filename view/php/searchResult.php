<?php

?>

    <div class="search-results">
        <div class="objekt-result">   
            <?php if ($res) : ?>
                <p class="search">Din sökning matchade <?= count($res) ?> objekt.</p>
                <?php foreach ($res as $row) :
                    $objectEncoded = urlencode($row['name']);
                    $urlToObject = "objects_process.php?name=" . htmlentities($objectEncoded);
                    $name = htmlentities($row['name'] ?? "");
                    $image1 = htmlentities($row['image1'] ?? "");
                    $image1Alt = htmlentities($row['image1Alt'] ?? "");
                    $image1Text = htmlentities($row['image1Text'] ?? "");
                    ?>
                    <h3><?= $name ?></h3>
                    <a href="<?= $urlToObject ?>"><img src="img/orig/<?= $image1 ?>" alt="<?= $image1Alt ?>"></a>
                    <p><?= $image1Text ?></p>
                <div class="line"></div>
                <?php endforeach ?>
            <?php elseif (!$res) : ?>
                <p class="search">Din sökning matchade <?= count($res) ?> objekt.</p>
            <?php endif; ?>
        </div>
        <div class="artiklar-result">  
            <?php if ($res1) : ?>
                <p class="search">Din sökning matchade <?= count($res1) ?> artiklar.</p>
                <?php foreach ($res1 as $row) :
                    $articleEncoded = urlencode($row['name']);
                    $urlToArticle = "artiklar_process.php?name=" . htmlentities($articleEncoded);
                    $name1 = htmlentities($row['name'] ?? "");
                    $author1 = htmlentities($row['author'] ?? "");?>
                    <figure>
                        <h3><a href="<?= $urlToArticle ?>"><?= $name1 ?></a></h3>
                        <p class="byline">Författare: <?= $author1 ?></p>
                    </figure>
                <div class="line"></div>
                <?php endforeach ?>
            <?php elseif (!$res1) : ?>
                <p class="search">Din sökning matchade <?= count($res1) ?> artiklar.</p>
            <?php endif; ?>
        </div>
    </div>
    <a class="back-to-top" href="search.php"><img src="img/arrow-icon.png" alt="upp-pil"></a>
    </article>
</main>
