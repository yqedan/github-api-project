var apiKey = require('./../.env').apiKey;

GithubLookup = function(){
  this.numberOfpagesOfRepos = 0;
}

GithubLookup.prototype.getNumberOfPagesOfRepos = function(username){
  var that = this;
  $.get('https://api.github.com/users/' + username + '?&access_token=' + apiKey).then(function(response){
    console.log(response);//.public_repos)
  }).fail(function(error){
    displayRepos(error.responseJSON.message);
  });
}

GithubLookup.prototype.getRepos = function(username, displayRepos){

  $.get('https://api.github.com/users/' + username + '/repos?per_page=100&access_token=' + apiKey).then(function(response){
    displayRepos(response);
  }).fail(function(error){
    displayRepos(error.responseJSON.message);
  });
};

exports.githubLookupModule = GithubLookup;
