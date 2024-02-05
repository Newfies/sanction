/* OnLoad Event */
document.addEventListener("DOMContentLoaded", (event) => {
    /* Run setTab */
    setTab();
});

/* Define Variables */
var titleInput = document.getElementById('settitle');
var faviconInput = document.getElementById('setfavicon');
var autoInput = document.getElementById("toggleautoblank");

// var title = document.title;
var favicon = document.getElementById("favicon");

var g0 = document.getElementById("g0");
var g1 = document.getElementById("g1");
var g2 = document.getElementById("g2");
var g3 = document.getElementById("g3");
var g4 = document.getElementById("g4");
var g5 = document.getElementById("g5");
var g6 = document.getElementById("g6");
var g7 = document.getElementById("g7");
var g8 = document.getElementById("g8");
var g9 = document.getElementById("g9");

const path = window.location;

/* setTab */
function setTab() {
    if (localStorage.getItem("Title") == null || localStorage.getItem("Title") == undefined || localStorage.getItem("Title") == "/r") {
        localStorage.removeItem("Title");
    } else {
        document.title = localStorage.getItem("Title");
    }

    if (localStorage.getItem("Favicon") == null || localStorage.getItem("Favicon") == undefined || localStorage.getItem("Favicon") == "/r") {
        localStorage.removeItem("Favicon")
    } else {
        favicon.setAttribute("href", localStorage.getItem("Favicon"));
    }
};

/* Settings.html */
if (path == "/sanction/settings.html" || path == "file:///home/chronos/u-febd1ef60583f020a9b9f0e2761c8664438839f5/MyFiles/sanction/settings.html") {
    titleInput.addEventListener("input", function () {
        localStorage.setItem("Title", titleInput.value);
        setTab();
    });

    faviconInput.addEventListener("input", function () {
        localStorage.setItem("Favicon", faviconInput.value);
        setTab();
    });

    autoInput.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        alert("Hey, this is currently on the list of being developed. Check back soon.")
    });

    autoInput.addEventListener("click", function (event) {
        if (autoInput.value == "Off") {
            autoInput.value = "On"
            autoInput.textContent = "On"
            localStorage.setItem("autoblank", "on")
        } else {
            autoInput.value = "Off"
            autoInput.textContent = "Off"
            localStorage.setItem("autoblank", "off")
        }
    });
}

if (path == "/sanction/g.html" || path == "file:///home/chronos/u-febd1ef60583f020a9b9f0e2761c8664438839f5/MyFiles/sanction/g.html") {
    g0.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });

    g1.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });

    g2.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });

    g3.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });

    g4.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });

    g5.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });

    g6.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });

    g7.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });

    g8.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });

    g9.addEventListener("click", function () {
        alert("I'm Still Working On This, G's Will Be Worked On Soon, Sorry!");
    });
}