import { Template } from 'meteor/templating';

// Allow functionality for tabs.
Template.Welcome_Page.onRendered(function enableTabbing() {
  this.$('.menu .item').tab();
});

