/**
 * Module for test 3
 * @module test3
 */

import { test4Start } from './test4.js';

let total = 0;
let rounds = 0;
const content = document.getElementById('test');
const svarAlt = document.getElementById('svarAlt');
const infoTest = document.getElementById('testInfo');
const score = document.getElementById('totalScore');

function getRandom () {
    const y = Math.floor(Math.random() * (50 - 1)) + 1;
    return y;
}

/**
* @function test3Start
* @description Displays information about test 3 and starts test on button click.
* @param {Number} pointScored totalscore so far.
* @listens document#click
*/
function test3Start (pointScored) {
    document.body.id = 'test3';
    total = pointScored;
    infoTest.innerHTML = `<h2>Test 3- Fizz Buzz</h2>`;
    infoTest.innerHTML += `<p>Det har blivit dags att testa din huvudräkningsförmåga 
    samt din förmåga att se mönster. Detta görs genom en version av leken Fizz Buzz. 
    Fizz Buzz går ut på att man räknar siffror i följd och är en siffra delbar med 3 säger 
    man istället Fizz och är en siffra delbar med 5 säger man Buzz.<br>
    Exempelvis 7, 8, Fizz, Buzz, 11, Fizz, 13.<br>
    Du kommer att få en talföljd och ska ange om den nästkommande siffran 
    i följden ska vara Fizz, Buzz eller siffran. För varje rätt svar får du 3 poäng. Maxpoäng för deltestet är 15.</p>`;
    content.innerHTML = "";
    score.innerHTML = `<h2>${total}</h2>`;
    infoTest.innerHTML += `<button id="nextTest">Starta test</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", test3);
};

/**
* @function test3
* @description Gets random number from getRandom function and sends varibels to test3Print function.
*/
function test3 () {
    content.style.display = "flex";
    content.style.justifyContent = "space-evenly";
    content.innerHTML = "";
    const a = getRandom();
    const b = a + 1;
    const c = a + 2;
    const d = a + 3;
    const e = a + 4;
    const f = a + 5;
    test3Print(a);
    test3Print(b);
    test3Print(c);
    test3Print(d);
    test3Print(e);
    test3Answer(f);
};

/**
* @function test3
* @description Checks how to print number and prints it.
* @param {Number} y the random number.
*/
function test3Print (y) {
    if (y % 3 === 0) {
        content.innerHTML += `<h3>Fizz</h3>`;
    } else if (y % 5 === 0) {
        content.innerHTML += `<h3>Buzz</h3>`;
    } else {
        content.innerHTML += `<h3>${y}</h3>`;
    }
};

/**
* @function test3Answer
* @description Add eventlisters to all answers and checks if correct on button click.
* @param {Number} y the random number.
* @listens document#click
*/
function test3Answer (y) {
    infoTest.innerHTML = `<h2>Test 3- Fizz Buzz</h2>`;
    svarAlt.style.display = "flex";
    svarAlt.innerHTML = `<button class="test3Answers" id="number">${y}</button>`;
    svarAlt.innerHTML += `<button class="test3Answers" id="fizz">Fizz</button>`;
    svarAlt.innerHTML += `<button class="test3Answers" id="buzz">Buzz</button>`;
    const svarN = document.getElementById("number");
    const svarF = document.getElementById("fizz");
    const svarB = document.getElementById("buzz");
    if (y % 3 === 0) {
        svarN.addEventListener("click", wrongAnswer);
        svarB.addEventListener("click", wrongAnswer);
        svarF.addEventListener("click", correctAnswer);
    } else if (y % 5 === 0) {
        svarN.addEventListener("click", wrongAnswer);
        svarF.addEventListener("click", wrongAnswer);
        svarB.addEventListener("click", correctAnswer);
    } else {
        svarF.addEventListener("click", wrongAnswer);
        svarB.addEventListener("click", wrongAnswer);
        svarN.addEventListener("click", correctAnswer);
    }
};

/**
* @function wrongAnswer
* @description Displays next question on button click or triggers test3Finished on button click.
* @listens document#click
*/
function wrongAnswer () {
    rounds += 1;
    score.innerHTML = `<h2>${total}</h2>`;
    svarAlt.style.display = "block";
    svarAlt.innerHTML = `<h3>Ajdå! Det var tyävrr fel svar.</h3>`;
    if (rounds === 5) {
        svarAlt.innerHTML += `<button id="nextTest">Avsluta test</button>`;
        const nextQ = document.getElementById("nextTest");
        nextQ.addEventListener("click", test3Finished);
    } else {
        svarAlt.innerHTML += `<button id="nextTest">Nästa fråga</button>`;
        const nextQ = document.getElementById("nextTest");
        nextQ.addEventListener("click", test3);
    }
};

/**
* @function correctAnswer
* @description Displays next question on button click or triggers test3Finished on button click.
* @listens document#click
*/
function correctAnswer () {
    rounds += 1;
    total += 3;
    score.innerHTML = `<h2>${total}</h2>`;
    svarAlt.style.display = "block";
    svarAlt.innerHTML = `<h3>Bra jobbat! Det var rätt svar</h3>`;
    if (rounds === 5) {
        svarAlt.innerHTML += `<button id="nextTest">Avsluta test</button>`;
        const nextQ = document.getElementById("nextTest");
        nextQ.addEventListener("click", test3Finished);
    } else {
        svarAlt.innerHTML += `<button id="nextTest">Nästa fråga</button>`;
        const nextQ = document.getElementById("nextTest");
        nextQ.addEventListener("click", test3);
    }
};

/**
* @function test3Finished
* @description Triggers nextTest on button click.
* @listens document#click
*/
function test3Finished () {
    infoTest.innerHTML = `<h2>Test 3 är slutfört.</h2>`;
    score.innerHTML = `<h2>${total}</h2>`;
    content.innerHTML = "";
    svarAlt.innerHTML = "";
    infoTest.innerHTML += `<button id="nextTest">Nästa test</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", nextTest);
};

/**
* @function nextTest
* @description Sends variable ${total} to next test on button click
* @listens document#click
*/
function nextTest () {
    infoTest.innerHTML += `<button id="nextTest">Nästa test</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", test4Start(total));
}

export { test3Start };
