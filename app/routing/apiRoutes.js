//Dating app api routes

var allQuestions = require("../content/questions.js");
var allUsers = require("../data/friends.js");

console.log(allQuestions);

function routes(app){
    app.get("/api/questions", function(req, res){
        res.json(allQuestions);
    })

    app.get("/api/allUsers", function(req, res){
        res.json(allUsers);
    })

    app.post("/api/allUsers", function(req, res){
        allUsers.push(req.body);
    })
}

module.exports = routes;