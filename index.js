 
const School  = require("./school")

 const school = new School();

 
 school.on("bellRing",({period, text})=>{
    console.log(`Time is Up! ${period} ${text}`);
});

school.startPeriod();

 

 

 

 
 