
const model = require("../config/connection.js");   // load burger model

const burger = {
    getAll: async function() {
        try {
            return await model.findAll();
        } catch (err) {
            if (err) throw err;
        }
    },
    add: async function(burgerName) {
        try {
            await model.create({
                burger_name: burgerName,
                devoured: false
            });
        } catch (err) {
            if (err) throw err;
        }
    },
    update: async function(burgerId) {
        try {
            await model.update({ devoured: true }, {
                where: {
                    id: burgerId,
                }
            });
        } catch (err) {
            if (err) throw err;
        }
    }
}

// Makes the Chirp Model available for other files (will also create a table)
module.exports = burger;

