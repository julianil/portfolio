"use strict";

const inv = require("./src/inv.js");
const log = require("./src/log.js");
const products = require("./src/products.js");
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
        Choose soemthing from the menu:

        exit                                   Exit program
        menu                                   Show this menu
        about                                  Show group members
        log <number>                           Show particular number of rows in log
        product                                Show all products and their id
        shelf                                  Show all shelfs in stock
        inv                                    Show all products in stock
        inv <str>                              Show filtered products in stock
        invadd <productid> <shelf> <number>    Add product to shelf
        invdel <productid> <shelf> <number>    Delete product from shelf
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
            case "about": {
                console.log("Julia- juni22");
                break;
            }
            case "log": {
                let filteredLog = await log.showLog(parts[1]);

                console.table(filteredLog);
                break;
            }
            case "product": {
                let allProducts = await products.showProducts();

                console.table(allProducts);
                break;
            }
            case "shelf": {
                let allShelfs = await inv.showShelf();

                console.table(allShelfs);
                break;
            }
            case "inv": {
                if (typeof parts[1] === 'undefined') {
                    let allInv = await inv.allInv();

                    console.table(allInv);
                } else {
                    let filterInv = await inv.filterInv(parts[1]);

                    console.table(filterInv);
                }
                break;
            }
            case "invadd": {
                await inv.addInv(parts[2], parts[1], parts[3]);

                break;
            }
            case "invdel": {
                await inv.deleteInv(parts[2], parts[1], parts[3]);

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
