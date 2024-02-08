/* OnLoad Event */
document.addEventListener("DOMContentLoaded", (event) => {
    /* Run setTab */
    setTab();
});

/* Define Variables */
var titleInput = document.getElementById('settitle');
var faviconInput = document.getElementById('setfavicon');
var autoInput = document.getElementById("toggleautoblank");

var favicon = document.getElementById("favicon");
var ss = document.getElementById("searchsubmit");
var si = document.getElementById("searchinput");

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
const filename = window.location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

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

/* Index.html */
if (filename == "index.html" && localStorage.getItem("autoblank") == "On") {
    alert("You have AutoBlank enabled, I plan to make this function soon!");
}

/* Settings.html */
if (filename == "settings.html") {
    titleInput.addEventListener("input", function () {
        localStorage.setItem("Title", titleInput.value);
        setTab();
    });

    faviconInput.addEventListener("input", function () {
        localStorage.setItem("Favicon", faviconInput.value);
        setTab();
    });

    if (localStorage.getItem("autoblank")) {
        autoInput.value = localStorage.getItem("autoblank");
        autoInput.textContent = localStorage.getItem("autoblank");
    } else {
        autoInput.value = "Off";
        autoInput.textContent = "Off";
    }

    autoInput.addEventListener("click", function (event) {
        if (autoInput.value == "Off") {
            autoInput.value = "On"
            autoInput.textContent = "On"
            localStorage.setItem("autoblank", "On")
        } else {
            autoInput.value = "Off"
            autoInput.textContent = "Off"
            localStorage.setItem("autoblank", "Off")
        }
    });
}

/* g.html */
if (filename == "g.html") {
    g0.addEventListener("click", function () {
        window.location.assign("loadadobe.html?load=unfair")
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

/* p.html */
if (filename == "p.html") {
    ss.addEventListener("click", function () {
        input = si.value;
        alert("progress: stored user input, " + input + " will be doing more with this soon.");
    });
}

/*  loadadobe.html */
if (filename == "loadadobe.html") {
    const loadValue = new URLSearchParams(window.location.search).get('load');
    if (loadValue === null || loadValue === undefined || loadValue === "") {
        alert('You have nothing set to be loaded, redirecting you to the homepage...');
        window.location.assign("index.html")
    } else {
        x.setAttribute("src", "res/adobe/" + loadValue + ".swf");
    }
}
