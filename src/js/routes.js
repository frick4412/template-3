import $ from "jquery";
import Navigo from "navigo";

import login from "./login";
import page1 from "./page1";


export default function appRoutes() { }

appRoutes.initNavigo = function() {
    console.log("Starting Navigo...");
    var router = new Navigo('http://localhost:8080/', true, '#');
    console.log("Started Navigo.");
    return router;
}

appRoutes.initRoutes = function(router) {
    console.log("Adding routes...");
    router.on(function () {
        // show home page here
    });
    router.on('/login', function () {
        console.log('Login page.');
        login.init();
    });
    router.on('/page1', function () {
        console.log('Page 1.');
        page1.init();
    });
    router.on('/page2', function () {
        console.log('Page 2.');
        $("#content-div").html("Page 2");
    });
    router.on('/page3', function () {
        console.log('Page 3.');
        $("#content-div").html("Page 3");
    });
    router.notFound(function() {
        console.log("Path not found.");
        $("#content-div").html("Route not found.");
    });
    console.log("Routes added.");
}

appRoutes.updatePageLinks = function(router) {
    console.log("Updating route bindings...");
    router.updatePageLinks();
    console.log("Updated route bindings.");
}

