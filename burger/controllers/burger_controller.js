
const burgers = require("../models/burger.js");  // load burgers model

// Routes
module.exports = function(app) {
    app.get("/", function(req, res) {
        await burgers.findAll().then(function(data) {
            const burgersListed = [];
            const burgersDevoured = [];
            for (const item in data) {
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
        await burgers.create({
            burger_name: req.params.newBurger,
            devoured: false
        }).then(function() {
            res.redirect(`/`);
        });        
    });
        
    app.put("/:burgerId", function(req, res) {
        await burgers.update({ devoured: true }, {
            where: {
                id: req.params.burgerId,
            }
        }).then(function() {
            res.redirect(`/`);
        });
    });
};



