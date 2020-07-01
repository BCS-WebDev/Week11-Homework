
const Sequelize = require("sequelize");  // load sequelize module

// Setting up our connection information
const source = new Sequelize("burgers_db", "root", "!Kc88107", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Creates a "Chirp" model that matches up with DB
const burgers = source.define("burgers", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

// Syncs with DB
burgers.sync();

// Exporting our connection
module.exports = burgers;
