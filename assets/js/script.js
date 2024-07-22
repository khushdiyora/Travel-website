// Create head element
var head = document.createElement("head");

// Create link element for stylesheet
var stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "total.css";
head.appendChild(stylesheet);

// Create title element
var title = document.createElement("title");
title.textContent = "Trips";
head.appendChild(title);

// Create div element with class "Z1"
var divZ1 = document.createElement("div");
divZ1.className = "Z1";

// Create table element
var table = document.createElement("table");

// Create table row and cell elements for the logo and navigation
var row = document.createElement("tr");

var logoCell = document.createElement("td");
var logoImg = document.createElement("img");
logoImg.src = "fe808722bd82ed2f9d93c10a43e38023-removebg-preview.png";
logoImg.id = "h2";
logoCell.appendChild(logoImg);

var navCell = document.createElement("td");
navCell.id = "h1";

// Create navigation links
var homeLink = document.createElement("a");
homeLink.href = "tim.html";
homeLink.textContent = "Home";
navCell.appendChild(homeLink);

var destinationsLink = document.createElement("a");
destinationsLink.href = "destination.html";
destinationsLink.textContent = "Destinations";
navCell.appendChild(destinationsLink);

var tripsLink = document.createElement("a");
tripsLink.href = "#";
tripsLink.textContent = "Trips";
navCell.appendChild(tripsLink);

var contactUsLink = document.createElement("a");
contactUsLink.href = "contact us (1).html";
contactUsLink.textContent = "Contact Us";
navCell.appendChild(contactUsLink);

var aboutUsLink = document.createElement("a");
aboutUsLink.href = "about.html";
aboutUsLink.textContent = "About Us";
navCell.appendChild(aboutUsLink);

var feedbackLink = document.createElement("a");
feedbackLink.href = "feedback.html";
feedbackLink.textContent = "Feedback";
navCell.appendChild(feedbackLink);

row.appendChild(logoCell);
row.appendChild(navCell);

table.appendChild(row);
divZ1.appendChild(table);

// Append head and divZ1 to the document body
document.body.appendChild(head);
document.body.appendChild(divZ1);

// Create body element
var body = document.createElement("body");

// Create heading elements
var tripsHeading = document.createElement("b");
tripsHeading.className = "I14";
tripsHeading.innerHTML = "<center>Trips</center>";

var hr1 = document.createElement("hr");
hr1.size = "4";
hr1.noshade
