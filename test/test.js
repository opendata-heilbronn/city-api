const assert = require("chai").assert;
const costCalculator = require("../cost-calculator");

describe("test", () => {
    it("should calulate cost for 2 h", () => {
        assert.equal(costCalculator.calcCost(), 0);
    });
});
    


