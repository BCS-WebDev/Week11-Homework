// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
// var mysql = require("mysql");
var Sequelize = require("sequelize");

// Setting up our connection information
var source = new Sequelize("starwars", "root", "!Kc88107", {
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
var allCharacters = sequelize.define("allCharacters", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
});

// Syncs with DB
allCharacters.sync();



// Exporting our connection
module.exports = allCharacters;
