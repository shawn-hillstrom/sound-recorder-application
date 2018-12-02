import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

/* On Created */
Template.Sound_Recorder_Page.onCreated(function recorderCreated() {
  this.selectedChannel = new ReactiveVar(0);
  this.isPlaying = new ReactiveVar(false);
});

/* On Rendered */
Template.Sound_Recorder_Page.onRendered(function recorderRendered() {
  this.$('.ui.progress').progress();
});

/* Helper Functions */
Template.Sound_Recorder_Page.helpers({
  selectedChannel() {
    return Template.instance().selectedChannel.get();
  },
  isPlaying() {
    return Template.instance().isPlaying.get();
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
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Channel Two Selected */
  'click #channel_two': function(event, instance) {
    instance.selectedChannel.set(2);
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Channel Three Selected */
  'click #channel_three': function(event, instance) {
    instance.selectedChannel.set(3);
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Channel Four Selected */
  'click #channel_four': function(event, instance) {
    instance.selectedChannel.set(4);
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Channel Five Selected */
  'click #channel_five': function(event, instance) {
    instance.selectedChannel.set(5);
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  /* Play Button Pushed */
  'click #play': function(event, instance) {
    instance.isPlaying.set(true);
    while (!instance.$('#timeline').progress('complete') && instance.isPlaying.get()) {
      wait(1000); // Wait one second.
      instance.$('#timeline').progress('increment');
    }
    instance.isPlaying.set(false);
  },
  /* Record Button Clicked */
  'click #record': function(event, instance) {

  },
  /* Stop Button Clicked */
  'click #stop': function(event, instance) {

  },
  /* Clear Button Clicked */
  'click #clear': function(event, instance) {

  },
});
