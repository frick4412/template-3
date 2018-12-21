import "./main.css";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Mark from "markup-js";
import $ from "jquery";
import Navigo from "navigo";
import lscache from "lscache";
import { SSL_OP_EPHEMERAL_RSA } from "constants";

console.log("Working with webpack...");

var appInit = function() {
    let addHeader = function() {
        console.log("Loading header...");
        $("#header-div").load("./assets/html/sections/header.html");
        console.log("Loaded header.");
    }
    let addFooter = function() {
        console.log("Loading footer...");
        $("#footer-div").load("./assets/html/sections/footer.html");
        console.log("Loaded footer.");
    }
    let addMenu = function() {
        console.log("Loading menu...");
        $("#menu-div").load("./assets/html/sections/menu.html");
        console.log("Loaded menu.");
    }

    return {
        addHeader: addHeader,
        addFooter: addFooter,
        addMenu: addMenu
    };
}();

var appRoutes = function() {
    let initNavigo = function() {
        console.log("Starting Navigo...");
        var router = new Navigo('http://localhost:8080/', true, '#');
        console.log("Started Navigo.");
        return router;
    } 
    let initRoutes = function() {
        console.log("Adding routes...");
        router
            .on(function () {
                // show home page here
            });
        router
            .on('/page1', function () {
                console.log('Page 1.');
                $("#content-div").html("Page 1");
            });
        router
            .on('/page2', function () {
                console.log('Page 2.');
                $("#content-div").html("Page 2");
            });
        router
            .on('/page3', function () {
                console.log('Page 3.');
                $("#content-div").html("Page 3");
            });
        router
            .notFound(function() {
                console.log("Path not found.");
                $("#content-div").html("Route not found.");
            });
        console.log("Routes added.");
        } 
    let updateRoutes = function(router) {
        console.log("Updating route bindings...");
        router.updatePageLinks();
        console.log("Updated route bindings.");
    }

    return {
        initNavigo: initNavigo,
        initRoutes: initRoutes,
        updateRoutes: updateRoutes
    }
}();


appInit.addHeader();
appInit.addFooter();
appInit.addMenu();
var router = appRoutes.initNavigo();
appRoutes.initRoutes(router);
sleep(1).then(function() {
    appRoutes.updateRoutes(router);
});
console.log("Script complete.");


function nothinghere(something) {
    console.log("Nothing...");
    return something;
}
function sleep(ms)
{
    return(
        new Promise(function(resolve, reject)
        {
            setTimeout(function() { resolve(); }, ms);
        })
    );
}
