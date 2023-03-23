"use strict";

const config = require("../config/db/exam.json");
const mysql = require("promise-mysql");

let terminal = {
    showCustomers: async function() {
        const db = await mysql.createConnection(config);
        let sql = `select * FROM v_customers;`;
        let res = await db.query(sql);

        db.end();

        return res;
    },
    showPowerplants: async function() {
        const db = await mysql.createConnection(config);
        let sql = `SELECT
        id,
        name,
        location,
        source,
        output,
        utilization_rate,
        launch,
        closed,
        type
        FROM v_powerplants;`;
        let res = await db.query(sql);

        db.end();

        return res;
    },
    filterPowerplants: async function(searchword) {
        const db = await mysql.createConnection(config);
        let sql = `SELECT 
        id,
        name,
        location,
        source,
        output,
        utilization_rate,
        launch,
        closed,
        type
        FROM v_powerplants 
        WHERE id LIKE ? or name LIKE ? or location LIKE ? or source LIKE ?;`;
        let res = await db.query(sql,
            [`%${searchword}%`, `%${searchword}%`, `%${searchword}%`, `%${searchword}%`]);

        db.end();

        return res;
    },
    filterCustomers: async function(searchword) {
        const db = await mysql.createConnection(config);
        let sql = `SELECT * FROM v_customers
        WHERE id LIKE ? or name LIKE ? or state LIKE ? or powersource LIKE ?;`;
        let res = await db.query(sql,
            [`%${searchword}%`, `%${searchword}%`, `%${searchword}%`, `%${searchword}%`]);

        db.end();

        return res;
    },
    showReport: async function() {
        const db = await mysql.createConnection(config);
        let sql = `SELECT * FROM v_rapport;`;
        let res = await db.query(sql);

        db.end();

        return res;
    },
};

module.exports = terminal;
