import { Template } from 'meteor/templating';

/* Variables */
let audioChunks; // Variable to store recorded chunks of audio.
let selectedChannel = 0; // Variable to store the last clicked channel.
let wavesurfer1 = null;
let wavesurfer2 = null;
let wavesurfer3 = null;
let wavesurfer4 = null;
let wavesurfer5 = null;

/* Wave Constructor */
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

/* Switch selectedChannel to newChannel */
function switchActive(newChannel) {
  if (selectedChannel === 1) {
    document.getElementById('channel1').style.backgroundColor = 'dimgray';
  } else if (selectedChannel === 2) {
    document.getElementById('channel2').style.backgroundColor = 'dimgray';
  } else if (selectedChannel === 3) {
    document.getElementById('channel3').style.backgroundColor = 'dimgray';
  } else if (selectedChannel === 4) {
    document.getElementById('channel4').style.backgroundColor = 'dimgray';
  } else {
    document.getElementById('channel5').style.backgroundColor = 'dimgray';
  }
  selectedChannel = newChannel;
}

/* Events */
Template.Sound_Recorder_Page.events({
  /* Channel One Selected */
  'click #channel1': function() {
    switchActive(1);
    document.getElementById('channel1').style.backgroundColor = 'silver';
    // console.log("Selected channel " + selectedChannel);
  },
  /* Channel Two Selected */
  'click #channel2': function() {
    switchActive(2);
    document.getElementById('channel2').style.backgroundColor = 'silver';
    // console.log("Selected channel " + selectedChannel);
  },
  /* Channel Three Selected */
  'click #channel3': function() {
    switchActive(3);
    document.getElementById('channel3').style.backgroundColor = 'silver';
    // console.log("Selected channel " + selectedChannel);
  },
  /* Channel Four Selected */
  'click #channel4': function() {
    switchActive(4);
    document.getElementById('channel4').style.backgroundColor = 'silver';
    // console.log("Selected channel " + selectedChannel);
  },
  /* Channel Five Selected */
  'click #channel5': function() {
    switchActive(5);
    document.getElementById('channel5').style.backgroundColor = 'silver';
    // console.log("Selected channel " + selectedChannel);
  },
  /* Play Button Clicked */
  'click #play': function() {
    wavesurfer1.play();
    wavesurfer2.play();
    wavesurfer3.play();
    wavesurfer4.play();
    wavesurfer5.play();
    },
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
  /* Channel One Play Button Clicked */
  'click #play1': function() {
    wavesurfer1.play();
  },
  /* Channel Two Play Button Clicked */
  'click #play2': function() {
    wavesurfer2.play();
  },
  /* Channel Three Play Button Clicked */
  'click #play3': function() {
    wavesurfer3.play();
  },
  /* Channel Four Play Button Clicked */
  'click #play4': function() {
    wavesurfer4.play();
  },
  /* Channel Five Play Button Clicked */
  'click #play5': function() {
    wavesurfer5.play();
  },
  /* Channel One Pause Button Clicked */
  'click #pause1': function() {
    wavesurfer1.pause();
  },
  /* Channel Two Pause Button Clicked */
  'click #pause2': function() {
    wavesurfer2.pause();
  },
  /* Channel Three Pause Button Clicked */
  'click #pause3': function() {
    wavesurfer3.pause();
  },
  /* Channel Four Pause Button Clicked */
  'click #pause4': function() {
    wavesurfer4.pause();
  },
  /* Channel Five Pause Button Clicked */
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
      } else if (selectedChannel === 5){
        recordToTrack(track5link, blob, wavesurfer5);
      } else {
        //console.log("Channel has not been selected.");
      }
    }
  };
}).catch(e=>console.log(e));
