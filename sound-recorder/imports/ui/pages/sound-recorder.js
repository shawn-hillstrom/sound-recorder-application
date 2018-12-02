import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

/* On Created */
Template.Sound_Recorder_Page.onCreated(function recorderCreated() {
  this.selectedChannel = new ReactiveVar(0);
  this.isPlaying = new ReactiveVar(false);
  this.currentPosition = new ReactiveVar(0);
});

/* On Rendered */
Template.Sound_Recorder_Page.onRendered(function recorderRendered() {
  this.$('#timeline').progress();
});

/* Helper Functions */
Template.Sound_Recorder_Page.helpers({
  selectedChannel() {
    return Template.instance().selectedChannel.get();
  },
  isPlaying() {
    return Template.instance().isPlaying.get();
  },
  currentPosition() {
    return Template.instance().currentPosition.get();
  },
  wait(ms) {
    let d = new Date();
    let d2 = null;
    do {
      d2 = new Date();
    } while (d2 - d < ms);
  },
});

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
    instance.currentPosition.set(20);
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
