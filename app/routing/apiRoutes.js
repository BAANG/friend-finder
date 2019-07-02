var path = require('path');

var friends = require('../data/friends.js')

module.exports = function (app) {
    app.get("/api/friends", function (req, res) { // Prints friends table array as JSON object upon GET request
        console.log(req.method + " completed");
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) { // Pushes POST request into friends table
        console.log(req.method + " completed");
        friends.push(req.body);
        res.json(true);
    })
}