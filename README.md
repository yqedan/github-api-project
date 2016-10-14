# _Github API project_

#### _October, 14th, 2016_

#### By _**Yusuf Qedan**_

## Description

_This page is uses github API to look up a list of a users repositories_

## Setup/Installation Requirements
#### Inital Setup:
* NodeJS needs to be installed https://nodejs.org/
* Gulp needs to be installed via npm: $ npm install gulp -g
* Github Personal access token needed for this site to work as it uses the github API.
* Clone this repository
* Run this command in the top level directry $ touch .env
* Open .env and paste this single line of code below
 * exports.apiKey = "YOUR PERSONAL ACCESS TOKEN";
* Replace YOUR PERSONAL ACCESS TOKEN with the access token acquired from github and save the file

#### Run the following commands to get all dependencies for this project:
* $ npm install
* $ bower install

#### Run the following command to run the server and view the site:
* $ gulp serve

## Specifications
* Behavior:
  * **Example input:** yqedan
  * **Example output:**
   * Repository Name: calculator
   * Description: calculator app using js
   * Date created: August 23, 2016
   * Primary Language Used: JavaScript
* Behavior:
 * **Example input:** yqedan
 * **Example output:** user image is displayed
* Behavior:
 * **Example input:** calculator repo is clicked
 * **Example output:** user is directed to github page for calculator repo

## Known Bugs
_None_
## Support and contact details
_Any issues email me at yusuf9191@gmail.com_
## Technologies Used
_JavaScript, Node.js, gulp, bower, HTML, CSS, SASS, Moment.js_
### License
*This software is licensed under the MIT license*

Copyright (c) 2016 **_Yusuf Qedan_**
