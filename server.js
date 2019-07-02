var express = require('express')
var app = express();
var PORT = process.env.PORT || 3000;


// Enable data-parsing methods for Express
app.use(express.static('app'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Link API and HTML routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Initiate server
app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT)
})