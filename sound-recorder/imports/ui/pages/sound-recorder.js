import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

/* Constructor */
Template.Sound_Recorder_Page.onCreated(function recorderOpened() {
  this.selectedChannel = new ReactiveVar(0);
});

/* Helper Functions */
Template.Sound_Recorder_Page.helpers({
  selectedChannel() {
    return Template.instance().selectedChannel.get();
  },
});

/* Events */
Template.Sound_Recorder_Page.events({
  'click #channel_one': function(event, instance) {
    instance.selectedChannel.set(1);
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  'click #channel_two': function(event, instance) {
    instance.selectedChannel.set(2);
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  'click #channel_three': function(event, instance) {
    instance.selectedChannel.set(3);
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  'click #channel_four': function(event, instance) {
    instance.selectedChannel.set(4);
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
  'click #channel_five': function(event, instance) {
    instance.selectedChannel.set(5);
    //console.log(event, "Selected channel " + instance.selectedChannel.get());
  },
});
