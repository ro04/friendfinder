// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends-data.
// ===============================================================================
var friendData = require("../data/friend");
//console.log(friendData);

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // ===============================================================================
  // API GET Requests
  // Below code handles when users "visit" a page.
  // When a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data)
  // ---------------------------------------------------------------------------
  
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // ===============================================================================
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a friend request... this data is then sent to the server...
  // Then the server saves the data to the friendData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to the survey.
      friendData.push(req.body);
      res.json(true);
  });

};


                
