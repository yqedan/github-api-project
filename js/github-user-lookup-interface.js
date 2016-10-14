var GithubLookup = require('./../js/github-user-lookup.js').githubLookupModule;
function displayRepos(repos){
  console.log(repos);
  var repoList = "";
  for (var i = 0; i < repos.length; i++) {
    repoList += "<li>Name: " + repos[i].name + "</li>";
    repoList += "<li>Description: " + repos[i].description + "</li>";
  }
  $("#data").append("<ul>"+ repoList + "</ul>");
}
function displayPageList(pageCount){

}
$(document).ready(function() {
  $("#get-user-info").submit(function(event){
    event.preventDefault();
    $("#data").text("");
    var username = $("#username").val();
    var githublookup = new GithubLookup();
    //githublookup.getRepos(username, displayRepos);
    githublookup.getNumberOfPagesOfRepos(username);
  });
});
