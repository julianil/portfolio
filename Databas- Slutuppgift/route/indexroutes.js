"use strict";

const express = require("express");
const webb = require("../src/webb.js");
const router = express.Router();

router.get("/exam/index", (req, res) => {
    let data = {};

    data.titel = "Start";
    res.render("exam/index.ejs", data);
});

router.get("/exam/visa", async (req, res) => {
    let data = {};

    data.titel = "Visa allt";
    data.powerplants = await webb.showPowerplants();
    data.customers = await webb.showCustomers();
    res.render("exam/visa.ejs", data);
});

router.get("/exam/search", async (req, res) => {
    let data = {};

    data.titel = "Search";
    if (req.query.searchword) {
        data.filteredP = await webb.filterPowerplants(req.query.searchword);
        data.filteredC = await webb.filterCustomers(req.query.searchword);
    }
    res.render("exam/search.ejs", data);
});

module.exports = router;
