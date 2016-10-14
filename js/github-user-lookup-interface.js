var GithubLookup = require('./../js/github-user-lookup.js').githubLookupModule;
function displayRepos(repos){
  console.log(repos);
  $("#data").text("");
  var repoList = "";
  for (var i = 0; i < repos.length; i++) {
    repoList += "<li>Name: " + repos[i].name + "</li>";
    repoList += "<li>Description: " + repos[i].description + "</li>";
  }
  $("#data").append("<ul>"+ repoList + "</ul>");
}
function displayPageList(username, pageCount){
for (var i = 1; i <= pageCount; i++) {
    $("#page-buttons").append(
      "<button class='btn view-page' id='view-page-" + i + "'>Page " + i + "</button>&nbsp;"
    );
    $(".view-page").click(function() {
      var page = $(this).attr('id')[10];
      githublookup.getRepos(username, displayRepos, page);
    });
}
}
var githublookup = new GithubLookup();
$(document).ready(function() {
  $("#get-user-info").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    //githublookup.getRepos(username, displayRepos);
    githublookup.getNumberOfPagesOfRepos(displayPageList, username);
  });
});
