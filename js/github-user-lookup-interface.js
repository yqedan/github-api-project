var GithubLookup = require('./../js/github-user-lookup.js').githubLookupModule;

function displayRepos(repos, page, username){
  $("#data").text("");
  var repoList = "";
  for (var i = 0; i < repos.length; i++) {
    repoList += "<tr>";
    repoList += "<td>" + ((page-1)*30 + (i+1)) + "</td>";
    repoList += "<td><a href='https://github.com/" + username + "/" + repos[i].name + "'>" + repos[i].name + "</a></td>";
    if (repos[i].description === null) {
      repoList += "<td>No Description </td>";
    }else{
      repoList += "<td>" + repos[i].description + "</td>";
    }
    repoList += "<td>" + moment(repos[i].created_at).format("LL") + "</td>";

    if (repos[i].language === null) {
      repoList += "<td>No Data</td>";
    }else{
      repoList += "<td>" + repos[i].language + "</td>";
    }
    repoList += "</tr>";
  }
  $("#data").append("<table class='table'>"+
                      "<tr>" +
                        "<th>#</th>" +
                        "<th>Ropository Name</th>" +
                        "<th>Description</th>" +
                        "<th>Date created</th>" +
                        "<th>Primary Language Used</th>" +
                      "</tr>" +
                      repoList +
                    "</table>");
}

function cacheRepos(repos, page){
  githublookup.pages[page-1] = repos;
}

function displayPageList(user){
  $("#page-buttons").text("");
  $("#data").hide();
  $("#page-buttons").append("<h3>User: " + user.login + "</h3>");
  $("#page-buttons").append("<img class='small' src=" + user.avatar_url + ">");
  $("#page-buttons").append("<h4>Click to see their repositories</h4>");
  var pageCount = Math.ceil(user.public_repos/30);
  for (var i = 1; i <= pageCount; i++) {
    if(i === pageCount){
      $("#page-buttons").append("<button class='btn view-page' id='view-page-" + i + "'>" + i +"-"+ user.public_repos + "</button>&nbsp;");
    }else{
      $("#page-buttons").append("<button class='btn view-page' id='view-page-" + i + "'>" + i +"-"+ (i*30) + "</button>&nbsp;");
    }
    githublookup.getPageOfRepos(notFound, user.login, cacheRepos, i);
  }
  $(".view-page").click(function() {
    $("#data").show();
    var page = $(this).attr('id')[10];
    displayRepos(githublookup.pages[page-1], page, user.login);
  });
  $("#page-buttons").show();
}

function notFound(){
  $("#page-buttons").text("");
  $("#data").hide();
  $("#page-buttons").append("<h3>User not found</h3>");
  $("#page-buttons").show();
}

var githublookup = new GithubLookup();

$(document).ready(function() {
  $("#get-user-info").submit(function(event){
    event.preventDefault();
    $("#page-buttons").text("");
    $("#data").text("");
    var username = $("#username").val();
    githublookup.getAllRepos(displayPageList, notFound, username);
  });
});
