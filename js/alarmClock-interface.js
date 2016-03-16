// var alarmClock = require('./../js/alarmClock.js').update;


$(document).ready(function(){
  var timey;
  userHour = "0";
  userMinute = "00";
  userSecond = "00";
  userAMPM = "am";
  setAlarmTo = "0:00:00 am";

  // display current time on the page
  update();
  setInterval(update, 1000);

  // click 'Set Alarm' button to set desired alarm time
  $('.alarmer').click(function() {
    // get values from inputs
    userHour = $("#hour").val();
    userMinute = $("#minute").val();
    userSecond = $("#second").val();
    userAMPM = $("#am-pm").val();

    // set userHour default to "1" if no number was entered
    if (userHour.length === 0) {
      userHour = "1";
    }

    // set userMinute default to "00" if no number was entered
    // and add a '0' before the number if it is < 10
    if (userMinute.length === 0) {
      userMinute = "00";
    } else if (userMinute.length === 1) {
      userMinute = ('0' + userMinute.slice(-2));
    }

    // set userSecond default to "00" if no number was entered
    // and add a '0' before the number if it is < 10
    if (userSecond.length === 0) {
      userSecond = "00";
    } else if (userSecond.length === 1) {
      userSecond = ('0' + userSecond.slice(-2));
    }

    // check to see if more than 2 digits were input in any field
    // and throw error if so.
    if ((userHour.length > 2) || (userMinute.length > 2) || (userSecond.length > 2)) {
      alert("Number entered is not a proper value for time.");
    }

    // combine user inputs into a string
    // so that it can be compared with the current time string
    setAlarmTo = userHour + ":" + userMinute + ":" + userSecond + " " + userAMPM;

  });
});


function update() {
  // get current time from moment.js
  timey = moment().format('h:mm:ss a');
  // convert moment.js time to array and back to a string
  // to allow for comparison with user's alarm time string
  var a = timey.split('');
  var b = a.join('');
  // if user's alarm time (string) === the current moment.js time (string)
  // then trigger the alarm
  if (setAlarmTo === b) {
    $('.alarmAlert').html("<h1>BEEEEP!</h1>");
  }
  // display current time on page
  return $('#time').html(timey);
}
