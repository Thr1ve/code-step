import React from 'react';
import moment from 'moment';


// Here's the code that gets displayed! It's just a simple string.
// source: http://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
export const code = (`var today = new Date();
var day = today.getDay();
var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

console.log('Current Time : ' + hour + prepend + ' : ' + minute + ' : ' + second);`);

// here's a really simple React component that we will use below in our steps
const Clickable = React.createClass({
  onClick() {
    console.log(`hello from "${this.props.children}"`);
  },
  render() {
    return <span style={{ color: '#fafafa' }} onClick={this.onClick}>{this.props.children}</span>;
  }
});

// Here's our array of "steps"!
// A "step" is simply an object that specifies...
//   - what lines should be highlighted in the code
//   - what the displayed note will be
//   - what the scopes object in the side-bar should contain
export const steps = [
  {
    // "highlighted" in step one is an empty array, so no lines will be highlited.
    highlighted: [],
    // "note" can be a function that returns JSX
    note: () => (
      <div>
        Hello! Click Next / Previous to step through the lesson. The code for this lesson can be found {<a target="_blank" href="https://github.com/Thr1ve/code-step/blob/master/lessons/test1.js">here</a>}
      </div>
    ),
    // "scopes" is a function that tells code-step how to update / change our tracked scopes that are displayed on the right-hand side-bar
    scopes() {
      this.global = {};
    }
  }, {
    highlighted: [1],
    // when "note" is a function, it also has the dispatch function and the current application state available as parameters if you want! Additionally, "note" can also return a string instead of JSX.
    note: (dispatch, state) => {
      console.log(state);
      return `This line of code creates a new ${typeof state === 'object' ? 'Date' : 'BOOLEAN, BROSEPH'}!`;
    },
    // We only need to update what is new/changed for in "scopes"; code-step will take care of the rest
    scopes() {
      this.global.today = new Date();
    }
  }, {
    highlighted: [2],
    // "note" can also be a simple string!
    note: `Here, we grab the day of the week as a number from the Date we made in line 1; since today is ${moment().format('dddd')}, our "day" variable will be assigned the value ${moment().day()} `,
    scopes() {
      this.global.day = moment().day();
    }
  }, {
    highlighted: [3],
    note: () => (
      <div>
        This line creates an array that holds the names of each day of the week as {<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"> strings </a>}
      </div>
    ),
    scopes() {
      this.global.daylist = [
        'Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
      ];
    }
  }, {
    highlighted: [5],
    note: `Here, we log out "Today is: ${moment().format('dddd')}" to the console. Since we stored ${moment().day()} in our variable "day", we can use it to get the value at the ${moment().format('do')} index of our "daylist" array.`
  }, {
    highlighted: [7, 8, 9],
    note: 'Now, lets store the current hour, minute, and second in variables as numbers so we can use them below',
    scopes() {
      let { today } = this.global;
      this.global.hour = today.getHours();
      this.global.minute = today.getMinutes();
      this.global.second = today.getSeconds();
    }
  }, {
    highlighted: [10],
    note: 'Next, we\'ll create a variable "prepend" that will help us decide whether to print out "AM" or "PM" below',
    scopes() {
      this.global.prepend = this.global.hour >= 12 ? ' PM ' : ' AM ';
    }
  }, {
    highlighted: [12],
    note: 'Since the "hours" variable is the hour as it would be in military time (1-24 instead of 1-12), we need to turn it into an hour we\'d expect to see on our clock',
    scopes() {
      let { hour } = this.global;
      this.global.hour = ((hour >= 12) ? hour - 12 : hour);
    }
  }, {
    highlighted: [14, 15, 16, 17, 18, 19, 20, 21, 22],
    note: () => (
      <div>
        Here's a cool "if" statement...
        This tutorial is not quite complete...but that's ok because {<Clickable>this is clickable</Clickable>} (check your console)
      </div>
    ),
    scopes() {
      let { hour, minute, second } = this.global;
      // trolololol
      this.global.prepend = (hour === 0 && (hour >= 12 ? ' PM ' : ' AM ') === ' PM ' && minute === 0 && second === 0 ? 'Noon' : ' PM ');
    }
  }, {
    highlighted: [24, 25, 26, 27, 28, 29, 30, 31, 32],
    scopes() {
      let { hour, minute, second } = this.global;
      // trolololol
      this.global.prepend = (hour === 0 && (hour >= 12 ? ' PM ' : ' AM ') === ' AM ' && minute === 0 && second === 0 ? 'Midnight' : ' PM ');
    }
  }, {
    highlighted: [34],
  },
];

export default { code, steps };
