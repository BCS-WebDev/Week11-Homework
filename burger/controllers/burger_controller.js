
const burgers = require("../models/burger.js");  // load burgers model

// Routes
module.exports = function(app) {
    app.get("/", function(req, res) {
        burgers.findAll({
            attributes: [ 'id', 'burger_name', 'devoured']
        }).then(function(data) {
            const burgersListed = [];
            const burgersDevoured = [];

            for (const item of data) {
                if (item.devoured === false) {
                    burgersListed.push({
                        id: item.id,
                        burger_name: item.burger_name
                    });
                } else {
                    burgersDevoured.push({
                        burger_name: item.burger_name
                    });
                }
            }

            res.render("index", {
                burgersListed: burgersListed,
                burgersDevoured: burgersDevoured
            });
        });
    });
    
    app.post("/:newBurger", function(req, res) {
        burgers.create({
            burger_name: req.params.newBurger,
            devoured: false
        }).then(function(data) {
            res.send("Burger Added.");
        });        
    });
        
    app.put("/:burgerId", function(req, res) {
        burgers.update({ devoured: true }, {
            where: {
                id: req.params.burgerId,
            }
        }).then(function(data) {
            res.send("Burger updated.");
        });
    });
};



