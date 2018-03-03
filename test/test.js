const assert = require("chai").assert;
const costCalculator = require("../cost-calculator");
const tarifs = require("../cost-data.json");
const checkIsOpen = require("../car-park-open");

describe("test", () => {
    /*it("should calculate cost for 150 mins", () => {
        const request = {
            fromTime: new Date(2018, 2, 3, 15, 0, 0),
            duration: 150
        };
        assert.equal(costCalculator.calcCost(tarifs["kaethchenhof"],  request).cost, 4);
    });
    it("should calculate cost for 150 mins kiliansplatz on saturday", () => {
        const request = {
            fromTime: new Date(2018, 2, 3, 15, 0, 0),
            duration: 150
        };
        assert.equal(costCalculator.calcCost(tarifs["kiliansplatz"],  request).cost, 8);
    });
    it("should calculate cost for 150 mins kiliansplatz on friday", () => {
        const request = {
            fromTime: new Date(2018, 2, 2, 15, 0, 0),
            duration: 150
        };
        assert.equal(costCalculator.calcCost(tarifs["kiliansplatz"],  request).cost, 6);
    });
    it("should calculate cost for 150 mins kiliansplatz evening", () => {
        const request = {
            fromTime: new Date(2018, 2, 2, 20, 0, 0),
            duration: 150
        };
        assert.equal(costCalculator.calcCost(tarifs["kiliansplatz"],  request).cost, 5);
    });
    it("should calculate cost for 180 mins city-parkhaus-experimenta evening", () => {
        const request = {
            fromTime: new Date(2018, 2, 2, 20, 0, 0),
            duration: 180
        };
        assert.equal(costCalculator.calcCost(tarifs["city-parkhaus-experimenta"],  request).cost, 4.5);
    });
    it("should calculate cost for 180 mins city-parkhaus-experimenta day", () => {
        const request = {
            fromTime: new Date(2018, 2, 2, 10, 0, 0),
            duration: 180
        };
        assert.equal(costCalculator.calcCost(tarifs["city-parkhaus-experimenta"],  request).cost, 4.5);
    });*/


    it("should check is open stadtgalerie", () => {
        const request = {
            fromTime: new Date(2018, 2, 3, 15, 0, 0),
            duration: 150,
            carPark: "kiliansplatz"
        };
        assert.equal(checkIsOpen.checkIsOpen(request).open, true);
    });

    it("should check is open stadtgalerie", () => {
        const request = {
            fromTime: new Date(2018, 2, 3, 4, 0, 0),
            duration: 150,
            carPark: "kiliansplatz"
        };
        assert.equal(checkIsOpen.checkIsOpen(request).open, false);
    });
});
