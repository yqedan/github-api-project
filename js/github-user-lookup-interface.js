var GithubLookup = require('./../js/github-user-lookup.js').githubLookupModule;

function displayRepos(repos, page){
  $("#data").text("");
  var repoList = "";
  for (var i = 0; i < repos.length; i++) {
    repoList += "<tr>";
    repoList += "<td>" + ((page-1)*30 + (i+1)) + "</td>";
    repoList += "<td>" + repos[i].name + "</td>";
    if (repos[i].description === null) {
      repoList += "<td>No Description </td>";
    }else{
      repoList += "<td>" + repos[i].description + "</td>";
    }
    repoList += "</tr>";
  }
  $("#data").append("<table class='table'>"+
                    "<tr>" +
                    "<th>#</th>" +
                    "<th>Name</th>" +
                    "<th>Description</th>" +
                    "</tr>" +
                    repoList +
                    "</table>");
}

function cacheRepos(repos, page){
  pages[page-1] = repos;
}

function displayPageList(username, pageCount){
  $("#page-buttons").text("");
  $("#data").hide();
  $("#page-buttons").append("<h3>Please select a page!</h3>");
  for (var i = 1; i <= pageCount; i++) {
    $("#page-buttons").append("<button class='btn view-page' id='view-page-" + i + "'>Page " + i + "</button>&nbsp;");
    githublookup.getPageOfRepos(username, cacheRepos, i);
  }
  $(".view-page").click(function() {
    $("#data").show();
    var page = $(this).attr('id')[10];
    displayRepos(pages[page-1], page);
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
