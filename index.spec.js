var aws = require("aws-sdk-mock")
var assert = require("assert")
var handler = require("./index.js").handler

describe("DynamoDB", () => {
    before(() => {
        aws.mock('DynamoDB', 'describeTable', (params, callback) => {
            callback(null, "successfully");
        });
    });
    after(() => {
        aws.restore();
    });

    it("hello test", (done) => {
        handler({},{},(error, event) => {
            if (error) {
                assert.fail(error);
            }
            done();
        });
    });

});


