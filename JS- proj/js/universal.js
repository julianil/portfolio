/**
 * Module for universal functions
 * @module universal
 */

let myInterval;

/**
* @function drawShapes
* @description Adds 10 diffrents shapes to id.
*/
function drawShapes () {
    const content = document.getElementById('svarAlt');
    const shape3 = document.createElement("div");
    shape3.classList.add("shapes");
    shape3.id = "shape3";
    shape3.classList.add("cirkel");
    shape3.style.background = "blue";
    content.appendChild(shape3);
    const shape2 = document.createElement("div");
    shape2.classList.add("shapes");
    shape2.id = "shape2";
    shape2.classList.add("cirkel");
    shape2.style.background = "yellow";
    content.appendChild(shape2);
    const shape4 = document.createElement("div");
    shape4.classList.add("shapes");
    shape4.id = "shape4";
    shape4.classList.add("cirkel");
    shape4.style.background = "green";
    content.appendChild(shape4);
    const shape8 = document.createElement("div");
    shape8.classList.add("shapes");
    shape8.id = "shape8";
    shape8.classList.add("triangel");
    shape8.style.borderBottom = "150px solid blue";
    content.appendChild(shape8);
    const shape10 = document.createElement("div");
    shape10.classList.add("shapes");
    shape10.id = "shape10";
    shape10.classList.add("triangel");
    shape10.style.borderBottom = "150px solid yellow";
    content.appendChild(shape10);
    const shape5 = document.createElement("div");
    shape5.classList.add("shapes");
    shape5.id = "shape5";
    shape5.style.background = "green";
    content.appendChild(shape5);
    const shape7 = document.createElement("div");
    shape7.classList.add("shapes");
    shape7.id = "shape7";
    shape7.style.background = "red";
    content.appendChild(shape7);
    const shape9 = document.createElement("div");
    shape9.classList.add("shapes");
    shape9.id = "shape9";
    shape9.classList.add("triangel");
    shape9.style.borderBottom = "150px solid green";
    content.appendChild(shape9);
    const shape1 = document.createElement("div");
    shape1.classList.add("shapes");
    shape1.id = "shape1";
    shape1.classList.add("cirkel");
    shape1.style.background = "red";
    content.appendChild(shape1);
    const shape6 = document.createElement("div");
    shape6.classList.add("shapes");
    shape6.id = "shape6";
    shape6.style.background = "yellow";
    content.appendChild(shape6);
};

/**
* @function startTimer
* @description Counts down from given time.
* @param {Number} timer is the lenght of the test in seconds.
*/
function startTimer (timer) {
    let current = timer;
    myInterval = setInterval(function () {
        current--;
        document.getElementById('totalTime').innerHTML = `<h3>${current}</h3>`;
    }, 1000);
    document.getElementById('totalTime').innerHTML = `<h3>${current}</h3>`;
};

/**
* @function stopTimer
* @description Stops timer and clears it when finished.
*/
function stopTimer () {
    window.clearInterval(myInterval);
    document.getElementById('totalTime').innerHTML = `<h3>0</h3>`;
};

export { drawShapes, startTimer, stopTimer };
