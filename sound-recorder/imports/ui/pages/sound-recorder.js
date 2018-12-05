import { Template } from 'meteor/templating';
import '/client/lib/semantic-ui/definitions/modules/progress.js';

/* Variables */
let audioChunks; // Variable to store recorded chunks of audio.
let selectedChannel = 1; // Variable to store the last clicked channel.

function recordToTrack(track, tracklink, blob) {
  track.src = URL.createObjectURL(blob);
  track.controls = true;
  track.autoplay = true;
  tracklink.href = track1.src;
  tracklink.download = 'mp3';
  tracklink.innerHTML = 'download';
}

/* Delete a Track in Specified Channel */
function deleteTrack(selectedChannel) {
  if (selectedChannel === 1) {
    track1.setAttribute('src', '');
  } else if (selectedChannel === 2) {
    track2.setAttribute('src', '');
  } else if (selectedChannel === 3) {
    track3.setAttribute('src', '');
  } else if (selectedChannel === 4) {
    track4.setAttribute('src', '');
  } else {
    track5.setAttribute('src', '');
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
    track1.play();
    track2.play();
    track3.play();
    track4.play();
    track5.play();
    track1.addEventListener('stop', function(e) {
    track1.play();
    });
    },
  /* Track 1 ends

    if (track1.readyState === 'ended') track1.play();
*/
  /* Pause Button Clicked */
  'click #pause': function() {
    track1.pause();
    track2.pause();
    track3.pause();
    track4.pause();
    track5.pause();
  },
  /* Record Button Clicked */
  'click #record': function() {
    audioChunks = [];
    rec.start();
  },
  /* Stop Button Clicked */
  'click #stop': function() {
    rec.stop();
    track1.stop();
    track2.stop();
    track3.stop();
    track4.stop();
    track5.stop();
  },
  /* Clear Button Clicked */
  'click #clear': function() {
    deleteTrack(selectedChannel);
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
        recordToTrack(track1, track1link, blob);
      } else if (selectedChannel === 2) {
        recordToTrack(track2, track2link, blob);
      } else if (selectedChannel === 3) {
        recordToTrack(track3, track3link, blob);
      } else if (selectedChannel === 4) {
        recordToTrack(track4, track4link, blob);
      } else {
        recordToTrack(track5, track5link, blob);
      }
    }
  };
}).catch(e=>console.log(e));
