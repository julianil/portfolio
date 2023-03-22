"use strict";

const express = require("express");
const products = require("./../src/products.js");
const router = express.Router();

router.get("/eshop/index", (req, res) => {
    let data = {};

    data.titel = "Start";
    res.render("eshop/index.ejs", data);
});

router.get("/eshop/product", async (req, res) => {
    let data = {};

    data.titel = "All produkter";
    data.all = await products.showProducts();
    res.render("eshop/product.ejs", data);
});

router.get("/eshop/category", async (req, res) => {
    let data = {};

    data.titel = "Kategorier";
    data.all = await products.showCategories();
    res.render("eshop/category.ejs", data);
});

router.get("/eshop/about", (req, res) => {
    let data = {};

    data.titel = "Om oss";
    res.render("eshop/about.ejs", data);
});

router.get("/create", async (req, res) => {
    let data = {};

    data.titel = "Ny produkt";
    res.render("eshop/create.ejs", data);
});

router.post("/create", async (req, res) => {
    await products.addProduct(req.body);
    res.redirect("eshop/product");
});

router.get("/update/:id", async (req, res) => {
    let data = {};

    data.titel = "Uppdatera produkt";
    data.one = await products.getProduct(req.params.id);
    res.render("eshop/update.ejs", data);
});

router.post("/update", async (req, res) => {
    await products.updateProduct(req.body);
    res.redirect("eshop/product");
});

router.get("/delete/:id", async (req, res) => {
    let data = {};

    data.titel = "Delete";
    data.one = await products.getProduct(req.params.id);
    res.render("eshop/delete.ejs", data);
});

router.post("/delete", async (req, res) => {
    await products.deleteProduct(req.body.p_id);
    res.redirect("eshop/product");
});

router.get("/eshop/search", async (req, res) => {
    let data = {};

    data.titel = "Sok efter produkt";
    if (req.query.searchword) {
        data.filtered = await products.filterProduct(req.query.searchword);
    }
    res.render("eshop/search.ejs", data);
});

module.exports = router;
