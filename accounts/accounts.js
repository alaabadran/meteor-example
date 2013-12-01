/*
 * User: Alaa Badran
 * Date: 2013-12-01
 * Time: 15:37:09
 * Contact: me@alaabadran.com
 * URL: http://www.alaabadran.com/
 */

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to accounts.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
