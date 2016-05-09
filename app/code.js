// source: http://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
module.exports = `var today = new Date();
var day = today.getDay();
var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];asdfaai

console.log('Today is : ' + daylist[day] + '.');

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepend = (hour >= 12) ? ' PM ':' AM ';

hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepend === ' PM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepend =' Noon';
  } else {
    hour = 12;
    prepend = ' PM';
  }
}

if (hour === 0 && prepend === ' AM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepend = ' Midnight';
  } else {
    hour = 12;
    prepend = ' AM';
  }
}

console.log('Current Time : ' + hour + prepend + ' : ' + minute + ' : ' + second);`
