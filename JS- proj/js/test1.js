/**
 * Module for test 1
 * @module test1
 */

import { test2Start } from './test2.js';
import { startTimer, stopTimer } from './universal.js';

const infoTest = document.getElementById('testInfo');
const content = document.getElementById('test');
const startButton = document.getElementById('startButton');
const score = document.getElementById('totalScore');
let counter = 0;
let total = 0;

/**
* @function startTest
* @description Displays information about test 1 and starts test on button click
* @listens document#click
*/
function startTest () {
    startButton.removeEventListener("click", startTest);
    document.body.id = 'test1';
    infoTest.innerHTML = `<h2>Test 1- Minne</h2>`;
    infoTest.innerHTML += `<p>Det är dags att testa ditt minne. Detta görs med hjälp av 9 bilder 
    på olika utrotningshotade djur. Bilderna kommer att visas i 5 sekunder innan de vänds bort, du ska försöka 
    memorera vart vilket djur befinner sig. Efter de 5 sekunder kommer du att få en numrerad lista med alla djuren. 
    Du ska nu i den numrerade ordningen klicka på den plats där djuret finns, lite likt ett memory. För varje 
    rätt klick får du 1 poäng. Klickar du fel är rundan avslutad. Maxpoäng för deltestet är 9.</p>`;
    startButton.innerText = 'Starta Test';
    startButton.addEventListener("click", test1);
};

/**
* @function test1Slut
* @description Triggers nextTest function on button click
* @listens document#click
*/
function test1Slut () {
    infoTest.innerHTML = `<h2>Test 1 är slutfört.</h2>`;
    score.innerHTML = `<h2>${total}</h2>`;
    infoTest.innerHTML += `<button id="nextTest">Nästa test</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", nextTest);
}

/**
* @function nextTest
* @description Sends variable ${total} to next test on button click
* @listens document#click
*/
function nextTest () {
    infoTest.innerHTML += `<button id="nextTest">Nästa test</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", test2Start(total));
}

/**
* @function gameOver1
* @description Displays all images and removes their eventlisters
*/
function gameOver1 () {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
    const image4 = document.getElementById('image4');
    const image5 = document.getElementById('image5');
    const image6 = document.getElementById('image6');
    const image7 = document.getElementById('image7');
    const image8 = document.getElementById('image8');
    const image9 = document.getElementById('image9');
    image1.src = "img/1.jpg";
    image2.src = "img/2.jpg";
    image3.src = "img/3.jpg";
    image4.src = "img/4.jpg";
    image5.src = "img/5.jpg";
    image6.src = "img/6.jpg";
    image7.src = "img/7.jpg";
    image8.src = "img/8.jpg";
    image9.src = "img/9.jpg";
    image1.removeEventListener("click", image1Click);
    image2.removeEventListener("click", image2Click);
    image3.removeEventListener("click", image3Click);
    image4.removeEventListener("click", image4Click);
    image5.removeEventListener("click", image5Click);
    image6.removeEventListener("click", image6Click);
    image7.removeEventListener("click", image7Click);
    image8.removeEventListener("click", image8Click);
    image9.removeEventListener("click", image9Click);
    test1Slut();
}

/**
* @function image1Click
* @description Checks if click on image 1 is correct or not
*/
function image1Click () {
    const image1 = document.getElementById('image1');
    image1.src = "img/1.jpg";
    counter += 1;
    if (counter === 4) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        gameOver1();
    }
};

/**
* @function image2Click
* @description Checks if click on image 2 is correct or not
*/
function image2Click () {
    const image2 = document.getElementById('image2');
    image2.src = "img/2.jpg";
    counter += 1;
    if (counter === 6) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        gameOver1();
    }
};

/**
* @function image3Click
* @description Checks if click on image 3 is correct or not
*/
function image3Click () {
    const image3 = document.getElementById('image3');
    image3.src = "img/3.jpg";
    counter += 1;
    if (counter === 2) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        gameOver1();
    }
};

/**
* @function image4Click
* @description Checks if click on image 4 is correct or not
*/
function image4Click () {
    const image4 = document.getElementById('image4');
    image4.src = "img/4.jpg";
    counter += 1;
    if (counter === 8) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        gameOver1();
    }
};

/**
* @function image5Click
* @description Checks if click on image 5 is correct or not
*/
function image5Click () {
    const image5 = document.getElementById('image5');
    image5.src = "img/5.jpg";
    counter += 1;
    if (counter === 3) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        gameOver1();
    }
};

/**
* @function image6Click
* @description Checks if click on image 6 is correct or not
*/
function image6Click () {
    const image6 = document.getElementById('image6');
    image6.src = "img/6.jpg";
    counter += 1;
    if (counter === 9) {
        total += 1;
        test1Slut();
    } else {
        gameOver1();
    }
};

/**
* @function image7Click
* @description Checks if click on image 7 is correct or not
*/
function image7Click () {
    const image7 = document.getElementById('image7');
    image7.src = "img/7.jpg";
    counter += 1;
    if (counter === 5) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        gameOver1();
    }
};

/**
* @function image8Click
* @description Checks if click on image 8 is correct or not
*/
function image8Click () {
    const image8 = document.getElementById('image8');
    image8.src = "img/8.jpg";
    counter += 1;
    if (counter === 7) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        gameOver1();
    }
};

/**
* @function image9Click
* @description Checks if click on image 9 is correct or not
*/
function image9Click () {
    const image9 = document.getElementById('image9');
    image9.src = "img/9.jpg";
    counter += 1;
    if (counter === 1) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        gameOver1();
    }
};

/**
* @function test1
* @description Displays images for 5 seconds. After 5 seconds change images and displays list if animals. Adds eventlistner to all images.
* @listens document#click
*/
function test1 () {
    const timer = 5;
    window.setTimeout(function () {
        stopTimer();
        infoTest.innerHTML += `<h3>Vart ligger bilderna?</h3>`;
        infoTest.innerHTML += `<p>1. Havsörn   2. Groda   3. Isbjörn    4. Leopard    5. Tiger    6. Gorilla    7. Elefant    8. Sköldpadda    9. Noshörning</p>`;
        score.innerHTML = `<h2>${total}</h2>`;
        const images = document.querySelectorAll('.imageTest');
        images.forEach(image => {
            image.src = "img/vit.jpg";
        });
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');
        const image3 = document.getElementById('image3');
        const image4 = document.getElementById('image4');
        const image5 = document.getElementById('image5');
        const image6 = document.getElementById('image6');
        const image7 = document.getElementById('image7');
        const image8 = document.getElementById('image8');
        const image9 = document.getElementById('image9');
        image1.addEventListener("click", image1Click);
        image2.addEventListener("click", image2Click);
        image3.addEventListener("click", image3Click);
        image4.addEventListener("click", image4Click);
        image5.addEventListener("click", image5Click);
        image6.addEventListener("click", image6Click);
        image7.addEventListener("click", image7Click);
        image8.addEventListener("click", image8Click);
        image9.addEventListener("click", image9Click);
    }, timer * 1000);
    infoTest.innerHTML = `<h2>Test 1- Minne</h2>`;
    content.innerHTML = `<img class="imageTest" id="image1" src="img/1.jpg" alt="leopard">`;
    content.innerHTML += `<img class="imageTest" id="image2" src="img/2.jpg" alt="gorilla">`;
    content.innerHTML += `<img class="imageTest" id="image3" src="img/3.jpg" alt="groda">`;
    content.innerHTML += `<img class="imageTest" id="image4" src="img/4.jpg" alt="sköldpadda">`;
    content.innerHTML += `<img class="imageTest" id="image5" src="img/5.jpg" alt="isbjörn">`;
    content.innerHTML += `<img class="imageTest" id="image6" src="img/6.jpg" alt="noshörning">`;
    content.innerHTML += `<img class="imageTest" id="image7" src="img/7.jpg" alt="tiger">`;
    content.innerHTML += `<img class="imageTest" id="image8" src="img/8.jpg" alt="elefant">`;
    content.innerHTML += `<img class="imageTest" id="image9" src="img/9.jpg" alt="havsörn">`;
    startTimer(timer);
};

export { startTest };
