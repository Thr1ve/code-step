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

let today = new Date();

// Here's our array of "steps"!
// A step is simply an object that specifies...
//   - what lines should be highlighted in the code
//   - what the displayed note will be
//   - what the scopes object in the side-bar should contain
export const steps = [
  {
    highlighted: [],
    // our "note" property can be a function that returns JSX
    note: () => (
      <div>
        Hello! Click Next / Previous to step through the lesson. The code for this lesson can be found {<a target="_blank" href="https://github.com/Thr1ve/code-step/blob/master/lessons/test1.js">here</a>}
      </div>
    ),
    scopes: {
      global: {}
    }
  }, {
    highlighted: [1],
    // our "note" property also has the current application state and the dispatch function available as parameters if you want!
    note: (state, dispatch) => {
      console.log(state);
      return `This line of code creates a new ${typeof state === 'object' ? 'Date' : 'BOOLEAN, BROSEPH'}!`;
    },
    // We only need to describe what is new/changed for our scopes property; code-step will take care of the rest
    scopes: {
      global: {
        today: today
      }
    }
  }, {
    highlighted: [2],
    // We can also make our note property a simple string!
    note: `Here, we grab the day of the week as a number from the Date we made in line 1; since today is ${moment().format('dddd')}, our "day" variable will be assigned the value ${moment().day()} `,
    scopes: {
      global: {
        day: moment().day()
      }
    }
  }, {
    highlighted: [3],
    note: () => (
      <div>
        This line creates an array that holds the names of each day of the week as {<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"> strings </a>}
      </div>
    ),
    scopes: {
      global: {
        daylist: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      }
    }
  }, {
    highlighted: [5],
    note: `Here, we log out "Today is: ${moment().format('dddd')}" to the console. Since we stored ${moment().day()} in our variable "day", we can use it to get the value at the ${moment().format('do')} index of our "daylist" array.`
  }, {
    highlighted: [7, 8, 9],
    note: 'Now, lets store the current hour, minute, and second in variables as numbers so we can use them below',
    scopes: {
      global: {
        hour: today.getHours(),
        minute: today.getMinutes(),
        second: today.getSeconds()
      }
    }
  }, {
    highlighted: [10],
    note: 'Next, we\'ll create a variable "prepend" that will help us decide whether to print out "AM" or "PM" below',
    scopes: {
      global: {
        prepend: (today.getHours() >= 12 ? ' PM ':' AM ')
      }
    }
  }, {
    highlighted: [12],
    note: 'Since the "hours" variable is the hour as it would be in military time (1-24 instead of 1-12), we need to turn it into an hour we\'d expect to see on our clock',
    scopes: {
      global: {
        hour: ((today.getHours() >= 12) ? today.getHours() - 12 : today.getHours())
      }
    }
  }, {
    highlighted: [14, 15, 16, 17, 18, 19, 20, 21, 22],
    note: () => (
      <div>
        Here's a cool "if" statement...
        This tutorial is not quite complete...but that's ok because {<Clickable>this is clickable</Clickable>} (check your console)
      </div>
    ),
    scopes: {
      global: {
        // trolololol
        prepend: (today.getHours() === 0 && (today.getHours() >= 12 ? ' PM ':' AM ') === ' PM ' && today.getMinutes() === 0 && today.getSeconds() === 0 ? 'Noon' : ' PM ')
      }
    }
  }, {
    highlighted: [24, 25, 26, 27, 28, 29, 30, 31, 32],
    scopes: {
      global: {
        // trolololol
        prepend: (today.getHours() === 0 && (today.getHours() >= 12 ? ' PM ':' AM ') === ' AM ' && today.getMinutes() === 0 && today.getSeconds() === 0 ? 'Midnight' : ' PM ')
      }
    }
  }, {
    highlighted: [34],
  },
];

export default { code, steps };
