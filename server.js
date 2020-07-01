
var express = require("express");  // load express module
var exphbs = require("express-handlebars");  // load express handlebars

// server setup
var app = express();
var PORT = process.env.PORT || 8080;

// setup to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars engine properties
const handlebars = exphbs.create({
    extname      :'hbs',
    layoutsDir   : './burger/views',
    defaultLayout: 'main'
});

// handlebars
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// routes
require("./burger/controllers/burger-controller.js")(app);

// begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
