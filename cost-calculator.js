function calcWeekDayCost(tarif, weekDayTarif, request) {
    const hourOfDay = request.fromTime.getHours();
    
    return 0;
}


function calcCost(tarif, request) {
    if (tarif.All) {
        return calcWeekDayCost(tarif, tarif.All, request);
    } else {
        return 0;
    }
}

module.exports = {calcCost};