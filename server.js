
const express = require("express");  // load express module
const exphbs = require("express-handlebars");  // load express handlebars
const path = require("path");     // load path module

// server setup
const app = express();
const PORT = process.env.PORT || 8080;

// setup to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static( __dirname + '/burger/public'));

// handlebars
app.engine("handlebars",
    exphbs({
        defaultLayout: "main",
        helpers: {
            inc: function(value) {
              return parseInt(value) + 1;
            }
        }
    })
);
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, "burger/views"));

// routes
require("./burger/controllers/burger_controller.js")(app);

// begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
