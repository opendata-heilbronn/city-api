const carParks = require("./car-parks.json");
const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

function checkIsOpen(request) {
    const fromTime = moment(request.fromTime);
    const parkEnd = moment(request.fromTime).add(request.duration, "minutes");
    const dow = fromTime.format("ddd");
    const duration = request.duration;

    const context = {
        open: false
    };

    //console.log('data JSON ', carParks);
    console.log('request', request);

    const data = carParks.find(function(element) {  
        const open = element.open[0].times.from;
        var close = element.open[0].times.to;
        
        if (close < 10) {
            close = close + 24;
        }

        const hoursOpen = close - open;

        var timeOpen = moment();
        
        timeOpen.hour(open) 
        timeOpen.minute(0)
        timeOpen.second(0)
        timeOpen.millisecond(0)

        console.log('timeOpen', timeOpen);

        const timeClose = timeOpen.add('hours', hoursOpen);
        
        console.log(element.id);
        console.log('hoursOpen', hoursOpen);
        console.log('timeClose', timeClose);
        console.log('fromTime', fromTime);

        const range = moment.range(timeOpen, timeClose);
   
        console.log('range', fromTime.within(range)); // true
        
        return element.id == request.carPark;
        //return element.id == request.carPark && element.open[0].days.indexOf(dow) != -1 && timeOpen <= fromTime 
    });

    console.log('open', data );

    if (data === undefined) {
        console.log('nicht gefunden');
        
        context.open = false;
    } else {
        console.log('gefunden');
        
        context.open = true;
    }
    
    return {open: context.open};
}

/*function calcTimeOpen(open, close) {
    if (close < 10) {
        close += 24;
    }
    console.log('call open');
    
    return close - open;
}*/

module.exports = {checkIsOpen};