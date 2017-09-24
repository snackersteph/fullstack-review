const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// Test the mongoose connection
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// });

// Create a schema
let repoSchema = mongoose.Schema({
  username: String,
  repoName: { type: String, unique: true },
  watchers: Number
});

// Create a model from our schema
// A model is a class with which we construct documents.
let Repo = mongoose.model('Repo', repoSchema);

let save = (user) => {
  // This function should save a repo or repos to
  // the MongoDB
  var newEntry = new Repo({
    username: user.username, 
    repoName: user.repoName, 
    watchers: user.watchers
  })

  newEntry.save();

}

module.exports.save = save;





