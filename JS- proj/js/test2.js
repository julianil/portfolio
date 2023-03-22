/**
 * Module for test 2
 * @module test2
 */

import { test3Start } from './test3.js';

let total = 0;
const infoTest = document.getElementById('testInfo');
const content = document.getElementById('test');
const score = document.getElementById('totalScore');
const svarAlt = document.getElementById('svarAlt');
const questions = ["Vad gäller vid eldningsförbud?", "Får du gå över någons privata tomt?", "Får du slänga skräp i naturen?", "Får du cykla mountainbike i skogen?", "Får man plocka vilda orkidéer?"];

/**
* @function test2Start
* @description Displays information about test 2 and starts test on button click.
* @param {Number} pointScored totalscore so far.
* @listens document#click
*/
function test2Start (pointScored) {
    document.body.id = 'test2';
    total = pointScored;
    infoTest.innerHTML = `<h2>Test 2- Frågesport</h2>`;
    infoTest.innerHTML += `<p>Vi kommer nu att testa din kunskap inom området allemansrätten genom en frågesport. 
    Du kommer få en fråga i taget och till varje fråga finns 3 svarsalternativ. Testet går inte 
    på tid utan görs i eget tempo. För varje rätt svar får du 3 poäng. Maxpoäng för deltestet är 15.</p>`;
    content.innerHTML = "";
    score.innerHTML = `<h2>${total}</h2>`;
    infoTest.innerHTML += `<button id="nextTest">Starta test</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", test2);
};

/**
* @function test2Answer
* @description Add eventlisters to all answers and checks if correct on button click.
* @listens document#click
*/
function test2Answer (y) {
    const svar1 = document.getElementById(`svar${y}1`);
    const svarX = document.getElementById(`svar${y}X`);
    const svar2 = document.getElementById(`svar${y}2`);
    if (y === 1 || y === 3) {
        svar1.addEventListener("click", wrongAnswer);
        svarX.addEventListener("click", wrongAnswer);
        svar2.addEventListener("click", correctAnswer);
    } else if (y === 2 || y === 5) {
        svar1.addEventListener("click", wrongAnswer);
        svarX.addEventListener("click", correctAnswer);
        svar2.addEventListener("click", wrongAnswer);
    } else if (y === 4) {
        svar1.addEventListener("click", correctAnswer);
        svarX.addEventListener("click", wrongAnswer);
        svar2.addEventListener("click", wrongAnswer);
    }
};

/**
* @function test2
* @description Displays questions and answers. Triggers nextTest function on button click
* @listens document#click
*/
function test2 () {
    infoTest.innerHTML = `<h2>Test 2- Frågesport</h2>`;
    svarAlt.style.display = "flex";
    const question = questions[Math.floor(Math.random() * questions.length)];
    if (questions === undefined || questions.length === 0) {
        questions.push("Vad gäller vid eldningsförbud?", "Får du gå över någons privata tomt?", "Får du slänga skräp i naturen?", "Får du cykla mountainbike i skogen?", "Får man plocka vilda orkidéer?");
        infoTest.innerHTML = `<h2>Test 2 är slutfört.</h2>`;
        score.innerHTML = `<h2>${total}</h2>`;
        sessionStorage.setItem("userScore", total);
        console.log(total);
        content.innerHTML = "";
        svarAlt.innerHTML = "";
        infoTest.innerHTML += `<button id="nextTest">Nästa test</button>`;
        const nextTestBtn = document.getElementById("nextTest");
        nextTestBtn.addEventListener("click", nextTest);
    } else {
        content.innerHTML = `<h3>${question}</h3>`;
        const index = questions.indexOf(`${question}`);
        questions.splice(index, 1);
    }
    if (question === "Vad gäller vid eldningsförbud?") {
        svarAlt.innerHTML = `<p id="svar11">1. Jag får bara elda om jag behöver värma min mat.</p>`;
        svarAlt.innerHTML += `<p id="svar1X">X. Jag får bara elda under dagtid.</p>`;
        svarAlt.innerHTML += `<p id="svar12">2. Generellt gäller att all öppen eld är förbjuden.</p>`;
        test2Answer(1);
    } else if (question === "Får du gå över någons privata tomt?") {
        svarAlt.innerHTML = `<p id="svar21">1. Ja, om jag är försiktig och inte stör.</p>`;
        svarAlt.innerHTML += `<p id="svar2X">X. Nej, det är inte tillåtet.</p>`;
        svarAlt.innerHTML += `<p id="svar22">2. Ja, om jag inte syns från huset.</p>`;
        test2Answer(2);
    } else if (question === "Får du slänga skräp i naturen?") {
        svarAlt.innerHTML = `<p id="svar31">1. Ja, om det inte finns någon soptunna i närheten.</p>`;
        svarAlt.innerHTML += `<p id="svar3X">X. Ja, om skräpet inte är av plast eller metall.</p>`;
        svarAlt.innerHTML += `<p id="svar32">2. Nej, det är aldrig tillåtet att slänga skräp i naturen.</p>`;
        test2Answer(3);
    } else if (question === "Får du cykla mountainbike i skogen?") {
        svarAlt.innerHTML = `<p id="svar41">1. Ja, om jag cyklar så jag inte skadar marken och ger företräde till fotgängare.</p>`;
        svarAlt.innerHTML += `<p id="svar4X">X. Ja, men bara på särskilt anvisade platser.</p>`;
        svarAlt.innerHTML += `<p id="svar42">2. Nej, det förstör underlaget för mycket.</p>`;
        test2Answer(4);
    } else if (question === "Får man plocka vilda orkidéer?") {
        svarAlt.innerHTML = `<p id="svar51">1. Nej, eftersom det är giftiga.</p>`;
        svarAlt.innerHTML += `<p id="svar5X">X. Nej, eftersom de är fridlysta i hela landet.</p>`;
        svarAlt.innerHTML += `<p id="svar52">2. Ja, men bara max tio stycken.</p>`;
        test2Answer(5);
    }
};

/**
* @function wrongAnswer
* @description Displays next question on button click.
* @listens document#click
*/
function wrongAnswer () {
    score.innerHTML = `<h2>${total}</h2>`;
    svarAlt.style.display = "block";
    svarAlt.innerHTML = `<h3>Ajdå! Det var tyävrr fel svar.</h3>`;
    svarAlt.innerHTML += `<button id="nextTest">Nästa fråga</button>`;
    const nextQ = document.getElementById("nextTest");
    nextQ.addEventListener("click", test2);
};

/**
* @function correctAnswer
* @description Adds to score and displays next question on button click.
* @listens document#click
*/
function correctAnswer () {
    total += 3;
    score.innerHTML = `<h2>${total}</h2>`;
    svarAlt.style.display = "block";
    svarAlt.innerHTML = `<h3>Bra jobbat! Det var rätt svar</h3>`;
    svarAlt.innerHTML += `<button id="nextTest">Nästa fråga</button>`;
    const nextQ = document.getElementById("nextTest");
    nextQ.addEventListener("click", test2);
};

/**
* @function nextTest
* @description Sends variable ${total} to next test on button click
* @listens document#click
*/
function nextTest () {
    infoTest.innerHTML += `<button id="nextTest">Nästa test</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", test3Start(total));
}

export { test2Start };
