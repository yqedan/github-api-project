var apiKey = require('./../.env').apiKey;

GithubLookup = function(){
  this.numberOfpagesOfRepos = 0;
}

GithubLookup.prototype.getNumberOfPagesOfRepos = function(displayPageList, username){
  var that = this;
  $.get('https://api.github.com/users/' + username + '?&access_token=' + apiKey).then(function(response){
    displayPageList(username, Math.ceil(response.public_repos/30));
  }).fail(function(error){
    displayRepos(error.responseJSON.message);
  });
}

GithubLookup.prototype.getRepos = function(username, displayRepos, page){

  $.get('https://api.github.com/users/' + username + '/repos?page=' + page + '&access_token=' + apiKey).then(function(response){
    displayRepos(response);
  }).fail(function(error){
    displayRepos(error.responseJSON.message);
  });
};

exports.githubLookupModule = GithubLookup;
