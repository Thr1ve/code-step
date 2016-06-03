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
    zoom: 0.9,
    highlighted: [1, 13],
    note: `work in progress`,
    scopes() {
    }
// first iteration
  }, {
    highlighted: [2, 12],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz = { i: 1 };
    }
  }, {
    highlighted: [3, 4],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [5, 6],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [7, 8],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [9, 10, 11],
    note: `work in progress`,
    scopes() {
    }
  }, {
// second iteration
    highlighted: [2],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz.i = 2;
    }
  }, {
    highlighted: [3, 4],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [5, 6],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [7, 8],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [9, 10, 11],
    note: `work in progress`,
    scopes() {
    }
  }, {
// third iteration
    highlighted: [2],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz.i = 3;
    }
  }, {
    highlighted: [3, 4],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [5, 6],
    note: `work in progress`,
    scopes() {
    }
  }, {
// fourth iteration
    highlighted: [2],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz.i = 4;
    }
  }, {
    highlighted: [3, 4],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [5, 6],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [7, 8],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [9, 10, 11],
    note: `work in progress`,
    scopes() {
    }
  }
];

export default { code, steps };
