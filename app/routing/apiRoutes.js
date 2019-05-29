var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        // Create object to catch the best match
        var match = {
            name: "",
            photo: "",
            delta: 100
        };

        // Variables to retreive the form's info from survey.html and a keeper to compare deltas among friends object
        var newUser = req.body;
        var newUserScores = newUser.scores;
        var totalDelta = 0;

        // for loop to go through friends object
        for (i = 0; i < friends.length; i++) {

            totalDelta = 0;

            // Inner for loop to go through the scores array within each friend
            for (j = 0; j < friends[i].scores.length; j++) {

                totalDelta += Math.abs(parseInt(newUserScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDelta <= match.delta) {

                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.delta = totalDelta;
                }
            }
        }

        friends.push(newUser);
        res.json(match);
    })
};