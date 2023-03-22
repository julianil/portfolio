"use strict";

const config = require("../config/db/eshop.json");
const mysql = require("promise-mysql");

let log = {
    showLog: async function(number) {
        const db = await mysql.createConnection(config);
        let sql = `CALL show_logs(?);`;
        let res = await db.query(sql, [number]);

        db.end();

        return res[0];
    }
};

module.exports = log;
