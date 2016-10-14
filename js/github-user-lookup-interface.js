var GithubLookup = require('./../js/github-user-lookup.js').githubLookupModule;

function displayRepos(repos){
  $("#data").text("");
  var repoList = "";
  for (var i = 0; i < repos.length; i++) {
    repoList += "<li>Name: " + repos[i].name + "</li>";
    repoList += "<li>Description: " + repos[i].description + "</li>";
  }
  $("#data").append("<ul>"+ repoList + "</ul>");
}

function cacheRepos(repos, page){
  pages[page-1] = repos;
}

function displayPageList(username, pageCount){
  $("#page-buttons").text("");
  $("#page-buttons").append("<h3>Please select a page!</h3>");
  for (var i = 1; i <= pageCount; i++) {
    $("#page-buttons").append(
      "<button class='btn view-page' id='view-page-" + i + "'>Page " + i + "</button>&nbsp;"
    );
    githublookup.getPageOfRepos(username, cacheRepos, i);
  }
  $(".view-page").click(function() {
    $("#data").show();
    var page = $(this).attr('id')[10];
    displayRepos(pages[page-1]);
  });
  $("#page-buttons").show();
}

var githublookup = new GithubLookup();
var pages = [];

$(document).ready(function() {
  $("#get-user-info").submit(function(event){
    event.preventDefault();
    $("#page-buttons").text("");
    $("#data").text("");
    var username = $("#username").val();
    githublookup.getAllRepos(displayPageList, username);
  });
});
