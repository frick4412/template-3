import $ from "jquery";
import Mark from "markup-js";

export default function page1() { }

page1.init = function() {
    console.log("page1.init...");
    var data = page1.loadData();
    $("#content-div").load("/src/html/page1.html", function() {
        let template = $("#section-a-template").html();
        $("#section-a").html(Mark.up(template, page1.dataSectionA));
        $("#section-a").load("src/html/section-a.html");
    });
    // section-a
    data.dataApromise.then(function(value) {
        console.log("dataApromise value", value);
    }).catch(function(reason) {
        console.log("dataApromise reason", reason);
    });
    // section-b
    data.dataApromise.then(function(value) {
        console.log("dataBpromise value", value);
    }).catch(function(reason) {
        console.log("dataApromise reason", reason);
    });
    // section-c
    data.dataApromise.then(function(value) {
        console.log("dataCpromise value", value);
    }).catch(function(reason) {
        console.log("dataApromise reason", reason);
    });
};

page1.loadData = function() {
    var dataApromise = new Promise(function(resolve,reject) {
        $.ajax({
            type: "get",
            url: "http://localhost:3000/books",
            dataType: "json"
        }).then(function(response) {
            resolve(response);
        }).fail(function(xhrObj) {
            console.log("Failed dataApromise ajax call!");  
            reject(xhrObj);
        });
    });
    var dataBpromise = new Promise(function(resolve,reject) {
        $.ajax({
            type: "get",
            url: "http://localhost:3000/users",
            dataType: "json"
        }).then(function(response) {
            resolve(response);
        }).fail(function(xhrObj) {
            console.log("Failed dataBpromise ajax call!");  
            reject(xhrObj);
        });
    });
    var dataCpromise = new Promise(function(resolve,reject) {
        $.ajax({
            type: "get",
            url: "http://localhost:3000/users",
            dataType: "json"
        }).then(function(response) {
            resolve(response);
        }).fail(function(xhrObj) {
            console.log("Failed dataCpromise ajax call!");  
            reject(xhrObj);
        });
    });
    return {dataApromise, dataBpromise, dataCpromise};
}

/*
page1.dataSectionA = {
    family: [ 
      {name: "Steven"},
      {name: "Rhonda"},
      {name: "Kathleen"},
      {name: "Elisabeth"}
    ]
};
*/

page1.sectionA = function() {
    
}

page1.sectionB = function() {
    
}

page1.sectionC = function() {
    
}

page1.extra = function() {
    console.log("extra here");
};


