 const EventEmitter = require("events")

 class School extends EventEmitter{

    startPeriod(){

        console.log("Start Class!")

        setTimeout(()=>{
            this.emit("bellRing",{
                period:"First ",
                text:"Period End",
            });
        },5000);

    }



 }


 module.exports=School;