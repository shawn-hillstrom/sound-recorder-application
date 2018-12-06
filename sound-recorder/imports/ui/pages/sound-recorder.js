import { Template } from 'meteor/templating';
import '/client/lib/semantic-ui/definitions/modules/progress.js';

/* Variables */
let audioChunks; // Variable to store recorded chunks of audio.
let selectedChannel = 1; // Variable to store the last clicked channel.
let wavesurfer1;
let wavesurfer2;
let wavesurfer3;
let wavesurfer4;
let wavesurfer5;


function createWaves () {
  wavesurfer1 = WaveSurfer.create({
    container: '#wave1', //string myContainer
    waveColor: 'violet',
    progressColor: 'purple'
  });

  wavesurfer2 = WaveSurfer.create({
    container: '#wave2', //string myContainer
    waveColor: 'violet',
    progressColor: 'purple'
  });

  wavesurfer3 = WaveSurfer.create({
    container: '#wave3', //string myContainer
    waveColor: 'violet',
    progressColor: 'purple'
  });

  wavesurfer4 = WaveSurfer.create({
    container: '#wave4', //string myContainer
    waveColor: 'violet',
    progressColor: 'purple'
  });

  wavesurfer5 = WaveSurfer.create({
    container: '#wave5', //string myContainer
    waveColor: 'violet',
    progressColor: 'purple'
  });
}

Template.Sound_Recorder_Page.onRendered(function () {
  createWaves();
});

function recordToTrack(tracklink, blob, wavesurfer) {
  let  file = URL.createObjectURL(blob);
  tracklink.href = file;
  tracklink.download = 'mp3';
  tracklink.innerHTML = 'download';

  wavesurfer.load(file);
}

function assignSoundToWave(wave, file) {

  wavesurfer.load(file);

  function play() {
    wavesurfer.play();
  }
  function pause() {
    wavesurfer.pause();
  }
  wavesurfer.play();
  document.getElementById("playMe").onclick = play;
  document.getElementById("pauseMe").onclick = pause;
}

/* Delete a Track in Specified Channel */
function deleteTrack(selectedChannel) {
  if (selectedChannel === 1) {
    wavesurfer1.empty();
  } else if (selectedChannel === 2) {
    wavesurfer2.empty();
  } else if (selectedChannel === 3) {
    wavesurfer3.empty();
  } else if (selectedChannel === 4) {
    wavesurfer4.empty();
  } else {
    wavesurfer5.empty();
  }
}

/* Events */
Template.Sound_Recorder_Page.events({
  /* Channel One Selected */
  'click #channel_one': function() {
    selectedChannel = 1;
    // console.log("Selected channel " + selectedChannel);
  },
  /* Channel Two Selected */
  'click #channel_two': function() {;
    selectedChannel = 2;
    // console.log("Selected channel " + selectedChannel);
  },
  /* Channel Three Selected */
  'click #channel_three': function() {
    selectedChannel = 3;
    // console.log("Selected channel " + selectedChannel);
  },
  /* Channel Four Selected */
  'click #channel_four': function() {
    selectedChannel = 4;
    // console.log("Selected channel " + selectedChannel);
  },
  /* Channel Five Selected */
  'click #channel_five': function() {
    selectedChannel = 5;
    // console.log("Selected channel " + selectedChannel);
  },
  /* Play Button Clicked */
  'click #play': function() {
    wavesurfer1.play();
    wavesurfer2.play();
    wavesurfer3.play();
    wavesurfer4.play();
    wavesurfer5.play();
    track1.addEventListener('stop', function(e) {
    track1.play();
    });
    },
  /* Track 1 ends

    if (track1.readyState === 'ended') track1.play();
*/
  /* Pause Button Clicked */
  'click #pause': function() {
    wavesurfer1.pause();
    wavesurfer2.pause();
    wavesurfer3.pause();
    wavesurfer4.pause();
    wavesurfer5.pause();
  },
  /* Record Button Clicked */
  'click #record': function() {
    audioChunks = [];
    rec.start();
  },
  /* Stop Button Clicked */
  'click #stop': function() {
    wavesurfer1.stop();
    wavesurfer2.stop();
    wavesurfer3.stop();
    wavesurfer4.stop();
    wavesurfer5.stop();
    rec.stop();
  },
  /* Clear Button Clicked */
  'click #clear': function() {
    deleteTrack(selectedChannel);
  },

  'click #play1': function() {
    wavesurfer1.play();
  },

  'click #play2': function() {
    wavesurfer2.play();
  },

  'click #play3': function() {
    wavesurfer3.play();
  },

  'click #play4': function() {
    wavesurfer4.play();
  },

  'click #play5': function() {
    wavesurfer5.play();
  },

  'click #pause1': function() {
    wavesurfer1.pause();
  },

  'click #pause2': function() {
    wavesurfer2.pause();
  },

  'click #pause3': function() {
    wavesurfer3.pause();
  },

  'click #pause4': function() {
    wavesurfer4.pause();
  },

  'click #pause5': function() {
    wavesurfer5.pause();
  },

});

/* Get Access to the Mic and Record */
navigator.mediaDevices.getUserMedia({audio:true}).then(stream => {
  rec = new MediaRecorder(stream);
  rec.ondataavailable = e => {
    audioChunks.push(e.data);
    if (rec.state == "inactive") {
      let blob = new Blob(audioChunks,{type:'audio/x-mpeg-3'});
      if (selectedChannel === 1) {
        recordToTrack(track1link, blob, wavesurfer1);
      } else if (selectedChannel === 2) {
        recordToTrack(track2link, blob, wavesurfer2);
      } else if (selectedChannel === 3) {
        recordToTrack(track3link, blob, wavesurfer3);
      } else if (selectedChannel === 4) {
        recordToTrack(track4link, blob, wavesurfer4);
      } else {
        recordToTrack(track5link, blob, wavesurfer5);
      }
    }
  };
}).catch(e=>console.log(e));
