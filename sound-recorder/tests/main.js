var assert = chai.assert;
//var request = require("request"),
//    assert = require('assert'),
//    base_url = "http://localhost:3000";

//var assert = chai.assert;
/* eslint-env mocha, chai */
/* global chai, sound-recorder */


/* Basic Tests */


describe('createWaves', function () {
    it('waveContainer1', function() {
        request.get(base_url, function(error, response, body) {
            assert(wavesurfer1).to.have.container('#wave1');
            done();
        });
    });
    it('should have waveColor #19fc05', function() {
        assert.equal(wavesurfer1.waveColor, '#19fc05');
    });
    it('should have waveProgress #19fc05', function() {
        assert(wavesurfer1).to.have.progressColor('#0faa01');
    });
});

describe("sound-recorder", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "sound-recorder");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
