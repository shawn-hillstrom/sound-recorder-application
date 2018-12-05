import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '/client/lib/semantic-ui/definitions/modules/progress.js';

//demo sound, to be removed at some point
var audio = new Audio('sounds/mystery.mp3');

//variable to store recorded chunks of audio
let audioChunks;
//variable to store the last clicked channel
let selectedChannel = 1;

// I fully understand that this is a monstrosity
// sry in advance. we need to fix somewhat

function recordToTrack1(blob) {
  track1.src = URL.createObjectURL(blob);
  track1.controls = true;
  track1.autoplay = true;
  track1link.href = track1.src;
  track1link.download = 'mp3';
  track1link.innerHTML = 'download';
}

function recordToTrack2(blob) {
  track2.src = URL.createObjectURL(blob);
  track2.controls = true;
  track2.autoplay = true;
  track2link.href = track1.src;
  track2link.download = 'mp3';
  track2link.innerHTML = 'download';
}

function recordToTrack3(blob) {
  track3.src = URL.createObjectURL(blob);
  track3.controls = true;
  track3.autoplay = true;
  track3link.href = track1.src;
  track3link.download = 'mp3';
  track3link.innerHTML = 'download';
}

function recordToTrack4(blob) {
  track4.src = URL.createObjectURL(blob);
  track4.controls = true;
  track4.autoplay = true;
  track4link.href = track1.src;
  track4link.download = 'mp3';
  track4link.innerHTML = 'download';
}

function recordToTrack5(blob) {
  track5.src = URL.createObjectURL(blob);
  track5.controls = true;
  track5.autoplay = true;
  track5link.href = track1.src;
  track5link.download = 'mp3';
  track5link.innerHTML = 'download';
}

function deleteTrack(selectedChannel) {
  if (selectedChannel === 1) track1.setAttribute('src', '');
  if (selectedChannel === 2) track2.setAttribute('src', '');
  if (selectedChannel === 3) track3.setAttribute('src', '');
  if (selectedChannel === 4) track4.setAttribute('src', '');
  if (selectedChannel === 5) track5.setAttribute('src', '');
}

/* On Created */
Template.Sound_Recorder_Page.onCreated(function recorderCreated() {
  this.selectedChannel = new ReactiveVar(0);
});

/* Helper Functions */
Template.Sound_Recorder_Page.helpers({
  selectedChannel() {
    return Template.instance().selectedChannel.get();
  },
});

/* Function: wait
 * --------------
 * Waits a specified amount of milliseconds.
 *
 * ms: Milliseconds.
 */
function wait(ms) {
  let d = new Date();
  let d2 = null;
  do {
    d2 = new Date();
  } while (d2 - d < ms);
}

/* Events */
Template.Sound_Recorder_Page.events({
  /* Channel One Selected */
  'click #channel_one': function(event, instance) {
    instance.selectedChannel.set(1);
    selectedChannel = 1;
    // console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Channel Two Selected */
  'click #channel_two': function(event, instance) {
    instance.selectedChannel.set(2);
    selectedChannel = 2;
    // console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Channel Three Selected */
  'click #channel_three': function(event, instance) {
    instance.selectedChannel.set(3);
    selectedChannel = 3;
    // console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Channel Four Selected */
  'click #channel_four': function(event, instance) {
    instance.selectedChannel.set(4);
    selectedChannel = 4;
    // console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Channel Five Selected */
  'click #channel_five': function(event, instance) {
    instance.selectedChannel.set(5);
    selectedChannel = 5;
    // console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Play Button Clicked */
  'click #play': function(event, instance) {
    track1.play();
    track2.play();
    track3.play();
    track4.play();
    track5.play();
  },
  /* Pause Button Clicked */
  'click #pause': function(event, instance) {

  },
  /* Record Button Clicked */
  'click #record': function(event, instance) {
    audioChunks = [];
    rec.start();
  },
  /* Stop Button Clicked */
  'click #stop': function(event, instance) {
    rec.stop();
  },
  /* Clear Button Clicked */
  'click #clear': function(event, instance) {
    deleteTrack(selectedChannel);
  },
});

// Get access to the mic and record
navigator.mediaDevices.getUserMedia({audio:true}).then(stream => {
  rec = new MediaRecorder(stream);
  rec.ondataavailable = e => {
    audioChunks.push(e.data);
    if (rec.state == "inactive"){
      let blob = new Blob(audioChunks,{type:'audio/x-mpeg-3'});
      if (selectedChannel === 1) recordToTrack1(blob);
      if (selectedChannel === 2) recordToTrack2(blob);
      if (selectedChannel === 3) recordToTrack3(blob);
      if (selectedChannel === 4) recordToTrack4(blob);
      if (selectedChannel === 5) recordToTrack5(blob);
    }
  };
}).catch(e=>console.log(e));
