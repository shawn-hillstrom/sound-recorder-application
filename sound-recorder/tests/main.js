var assert = chai.assert;
import wavesurfer1 from '../imports/ui/pages/sound-recorder.js';
/* eslint-env mocha, chai */
/* global chai, sound-recorder */
/* Basic Tests */


describe("sound-recorder", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    chai.assert.strictEqual(name, "sound-recorder");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      chai.assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      chai.assert.strictEqual(Meteor.isClient, false);
    });
  }
});

describe('createWaves', function () {
    it('waveColor1', function() {
        chai.assert(wavesurfer1).to.have.waveColor('#19fc05');
    });
});