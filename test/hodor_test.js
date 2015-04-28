

var expect = require("chai").use(require("sinon-chai")).expect;
var sinon = require("sinon");


describe("Hodor", function () {

  var hodor = require("../scripts/hodor");
  var stubBot, mockRes;

  beforeEach(function () {
    mockRes = {
      send: sinon.spy(),
      match: ["", "toto"]
    };
    stubBot = {
      hear : sinon.spy(function (regexp, callback) {
        callback(mockRes);
      })
    };

    hodor(stubBot)
  });

  it("says hodor", function () {
    expect(stubBot.hear).to.have.been.calledWith(/.*/i);
    expect(mockRes.send).to.have.been.calledWith("Hodor !!!");
  });
  it("hodor gif return khaleesi gif", function () {
    expect(stubBot.hear).to.have.been.calledWith(/khaleesi (.*)/i);
    expect(mockRes.send).to.have.been.calledWith('http://www.lesinrocks.com/wp-content/uploads/2014/09/hodor.jpg?v=toto');
  });
});
