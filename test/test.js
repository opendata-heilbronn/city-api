const assert = require("chai").assert;
const costCalculator = require("../cost-calculator");
const tarifs = require("../cost-data.json");

describe("test", () => {
    it("should calculate cost for 150 mins", () => {
        const request = {
            fromTime: new Date(2018, 2, 3, 15, 0, 0),
            duration: 150
        };
        assert.equal(costCalculator.calcCost(tarifs["Käthchenhof"],  request).cost, 4);
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
});
