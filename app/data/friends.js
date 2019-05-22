var testUsers = require("./testUsers.js");

var allUsers = [];

testUsers.forEach(function(thisUser){
    allUsers.push(thisUser);
})

module.exports = allUsers;