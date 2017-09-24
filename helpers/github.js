const request = require('request');
const config = require('../config.js');


let getReposByUsername = (user, callback) => {

  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
  };

  request(options, function (error, response, body) {
    let parseBody = JSON.parse(body);
    let results = [];
    let eachRepo = parseBody.forEach(function(element){
      var object = {}
      object.username = element.owner.login,
      object.repoName = element.name,
      object.watchers = element.watchers
      results.push(object);
    });

    // Print the error if one occurred
    console.log('error:', error); 
    // Print the response status code if a response was received
    console.log('statusCode:', response && response.statusCode);
    console.log('results>>>>>>>>>>>>>>>>>>>>>>>>>>>>:',results); 
    callback(results)
  });
}

module.exports.getReposByUsername = getReposByUsername;