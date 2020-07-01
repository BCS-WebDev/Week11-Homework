
// get burger orm
var burger = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function(app) {

    
    app.get("/dog", function(req, res) {
    // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
    
    // 1. Send the dog object from the animals array to the dog.handlebars file.
        res.render("dog", animals[0]);
    });
    
    app.get("/all-pets", function(req, res) {
    // Handlebars requires an object to be sent to the index.handlebars file.
    
    // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
        res.render("index", {
            animals: animals
        });
    });
        

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
    //   orm.searchCharacter(req.params.characters, function(data) {
    //     res.json(data);
    //   });
       
        res.send(specific);
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
        const users = await allCharacters.findAll();
        res.send(users);
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var character = req.body;
    var routeName = character.name.replace(/\s+/g, "").toLowerCase();

  });
};



