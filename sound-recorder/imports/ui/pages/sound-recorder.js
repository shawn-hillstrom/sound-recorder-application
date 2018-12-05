import { Template } from 'meteor/templating';
import '/client/lib/semantic-ui/definitions/modules/progress.js';

/* Variables */
let audioChunks; // Variable to store recorded chunks of audio.
let selectedChannel = 1; // Variable to store the last clicked channel.

/* Record to Channel 1 */
function recordToTrack1(blob) {
  track1.src = URL.createObjectURL(blob);
  track1.controls = true;
  track1.autoplay = true;
  track1link.href = track1.src;
  track1link.download = 'mp3';
  track1link.innerHTML = 'download';
}

/* Record to Channel 2 */
function recordToTrack2(blob) {
  track2.src = URL.createObjectURL(blob);
  track2.controls = true;
  track2.autoplay = true;
  track2link.href = track1.src;
  track2link.download = 'mp3';
  track2link.innerHTML = 'download';
}

/* Record to Channel 3 */
function recordToTrack3(blob) {
  track3.src = URL.createObjectURL(blob);
  track3.controls = true;
  track3.autoplay = true;
  track3link.href = track1.src;
  track3link.download = 'mp3';
  track3link.innerHTML = 'download';
}

/* Record to Channel 4 */
function recordToTrack4(blob) {
  track4.src = URL.createObjectURL(blob);
  track4.controls = true;
  track4.autoplay = true;
  track4link.href = track1.src;
  track4link.download = 'mp3';
  track4link.innerHTML = 'download';
}

/* Record to Channel 5 */
function recordToTrack5(blob) {
  track5.src = URL.createObjectURL(blob);
  track5.controls = true;
  track5.autoplay = true;
  track5link.href = track1.src;
  track5link.download = 'mp3';
  track5link.innerHTML = 'download';
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
        recordToTrack1(blob);
      } else if (selectedChannel === 2) {
        recordToTrack2(blob);
      } else if (selectedChannel === 3) {
        recordToTrack3(blob);
      } else if (selectedChannel === 4) {
        recordToTrack4(blob);
      } else {
        recordToTrack5(blob);
      }
    }
  };
}).catch(e=>console.log(e));
