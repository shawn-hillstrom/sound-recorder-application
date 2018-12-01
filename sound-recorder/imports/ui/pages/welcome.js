import { Template } from 'meteor/templating';

/* Tab Functionality */
Template.Welcome_Page.onRendered(function enableTabbing() {
  this.$('.menu .item').tab();
});

