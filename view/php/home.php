<?php

$image = htmlentities($res['image1'] ?? "");
$imageAlt = htmlentities($res['image1Alt'] ?? "");
$imageText = htmlentities($res['image1Text'] ?? "");
$image1 = htmlentities($res1['image1'] ?? "");
$image1Alt = htmlentities($res1['image1Alt'] ?? "");
$image2 = htmlentities($res2['image1'] ?? "");
$image2Alt = htmlentities($res2['image1Alt'] ?? "");
?>

<main>
    <article>
        <div class="huvudrubrik">
            <h2>Nättraby vägmuseum</h2>
            <p>I skärningen mellan landsväg och vattenled uppstod ofta samhällen. 
            Nättraby är ett exempel på det. Här finns en unik koncentration av gamla 
            och nya landsvägar, järnvägar och segelbara Nättrabyån.</p>
            <p>Museet består av 14 befintliga vägmiljöer i Nättraby socken. Från 1000-åriga stigen 
            och 1600-talets stenmurskantade Via Regia till 1900-talets gatstensbilagda riksväg 
            och E22 motorväg. Därtill kommer järnvägar, cykelvägen, vattenvägen Nättrabyån, 
            isvägen, milstolpar, namnminnet Ryttarliden och tvåvalviga stenbron.</p>
            <p>Nättraby Hembygdsförening tillsammans med intressenter har därför skapat Nättraby 
            Vägmuseum – världens första friluftsmuseum för vägarnas historia på land, räls, vatten och is.</p>
        </div>
        <figure class="hem-img">
            <img src="img/orig/<?= $image ?>" alt="<?= $imageAlt ?>">
            <figcaption class="bild-text"><?= $imageText ?></figcaption>
        </figure>
        <div class="home-container">
            <h2>Mera läsning</h2>
            <div class="two-column-layout">
                <div class="banner">
                    <a href="objects.php"><img src="img/orig/<?= $image2 ?>" alt="<?= $image2Alt ?>"></a>
                    <h3 class="text-on-img">Objekt</h3>
                </div>
                <div class="banner">
                    <a href="artiklar.php"><img src="img/orig/<?= $image1 ?>" alt="<?= $image1Alt ?>"></a>
                    <h3 class="text-on-img">Artiklar</h3>
                </div>
            </div>
        </div>
    </article>
    <a class="back-to-top" href="home.php"><img src="img/arrow-icon.png" alt="upp-pil"></a>
</main>
