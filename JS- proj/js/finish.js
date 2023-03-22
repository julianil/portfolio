/**
 * Module for finished test
 * @module finish
 */

const infoTest = document.getElementById('testInfo');
let total = 0;

/**
* @function gameFinished
* @description Displays users result. Restarts test on button click.
* @param {Number} pointScored total points scored by user.
* @listens document#click
*/
function gameFinished (pointScored) {
    total = pointScored;
    let level = "";
    const procent = total / 49 * 100;
    const procentRounded = Math.round(procent);
    if (procentRounded < 50) {
        level = "Låg";
    } else if (procentRounded > 75) {
        level = "Hög";
    } else {
        level = "medel";
    };
    infoTest.innerHTML = `<h2>Intelligenstestet är slutfört</h2>`;
    infoTest.innerHTML += `<p>Bra jobbat du har slutfört intelligenstestet!<br>
    Du samlade ihop ${total} av 49 poäng.<br>
    Detta motsvara ${procentRounded}% och intelligensnivån ${level}.</p>`;
    infoTest.innerHTML += `<button id="nextTest">Gör om test</button>`;
    const nextTestBtn = document.getElementById("nextTest");
    nextTestBtn.addEventListener("click", restartTest);
};

/**
* @function restartTest
* @description Restarts test.
*/
function restartTest () {
    location.reload();
};

export { gameFinished };
