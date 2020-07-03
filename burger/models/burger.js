
const db = require("../config/connection.js");   // load burger model
const Sequelize = require("sequelize");

// create burgers model
const burgers = db.define("burgers", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

// update database with sync
burgers.sync();   

// export burgers model
module.exports = burgers;

