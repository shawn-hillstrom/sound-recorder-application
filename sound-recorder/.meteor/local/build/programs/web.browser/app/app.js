var require = meteorInstall({"imports":{"ui":{"pages":{"sound-recorder.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/ui/pages/sound-recorder.html                                                      //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.link("./template.sound-recorder.js", { "*": "*+" });

///////////////////////////////////////////////////////////////////////////////////////////////

},"template.sound-recorder.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/ui/pages/template.sound-recorder.js                                               //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //

Template.__checkName("Sound_Recorder_Page");
Template["Sound_Recorder_Page"] = new Template("Template.Sound_Recorder_Page", (function() {
  var view = this;
  return "";
}));

///////////////////////////////////////////////////////////////////////////////////////////////

},"welcome.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/ui/pages/welcome.html                                                             //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.link("./template.welcome.js", { "*": "*+" });

///////////////////////////////////////////////////////////////////////////////////////////////

},"template.welcome.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/ui/pages/template.welcome.js                                                      //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //

Template.__checkName("Welcome_Page");
Template["Welcome_Page"] = new Template("Template.Welcome_Page", (function() {
  var view = this;
  return HTML.Raw('<div class="ui secondary fixed inverted pointing massive indexmenu menu">\n    <div class="item">\n      <div class="ui inverted huge header">Sound Recorder</div>\n    </div>\n    <a class="active item" data-tab="about">About/How-To</a>\n    <div class="right menu">\n      <div class="item">\n        <a href="/sound-recorder" class="ui inverted massive button">New Project</a>\n      </div>\n    </div>\n  </div>\n\n  <div class="ui active abouttab tab segment" data-tab="about">\n    <img class="ui centered fluid image" src="/images/welcomeimage.jpg">\n    <div class="ui aboutgrid grid">\n      <div class="centered row">\n        <div class="eight wide column">\n          <div class="ui huge dividing header">Welcome to Sound Recorder</div>\n          <div class="ui medium header">Sound Recorder is an online, free sound creation experience.</div>\n          <div class="ui medium header">Unlike its more expensive, more complicated counterparts, Sound Recorder features a minimalistic, easy to use design.</div>\n          <div class="ui medium header">Try Sound Recorder today! Click \'New Project\' to get started.</div>\n        </div>\n      </div>\n    </div>\n  <div class="ui howgrid relaxed grid">\n      <div class="centered row" style="background-color:#282828">\n          <h1 class="ui centered huge dividing header">How does it work?</h1>\n      </div>\n      <div class="centered row" style="background-color:#282828">\n          <div class="five wide column">\n              <h3 class="ui small header">Click the <b>AUDIO INPUT DEVICE SELECT</b> button to choose which microphone/input device you\'ll want to use.</h3>\n              <h3 class="ui small header"><b>OR</b> Select <b>IMPORT AUDIO</b> in order to bring a pre-existing audio clip from your computer into the workspace (called the timeline).</h3>\n              <h3 class="ui small header">Pressing the round, red record button will begin your recording. Speak up!</h3>\n          </div>\n          <div class="five wide column">\n              <h3 class="ui small header">To stop a recording in progress and return the recording needle to the start of the timeline, press <b>STOP</b>.</h3>\n              <h3 class="ui small header">Alternatively, the <b>PLAY/PAUSE</b> button stops and resumes playback on the timeline, but doesn\'t reset the recording needle.</h3>\n              <h3 class="ui small header">To change the volume of each channel (horizontal row of audio tracks) just drag the corresponding bar on the left of the screen.</h3>\n          </div>\n          <div class="five wide column">\n              <h3 class="ui small header">Drag audio tracks along the timeline to put them earlier or later in your final product.</h3>\n              <h3 class="ui small header">If you need to trim a particular audio track in length, click on it first to select it. Then, press the <b>CROP</b> button and adjust the track\'s endpoints before confirming the crop.</h3>\n              <h3 class="ui small header">Done with your project? Click the <b>EXPORT AUDIO</b> button and specify your export preferences. <b>Enjoy!</b></h3>\n          </div>\n      </div>\n  </div>\n  </div>\n\n  <div class="ui equal width inverted footer grid">\n    <div class="equal width centered row">\n      <div class="ten wide column">\n        <div class="ui secondary massive compact fitted menu">\n          <a class="item">\n            <i style="color: whitesmoke" class="facebook f icon"></i>\n          </a>\n          <a class="item">\n            <i style="color: whitesmoke" class="twitter icon"></i>\n          </a>\n          <a class="item">\n            <i style="color: whitesmoke" class="pinterest p icon"></i>\n          </a>\n          <a class="item">\n            <i style="color: whitesmoke" class="instagram icon"></i>\n          </a>\n        </div>\n        <div class="ui inverted divider"></div>\n      </div>\n    </div>\n    <div class="equal width centered row">\n      <div class="column">\n        <div class="text">\n          COPYRIGHT<i class="copyright icon"></i>2018 TUNE DEAF INTERACTIVE\n        </div>\n      </div>\n    </div>\n  </div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/ui/pages/index.js                                                                 //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.link("./sound-recorder.html");
module.link("./sound-recorder.js");
module.link("./welcome.html");
module.link("./welcome.js");
///////////////////////////////////////////////////////////////////////////////////////////////

},"sound-recorder.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/ui/pages/sound-recorder.js                                                        //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////

},"welcome.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/ui/pages/welcome.js                                                               //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 0);
// Allow functionality for tabs.
Template.Welcome_Page.onRendered(function enableTabbing() {
  this.$('.menu .item').tab();
});
///////////////////////////////////////////////////////////////////////////////////////////////

}},"stylesheets":{"style.css":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/ui/stylesheets/style.css                                                          //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.exports = require("meteor/modules").addStyles(
  ".indexmenu {\n  background-color: #282828 !important;\n}\n\n.abouttab.tab {\n  border: 0;\n  box-shadow: none;\n}\n\n.aboutgrid.grid {\n  padding-top: 75px;\n  padding-bottom: 75px;\n}\n\n.ui.howgrid.relaxed.grid {\n  color: whitesmoke;\n}\n\nh1.ui.centered.huge.dividing.header {\n  color: whitesmoke;\n}\n\nh3.ui.small.header {\n  color: whitesmoke;\n}\n\n.footer.grid {\n  background-color: #282828;\n  color: whitesmoke;\n}\n"
);

///////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"client":{"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/startup/client/index.js                                                           //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.link("./router.js");
///////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/startup/client/router.js                                                          //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
let Router;
module.link("meteor/iron:router", {
  Router(v) {
    Router = v;
  }

}, 0);
// Route the welcome page.
Router.route('/', function () {
  this.render('Welcome_Page');
}); // Route to the Sound Recorder page.

Router.route('/sound-recorder', function () {
  this.render('Sound_Recorder_Page');
});
///////////////////////////////////////////////////////////////////////////////////////////////

}}},"api":{"db.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/api/db.js                                                                         //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/api/index.js                                                                      //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.link("./db.js");
///////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// client/main.js                                                                            //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.link("/imports/startup/client");
module.link("/imports/api");
module.link("/imports/ui/pages");
module.link("/imports/ui/stylesheets/style.css");
///////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");