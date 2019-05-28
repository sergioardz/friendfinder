// Questions
// Which of these qualities describe you well: Introvert (1) or Extrovert (5)?
// 
// 
// 
// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({extended: false });

app.use(bodyParser.json({type: "application/*+json" }));

app.use(bodyParser.raw({type: "application/vnd.custom-type" }));

app.use(bodyParser.text({type: "text/html" }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Server listener
app.listen(PORT, function() {
    console.log("The magic is on Port: " + PORT);
})
