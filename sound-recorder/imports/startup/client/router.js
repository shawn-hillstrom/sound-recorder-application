import { Router } from 'meteor/iron:router';

// Route the welcome page.
Router.route('/', function() {
  this.render('Welcome_Page');
});

// Route to the Sound Recorder page.
Router.route('/sound-recorder', function() {
  this.render('Sound_Recorder_Page');
});
