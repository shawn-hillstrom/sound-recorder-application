var assert = chai.assert;
/* eslint-env mocha, chai */
/* global chai, sound-recorder */


/* Basic Tests */


describe('createWaves', function () {
    it('waveContainer1', function() {
        assert(wavesurfer1).to.have.container('#wave1');
    });
    it('waveColor1', function() {
        assert(wavesurfer1).to.have.waveColor('#19fc05');
    });
    it('waveProgress1', function() {
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
