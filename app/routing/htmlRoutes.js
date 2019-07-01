var path = require('path');

module.exports = function (app) {

    app.get("/", function (req, res) { // Root directory to link to 'home.html'
        console.log(req.method + " request completed.")
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/survey", function (req, res) { // Path to 'survey.html'
        console.log(req.method + " request completed.")
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

}
