var apiKey = require('./../.env').apiKey;

GithubLookup = function(){
  this.pages = [];
}

GithubLookup.prototype.getAllRepos = function(displayPageList, notFound, username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    displayPageList(response);
  }).fail(function(error){
    notFound(error.responseJSON.message);
  });
}

GithubLookup.prototype.getPageOfRepos = function(notFound, username, cacheRepos, page){
  $.get('https://api.github.com/users/' + username + '/repos?page=' + page + '&access_token=' + apiKey).then(function(response){
    cacheRepos(response, page);
  }).fail(function(error){
    notFound(error.responseJSON.message);
  });
};

exports.githubLookupModule = GithubLookup;
