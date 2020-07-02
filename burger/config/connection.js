
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

// Exporting our connection
module.exports = source;
