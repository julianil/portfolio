"use strict";

const terminal = require("./src/terminal.js");
const readline = require("readline-promise").default;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function exitProgram(code=0) {
    console.log(`Program exits with status: ${code}`);
    process.exit(code);
}

function showMenu() {
    console.log(`
        Choose something from the menu:

        exit                Exit program
        menu                Show this menu
        visa                Show all customers/powerplants
        search <str>        Show filtered customers/powerplants
        report              Show report
    `);
}

(async function() {
    rl.setPrompt("Enter input: ");
    rl.prompt();

    rl.on("line", async (input) => {
        input = input.trim();
        let parts = input.split(" ");

        switch (parts[0]) {
            case "exit": {
                exitProgram();
                break;
            }
            case "menu": {
                showMenu();
                break;
            }
            case "visa": {
                let allCustomers = await terminal.showCustomers();
                let allPowerplants = await terminal.showPowerplants();

                console.table(allCustomers);
                console.table(allPowerplants);
                break;
            }
            case "search": {
                let filteredP = await terminal.filterPowerplants(parts[1]);
                let filteredC = await terminal.filterCustomers(parts[1]);

                console.table(filteredP);
                console.table(filteredC);
                break;
            }
            case "report": {
                let report = await terminal.showReport();

                console.table(report);
                break;
            }
            default: {
                showMenu();
                break;
            }
        }

        rl.prompt();
    });

    rl.on("close", exitProgram);
})();
