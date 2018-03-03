const express = require('express');
const app = express();
const costCalculator = require("./cost-calculator");
const carParks = require("./car-park-list");


app.get('/parkCost', function (req, res) {

    //costCalculator.calcCost()
});

app.get("/carParks", function (req, res) {
    res.send(carParks());
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
