var apiKey = require('./../.env').apiKey;

GithubLookup = function(){

}

GithubLookup.prototype.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubLookupModule = GithubLookup;
