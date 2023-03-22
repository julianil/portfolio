/**
 * Module for test 4
 * @module test4
 */

import { gameFinished } from './finish.js';
import { drawShapes, startTimer, stopTimer } from './universal.js';

let total = 0;
let counter = 0;
const content = document.getElementById('test');
const infoTest = document.getElementById('testInfo');
const svarAlt = document.getElementById('svarAlt');
const score = document.getElementById('totalScore');

/**
* @function test4Start
* @description Displays information about test 4 and starts test on button click.
* @param {Number} pointScored totalscore so far.
* @listens document#click
*/
function test4Start (pointScored) {
    document.body.id = 'test4';
    total = pointScored;
    infoTest.innerHTML = `<h2>Test 4- Visuell förmåga och läsförståelse</h2>`;
    infoTest.innerHTML += `<p>I detta sista test ska vi kolla din visuella förmåga i kombination med läsförståelse. 
    Du kommer att se 10 former i olika färger, trianglar, cirklar och fyrkanter. Du kommer även att få en numrerad 
    lista där det står angivet i vilken ordning du ska klicka på formerna. Det finns endast en av varje form och färgkombination. 
    Du har 15 sekunder på dig och för varje rätt klick får du 1 poäng. Klickar du fel för du dock -1 poäng. Maxpoäng för deltestet är 10.</p>`;
    content.innerHTML = "";
    svarAlt.style.display = "flex";
    svarAlt.style.flexWrap = "wrap";
    score.innerHTML = `<h2>${total}</h2>`;
    infoTest.innerHTML += `<button id="nextTest">Starta test</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", test4);
};

/**
* @function test4
* @description Displays shapes and triggers test4Check when shapes is clickec. Triggers nextTest function on button click
* @listens document#click
*/
function test4 () {
    const timer = 15;
    window.setTimeout(function () {
        stopTimer();
        infoTest.innerHTML = `<h2>Test 4 är slutfört.</h2>`;
        score.innerHTML = `<h2>${total}</h2>`;
        content.innerHTML = "";
        svarAlt.innerHTML = "";
        infoTest.innerHTML += `<button id="nextTest">Nästa test</button>`;
        const nextTestBtn = document.getElementById("nextTest");
        nextTestBtn.addEventListener("click", nextTest);
    }, timer * 1000);
    infoTest.innerHTML = `<h2>Test 4- Visuell förmåga och läsförståelse</h2>`;
    content.innerHTML = `<p>1. Den blå cirkeln.   2. Den blå triangeln.   3. Den gula cirkeln.    4. Den gröna fyrkanten.    5. Den röda cirkeln.    6. Den gröna triangeln.    7. Den gula fyrkanten.    8. Den röda fyrkanten.    9. Den gröna cirkeln.    10. Den gula triangeln.</p>`;
    drawShapes();
    const shape1 = document.getElementById('shape1');
    shape1.addEventListener("click", test4Check1);
    const shape2 = document.getElementById('shape2');
    shape2.addEventListener("click", test4Check2);
    const shape3 = document.getElementById('shape3');
    shape3.addEventListener("click", test4Check3);
    const shape4 = document.getElementById('shape4');
    shape4.addEventListener("click", test4Check4);
    const shape5 = document.getElementById('shape5');
    shape5.addEventListener("click", test4Check5);
    const shape6 = document.getElementById('shape6');
    shape6.addEventListener("click", test4Check6);
    const shape7 = document.getElementById('shape7');
    shape7.addEventListener("click", test4Check7);
    const shape8 = document.getElementById('shape8');
    shape8.addEventListener("click", test4Check8);
    const shape9 = document.getElementById('shape9');
    shape9.addEventListener("click", test4Check9);
    const shape10 = document.getElementById('shape10');
    shape10.addEventListener("click", test4Check10);
    startTimer(timer);
};

/**
* @function test4Check1
* @description Checks if click on shape 1 is correct or not
*/
function test4Check1 () {
    counter += 1;
    if (counter === 5) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function test4Check2
* @description Checks if click on shape 2 is correct or not
*/
function test4Check2 () {
    counter += 1;
    if (counter === 3) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function test4Check3
* @description Checks if click on shape 3 is correct or not
*/
function test4Check3 () {
    counter += 1;
    if (counter === 1) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function test4Check4
* @description Checks if click on shape 4 is correct or not
*/
function test4Check4 () {
    counter += 1;
    if (counter === 9) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function test4Check5
* @description Checks if click on shape 5 is correct or not
*/
function test4Check5 () {
    counter += 1;
    if (counter === 4) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function test4Check6
* @description Checks if click on shape 6 is correct or not
*/
function test4Check6 () {
    counter += 1;
    if (counter === 7) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function test4Check7
* @description Checks if click on shape 7 is correct or not
*/
function test4Check7 () {
    counter += 1;
    if (counter === 8) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function test4Check8
* @description Checks if click on shape 8 is correct or not
*/
function test4Check8 () {
    counter += 1;
    if (counter === 2) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function test4Check9
* @description Checks if click on shape 9 is correct or not
*/
function test4Check9 () {
    counter += 1;
    if (counter === 6) {
        total += 1;
        score.innerHTML = `<h2>${total}</h2>`;
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function test4Check10
* @description Checks if click on shape 10 is correct or not
*/
function test4Check10 () {
    counter += 1;
    if (counter === 10) {
        total += 1;
        infoTest.innerHTML = `<h2>Test 4 är slutfört.</h2>`;
        score.innerHTML = `<h2>${total}</h2>`;
        content.innerHTML = "";
        svarAlt.innerHTML = "";
        infoTest.innerHTML += `<button id="nextTest">Se resultat</button>`;
        const nextTestBtn = document.getElementById("nextTest");
        nextTestBtn.addEventListener("click", nextTest);
    } else {
        total = total - 1;
        score.innerHTML = `<h2>${total}</h2>`;
    }
};

/**
* @function nextTest
* @description Sends variable ${total} to next test on button click
* @listens document#click
*/
function nextTest () {
    infoTest.innerHTML += `<button id="nextTest">Se resultat</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", gameFinished(total));
}

export { test4Start };
