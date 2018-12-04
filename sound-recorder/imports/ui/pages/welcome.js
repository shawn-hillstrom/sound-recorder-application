import { Template } from 'meteor/templating';
import '/client/lib/semantic-ui/definitions/modules/tab.js';

/* Tab Functionality */
Template.Welcome_Page.onRendered(function enableTabbing() {
  this.$('.menu .item').tab();
});

