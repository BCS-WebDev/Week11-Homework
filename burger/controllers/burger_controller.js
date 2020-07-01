
// get burger orm
const burger = require("../models/burger.js");

// Routes
module.exports = function(app) {
    app.get("/", function(req, res) {
        const burgers = await burger.getAll();
        const burgersListed = [];
        const burgersDevoured = [];
        for (const item in burgers) {
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
    
    app.post("/:newBurger", function(req, res) {
        const newBurger = req.params.newBurger;
        await burger.add(newBurger);

        res.redirect(`/`);
    });
        
    app.put("/:burgerId", function(req, res) {
        const burgerId = req.params.burgerId;
        await burger.update(burgerId);
        
        res.redirect(`/`);
    });
};



