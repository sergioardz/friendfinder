var path = require("path");

module.exports = function(app) {
    // Route to survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    // Route to home - By using "use" and not specifying a path, the default route will be then home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};