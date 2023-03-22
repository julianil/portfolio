"use strict";

const config = require("../config/db/eshop.json");
const mysql = require("promise-mysql");

let inv = {
    showShelf: async function() {
        const db = await mysql.createConnection(config);
        let sql = `SELECT * FROM storage;`;
        let res = await db.query(sql);

        db.end();

        return res;
    },
    allInv: async function() {
        const db = await mysql.createConnection(config);
        let sql = `SELECT * FROM storage_shelf;`;
        let res = await db.query(sql);

        db.end();

        return res;
    },
    filterInv: async function(search) {
        const db = await mysql.createConnection(config);
        let sql = `SELECT * FROM storage_shelf
        WHERE shelf_name LIKE ? or product_id LIKE ? or product_name LIKE ?;`;
        let res = await db.query(sql, [`%${search}%`, `%${search}%`, `%${search}%`]);

        db.end();

        return res;
    },
    addInv: async function(shelfname, productid, quantity) {
        const db = await mysql.createConnection(config);
        let sql = `CALL add_storage(?,?,?);`;

        await db.query(sql, [`${shelfname}`, `${productid}`, `${quantity}`, `${quantity}`]);

        db.end();
    },
    deleteInv: async function(shelfname, productid, quantity) {
        const db = await mysql.createConnection(config);
        let sql = `CALL del_storage(?,?,?);`;

        await db.query(sql, [`${shelfname}`, `${productid}`, `${quantity}`, `${quantity}`]);

        db.end();
    }
};

module.exports = inv;
