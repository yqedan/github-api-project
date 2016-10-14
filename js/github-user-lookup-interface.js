var GithubLookup = require('./../js/github-user-lookup.js').githubLookupModule;

$(document).ready(function() {
  $("#get-user-info").submit(function(event){
    event.preventDefault();
    var githublookup = new GithubLookup();
    githublookup.getRepos();
  });
});
