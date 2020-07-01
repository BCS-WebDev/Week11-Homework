
var model = require("../config/connection.js");

const burger = {
    get: async function(column, table) {
        try {
            const specific = await model.findOne({
                where: {
                    routeName: req.params.characters
                }
            });
        } catch (err) {
            if (err) throw err;
        }
    },
    // get 
    add: async function() {
        try {
            // Then send it to the ORM to "save" into the DB.
            await model.create({
                routeName: routeName,
                name: character.name,
                role: character.role,
                age: character.age,
                forcePoints: character.forcePoints
            });
        } catch (err) {
            if (err) throw err;
        }
    }
}

// Makes the Chirp Model available for other files (will also create a table)
module.exports = burger;

