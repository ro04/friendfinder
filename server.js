// ==============================================================================
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8000;

// ==============================================================================
// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// ==============================================================================
// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});