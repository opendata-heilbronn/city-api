const carParks = require("./car-parks.json");
const moment = require("moment");

function checkIsOpen(request) {
    const fromTime = moment(request.fromTime);
    const parkEnd = moment(request.fromTime).add(request.duration, "minutes");
    const dow = fromTime.format("ddd");
    const duration = request.duration;

    //console.log('data JSON ', carParks);
    console.log('request', request);

    const carPark = carParks.find(function(element) { 
        
        return element.id == request.carPark  && element.open[0].days.indexOf(dow) != -1 && moment().hour(element.open.times.from) <= fromTime
        console.log('elemt', element);
        console.log('request.carParks', request.carPark);
        console.log('element.id ', element.id );
        
        
        const openTime = moment().hour(element.open.times.from)
        const endTime = moment().hour(element.open.times.to)

        console.log('start end', openTime, endTime);
        

        // Tag && Uhr Zeit Prüfen
        
        //return element.id == request.carParks && element.open.days.indexOf(dow) != -1 && openTime <= fromTime && endTime >= parkEnd;
        //return element.id == request.carParks && element.days.indexOf(dow) != -1 && element.times.from >= fromTime && element.times.to < parkEnd        
    });

    const open = carPark.open.find(function(element){
        console.log('times');
        
    });
    console.log('data', data );
    
    return data 
}

module.exports = {checkIsOpen};