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


