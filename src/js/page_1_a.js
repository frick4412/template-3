import $ from "jquery";
import Mark from "markup-js";

export default function page_1_a() { }

page_1_a.init = function() {
    console.log("Page-1-A...");
    var dataPage1A = page_1_a.loadData();
    $("#section-a").load("/src/html/page_1_a.html", function() {
        console.info("data-2", dataPage1A);
        let template = $("#section-a-template").html();
        $("#section-a").html(Mark.up(template, dataPage1A));
        //$("#section-a").html(Mark.up(template, page1.dataSectionA));
    });
}

page_1_a.loadData = function() {
    console.log("page_1_a...loadData()...");
    return {family: [
        {firstname:"Steven", lastname:"Crombie",bday:"9-14-1969",member:true},
        {firstname:"Rhonda", lastname:"Crombie",bday:"10-18-1970",member:false},
        {firstname:"Kathleen", lastname:"Crombie",bday:"3-29-2000",member:false},
        {firstname:"Elisabeth", lastname:"Crombie",bday:"7-22-2002",member:false}
    ]};
}
/*
var sectionA = (function() {
  
    const publicSectionAdata = [
        {firstname:"Steven", lastname:"Crombie",bday:"9-14-1969",member:true},
        {firstname:"Rhonda", lastname:"Crombie",bday:"10-18-1970",member:false},
        {firstname:"Kathleen", lastname:"Crombie",bday:"3-29-2000",member:false},
        {firstname:"Elisabeth", lastname:"Crombie",bday:"7-22-2002",member:false}
    ];
    
    function publicLogData() {
      console.log(publicSectionAdata);
    }

    return {
        sectionAdata: publicSectionAdata,
        logData: publicLogData
    };
})();
*/

