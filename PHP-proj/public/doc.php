<?php

include('../config/config.php');

$titel = 'Dokumentation skapande av NVM hemsida';

include('../view/header.php');
?>

<main>
    <article>
        <div class="huvudrubrik">
            <h2>Projekt dokumentation</h2>
        </div>
        <p class="doc-text"> Jag valde att utgå ifrån min report-sida när jag la planen för strukturen på webbplatsen. Så jag började med att skapa 5 huvudmappar: config, db,
        public, src och view. I config mappen placerade jag in min config-fil som jag även har inkluderat i alla mina andra filer. I denna inkluderade jag även
        den filen jag döpt till functions, som ligger i min src-mapp. Functions består som namnet antyder av de funktioner som skapats och som används på ett antal ställen
        i min webbplats, för att minska mängden kod. I min src-mapp ligger även databas filen där jag kopplar upp mig mot databasen, denna är required i alla filer där jag hämtar
        information från databasen. I db-mappen ligger projektets sqlite fil, alltså databasen därifrån jag hämtar all text och alla bilder. Public-mappen består av en css-mapp, där jag
        valt att istället för att ha en css-fil ha flera olika som alla fokuserar på lite olika områden av webbplatsen. Det finns bland annat en för headern, en för objekt-sidorna och en för om-sidan.
        Detta valde jag att göra då jag tycker att det är lättare att hitta i flera olika filer än om allt hade legat i en jättelång fil. Img-mappen finns också i public. Här ligger alla bilder som
        används på hemsidan, i diverse olika storlekar. Både bilder från databasen men också de bilder jag själv valt att addera. Slutligen består public-mappen även av ett antal filer där jag på olika sätt kopplar mig mot databasen.
        Det finns exempelvis en för att plocka information till sidan där alla objekt är synliga, sedan en processingsida där information sparas i sessionen om vilket objekt användaren vill läsa mer om, som slutligen
        kopplar vidare till en sida där all information om det valda objektet hämtas. Samma uppbyggd är det för artiklarna. Till om och hem-sidan ville jag ha mer specifik information så dessa har ingen processing sida utan endast en sida var
        där den önskade informationen hämtas. I public mappen finns även en sida för sessionen och en sida för att förstöra sessionen. I den sista mappen som är view finns en header och footer som är inkluderade i alla sidor på webbplatsen. Det finns
        även en php-mapp här, i denna ligger det filer som beskriver hur den hämtade information ska presenteras för användaren. Exempelvis hur jag vill att alla objektbilder och deras information
        ska placeras på sidan osv. Dessa är alltså de "vanliga" HTML filerna.</p>
        <p class="doc-text">Överlag tänkte jag främst att jag ville att koden skulle var överskådlig för både mig och andra personer. Därför försökte jag placera ut saker i olika filer och döpa dessa på ett tydligt sätt. Jag har även försökt att
        kommentera min kod, framför allt php och css delarna, för att det ska var tydligt vad som händer. Jag ville försöka undvika att projektet skulle kännas överväldiga för mig själv, vilket var en stor anledning till att jag strukturerade det som jag gjorde.</p>
        <p class="doc-text">Överlag tycker jag att min sida fungerar väldigt bra i sin responsivitet. Det som jag har kollat minst på är teckenstorleken, att kontrollera så denna är rimlig på olika enheter. Men jag har ändå kollat igenom projektet på olika ställen och upplever att jag fått till en bra responsivitet.<br>
        Det jag har gjort är att jag har skapat en headerbild som jag upplever skalar sig på ett snyggt sätt mellan olika enheter, även om den visar olika mycket på en dator jämfört med en telefon, så tycker jag att den lösning blev snygg. Jag har även jobbat lite med storleken på texten i headern och navbaren,
        för att göra dessa delar så bra som möjligt på olika enheter. På objekt-sidan jobbade jag med flexbox, för att göra ett snygg galleri som skalade sig på ett bra sätt. Det sutade men en layout som jag anser gör sig bra på mobilen och datorn. Slutligen jobbade jag på om- och hem-sidan med två kolumner
        av layout som på en mobilenhet fick blir en kolumn istället, vilket jag tyckte blev snyggt. Här fick jag jobba lite med att ta bort och lägga till padding samt centrera bilderna på sidan i de små storlekarna.</p>
        <p class="doc-text">För att vidareutveckla hemsidan tror jag att man främst hade behövt lite bättre bilder och lite mer grafiska element. Jag tycker att med den datan som fanns så är den nuvarande webbsidan väldigt bra och tydlig. Det jag främst saker är kanske lite mer saker på hem-sidan, för att göra denna mer attraktiv.
        Kanske hade detta kunnat göras genom lite illustrationer, mer text eller ett härligt bildspel. Överlag hade det varit roligt att få möjlighet att göra sidan lite mer levande med olika hjälpmedel.</p>
    </article>
    <a class="back-to-top" href="doc.php"><img src="img/arrow-icon.png" alt="upp-pil"></a>
</main>

<?php include('../view/footer.php'); ?>
