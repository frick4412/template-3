import "./main.css";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
import lscache from "lscache";
import moment from "moment";
import appRoutes from "./js/routes.js"

console.log("Working with webpack...");

export default function appInit() { }
appInit.addHeader = function() {
    console.log("Loading header...");
    $("#header-div").load("/src/html/header.html");
    console.log("Loaded header.");
}
appInit.addFooter = function() {
    console.log("Loading footer...");
    $("#footer-div").load("/src/html/footer.html");
    console.log("Loaded footer.");
}
appInit.addMenu = function() {
    console.log("Loading menu...");
    $("#menu-div").load("/src/html/menu.html");
    console.log("Loaded menu.");
}

/*
var appInit = function() {
    let addHeader = function() {
        console.log("Loading header...");
        $("#header-div").load("/src/html/header.html");
        console.log("Loaded header.");
    }
    let addFooter = function() {
        console.log("Loading footer...");
        $("#footer-div").load("/src/html/footer.html");
        console.log("Loaded footer.");
    }
    let addMenu = function() {
        console.log("Loading menu...");
        $("#menu-div").load("/src/html/menu.html");
        console.log("Loaded menu.");
    }

    return {
        addHeader: addHeader,
        addFooter: addFooter,
        addMenu: addMenu
    };
}();
*/
//----------------------------
// Add page parts
appInit.addHeader();
appInit.addFooter();
appInit.addMenu();
// Set navigo routes
var router = appRoutes.initNavigo();
appRoutes.initRoutes(router);
$(document).ready(function() {
    appRoutes.updatePageLinks(router);  // Navigo: update links
});
//----------------------------
lscache.set("jwt","abc123",60);
lscache.set("jwt_expiration",'test');
var exp = lscache.get("jwt-cacheexpiration");
$("#expiration-dd").html(moment(exp*60*1000).format("llll"));

//---------------------------
