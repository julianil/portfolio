"use strict";

const config = require("../config/db/eshop.json");
const mysql = require("promise-mysql");

let products = {
    showProducts: async function() {
        const db = await mysql.createConnection(config);
        let sql = `select * from v_products_all;`;
        let res = await db.query(sql);

        db.end();

        return res;
    },
    showCategories: async function() {
        const db = await mysql.createConnection(config);
        let sql = `SELECT * FROM product_category;`;
        let res = await db.query(sql);

        db.end();

        return res;
    },
    addProduct: async function(data) {
        const db = await mysql.createConnection(config);
        let sql = `CALL new_product(?,?,?);`;

        await db.query(sql, Object.values(data));

        db.end();
    },
    getProduct: async function(id) {
        const db = await mysql.createConnection(config);
        let sql = `SELECT * FROM product WHERE id = ?;`;

        let res = await db.query(sql, [id]);

        db.end();

        return res[0];
    },
    updateProduct: async function(data) {
        const db = await mysql.createConnection(config);
        let sql = `CALL update_product(?, ?, ?, ?);`;

        await db.query(sql, [data.p_id, data.p_name, data.p_price, data.p_description]);

        db.end();
    },
    deleteProduct: async function(id) {
        const db = await mysql.createConnection(config);
        let sql = `UPDATE product SET deleted = NOW() WHERE id = ?;`;

        await db.query(sql, [id]);

        db.end();
    },
    filterProduct: async function(searchword) {
        const db = await mysql.createConnection(config);
        let sql = `SELECT * FROM product WHERE id LIKE ? or name LIKE ? or description LIKE ?;`;

        let res = await db.query(sql, [`%${searchword}%`, `%${searchword}%`, `%${searchword}%`]);

        db.end();

        return res;
    },
};

module.exports = products;
