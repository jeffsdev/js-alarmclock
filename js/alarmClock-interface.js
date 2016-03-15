var alarmClock = require('./../js/alarmClock.js').alarmClock;




$(document).ready(function(){
  var timey;
  var userInput;
  update();
  setInterval(update, 1000);

  $('.alarmer').click(function(event) {
    event.preventDefault();
    userInput = $('.timeInput').val();
  });
}); debugger;



function update() {
  timey = moment().format('h:mm:ss a');
  return $('#time').html(timey);
}
