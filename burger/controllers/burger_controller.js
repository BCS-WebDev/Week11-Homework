
const db = require("../models");  // load db models

// Routes
module.exports = function(app) {
    app.get("/", function(req, res) {      // get route
        db.Burgers.findAll({     // find all and return id, name, devoured
            attributes: [ 'id', 'burger_name', 'devoured']  
        }).then(function(data) {
            const burgersListed = [];     // listed burgers array
            const burgersDevoured = [];     // devoured burgers array

            for (const item of data) {    // for each item of response
                if (item.devoured === false) {   // if not devoured
                    burgersListed.push({   // push object
                        id: item.id,
                        burger_name: item.burger_name
                    });
                } else {             // if devoured
                    burgersDevoured.push({   // if devoured
                        burger_name: item.burger_name
                    });
                }
            }
            
            res.render("index", {    // render index file in views with burger arrays
                burgersListed: burgersListed,
                burgersDevoured: burgersDevoured
            });
        });
    });
    
    app.post("/:newBurger", function(req, res) {  // post route
        db.Burgers.create({    // add new burger with new burger parameter and devoured = false
            burger_name: req.params.newBurger,
            devoured: false
        }).then(function(data) {     
            res.send("Burger Added.");   // return something to trigger then function for page reload
        });        
    });
        
    app.put("/:burgerId", function(req, res) {   // update route
        db.Burgers.update({ devoured: true }, {      // update burger devoured to true
            where: {
                id: req.params.burgerId,        // based on id parameter
            }
        }).then(function(data) {
            res.send("Burger updated.");    // return something to trigger then function for page reload
        });
    });
};



