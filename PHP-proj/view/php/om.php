<?php

?>

<main>
    <article>
        <div class="huvudrubrik">
            <h2>Om oss</h2>
        </div>
        <div class="column-layout">
            <div class="info-company">
                <?= html_entity_decode($res1['data']) ?>
                <h2><?= htmlentities($res['title']) ?></h2>
                <?= html_entity_decode($res['data']) ?>
            </div>
            <div class="info-me">
                <img src="img/me.jpg" alt="Bild på mig">
                <p>Vad roligt att du har hittat hit, till Nättraby Vägmuseums egna hemsida!<br>
                Mitt namn är Julia Nilsson och det är jag som har byggt den här hemsidan. Jag är en nyexaminerad Grafisk Designer som tycker att webbprogrammering och kod 
                är lite extra roligt. Därför läser jag diverse kurser inom ämnet på Blekinge Tekniska Högskola.<br>
                Den här webbplatsen har jag byggt som ett slutprojekt i min första kurs relaterad till PHP, Webbteknologier. Hoppas att din vistelse på sidan är trevlig och att 
                du får med dig massa spännande fakta och historia om Nättraby Vägmuseum.<br>
                Ha det fint!</p>
                <br>
                <a href="doc.php">Mer om processen här</a>
            </div>
        </div>
    </article>
    <a class="back-to-top" href="om.php"><img src="img/arrow-icon.png" alt="upp-pil"></a>
</main>
