const express = require('express');
var mongoose = require('mongoose');
let app = express();
var bodyParser = require('body-parser')
const getRepos = require('../helpers/github.js')
const database = require('../database/index.js')

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var user = req.body.term;

  var getResults = function(data){
    data.forEach(function(element){
      database.save(element);
    })
  };

  // Get the user repo info
  getRepos.getReposByUsername(user, getResults)

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send(req.body.term)
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

