var apiKey = require('./../.env').apiKey;

GithubLookup = function(){
  this.numberOfpagesOfRepos = 0;
}

GithubLookup.prototype.getAllRepos = function(displayPageList, username){
  var that = this;
  $.get('https://api.github.com/users/' + username + '?&access_token=' + apiKey).then(function(response){
    displayPageList(username, Math.ceil(response.public_repos/30));
  }).fail(function(error){
    displayPageList(username, error.responseJSON.message);
  });
}

GithubLookup.prototype.getPageOfRepos = function(username, cacheRepos, page){

  $.get('https://api.github.com/users/' + username + '/repos?page=' + page + '&access_token=' + apiKey).then(function(response){
    cacheRepos(response, page);
  }).fail(function(error){
    cacheRepos(error.responseJSON.message, page);
  });
};

exports.githubLookupModule = GithubLookup;
