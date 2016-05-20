export const code = (`import React from 'react';
import moment from 'moment';

// source: http://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
export const code = (\`var today = new Date();
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

console.log('Current Time : ' + hour + prepend + ' : ' + minute + ' : ' + second);\`);

const getWord = (word) => word;

const Clickable = React.createClass({
  onClick() {
    console.log(\`hello from "\${this.props.children}"\`);
  },

  render() {
    return <span onClick={this.onClick}>{this.props.children}</span>;
  }
});

const createClickable = (text) => <Clickable>{text}</Clickable>;

// Idea: we could dispatch an event that would concat steps into our current steps array...this way we could load different paths depending on user input by doing something like \`dispatch(continue(pathA))\`

// Idea: Find a way to highlight certain lines of the code when a user hovers over, for instance, the words "line 1" in the note?
export const steps = [
  {
    highlighted: [1],
    note: (state, dispatch) => {
      console.log(state);
      return \`This line of code creates a new \${true ? getWord('Date') : getWord('BOOLEAN, BROSEPH')}!\`;
    }
  },
  {
    highlighted: [2],
    note: \`Here, we grab the day of the week as a number from the Date we made in line 1; since today is \${moment().format('dddd')}, our "day" variable will be assigned the value \${moment().day()} \`
  }, {
    highlighted: [3],
    // The word 'strings' below could A. link to MDN page or B. show a tooltip on hover ?
    note: 'This line creates an array that holds the names of each day of the week as strings'
  }, {
    highlighted: [5],
    note: \`Here, we log out "Today is: \${moment().format('dddd')}" to the console. Since we stored \${moment().day()} in our variable "day", we can use it to get the value at the \${moment().format('do')} index of our "daylist" array.\`
  }, {
    highlighted: [7, 8, 9],
    note: 'Now, lets store the current hour, minute, and second in variables as numbers so we can use them below'
  }, {
    highlighted: [10],
    note: 'Next, we\'ll create a variable "prepend" that will help us decide whether to print out "AM" or "PM" below'
  }, {
    highlighted: [12],
    note: 'Since the "hours" variable is the hour as it would be in military time (1-24 instead of 1-12), we need to turn it into an hour we\'d expect to see on our clock'
  }, {
    highlighted: [14, 15, 16, 17, 18, 19, 20, 21, 22],
    note: () => (
      <div>
        Here's a cool "if" statement. This tutorial is not quite complete...but that's ok because {<Clickable>this is clickable</Clickable>} (check your console)
      </div>
    )
  },
];

export default { code, steps };`);

export const steps = [
  {
    highlighted: [1],
    note: (state, dispatch) => {
      console.log(state);
      return 'Yo, dawg...I heard you like Code-Steps';
    }
  }
];

export default { code, steps };
