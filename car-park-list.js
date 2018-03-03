const carParks = require("./car-parks.json");

function getCarParks() {
    return carParks.map((element) => {
        return {"name": element.name, "id": element.id};
    });
}

module.exports = getCarParks;