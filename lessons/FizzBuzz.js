import React from 'react';

// Examples from: http://ditam.github.io/posts/fizzbuzz/

export const code = (
`function fizzBuzz(){
  for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}`);

export const steps = [
  {
    highlighted: [],
    note: () => <div> Per usual, you can find the code for this CodeStep <a target='_blank' href='https://github.com/Thr1ve/code-step/blob/master/lessons/FizzBuzz.js'>here</a></div>,
    scopes() {
    }
  }, {
    // zoom: 0.9,
    highlighted: [1, 13],
    note: '[explain fizzBuzz problem]',
    scopes() {
    }
// first iteration
  }, {
    highlighted: [2, 12],
    note: 'To start, we\'ll simply loop through numbers 1 to 100 using a simple for-loop',
    scopes() {
      this.fizzBuzz = { i: 1 };
    }
  }, {
    highlighted: [3],
    note: 'Next, we\'ll check if i divides evenly into both 5 and 3. Since the value of currently 1, this conditional will not pass, and line 4 will not execute.',
    scopes() {
    }
  }, {
    highlighted: [5],
    note: 'Next, we\'ll check if i divides evenly into just 3. Again, this conditional will not pass, and line 6 will not execute.',
    scopes() {
    }
  }, {
    highlighted: [7],
    note: 'Next, we\'ll check if i divides evenly into just 5. Again, this conditional will not pass, and line 8 will not execute.',
    scopes() {
    }
  }, {
    highlighted: [9, 11],
    note: 'Since none of the conditionals in the above if statements passed, the code in our else block will now be executed.',
    scopes() {
    }
  }, {
    highlighted: [10],
    note: 'The current value of i (1) gets logged to the console!',
    scopes() {
    }
  }, {
// second iteration
    highlighted: [2],
    note: '[work in progress]',
    scopes() {
      this.fizzBuzz.i = 2;
    }
  }, {
    highlighted: [3],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [5],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [7],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [9, 11],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [10],
    note: '[work in progress]',
    scopes() {
    }
  }, {
// third iteration
    highlighted: [2],
    note: '[work in progress]',
    scopes() {
      this.fizzBuzz.i = 3;
    }
  }, {
    highlighted: [3],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [5],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [6],
    note: '[work in progress]',
    scopes() {
    }
  }, {
// fourth iteration
    highlighted: [2],
    note: '[work in progress]',
    scopes() {
      this.fizzBuzz.i = 4;
    }
  }, {
    highlighted: [3],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [5],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [7],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [9, 11],
    note: '[work in progress]',
    scopes() {
    }
  }, {
    highlighted: [10],
    note: '[work in progress]',
    scopes() {
    }
  }
];

export default {
  code,
  steps: steps.map(step => ({ ...step, zoom: 0.9 }))
};
