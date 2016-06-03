import React from 'react';

// Examples from: http://ditam.github.io/posts/fizzbuzz/

export const code = (
`function fizzBuzz(){
  var output;
  for(var i=1;i<=100;i++){
    output = '';
    if(i%3 === 0){
      output+='Fizz';
    }
    if(i%5 === 0){
      output+='Buzz';
    }
    if(output === '') {
      output+=i;
    }
    print(output);
  }
}`);

export const steps = [
  {
    highlighted: [1, 16],
    note: `work in progress`,
    scopes() {
    }
// first iteration
  }, {
    highlighted: [2],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz = { i: 1 };
    }
  }, {
    highlighted: [3, 15],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz = { i: 1 };
    }
  }, {
    highlighted: [4],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [5, 7],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [8, 10],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [11, 13],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [14],
    note: `work in progress`,
    scopes() {
    }
  }, {
// second iteration
    highlighted: [2],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz = { i: 1 };
    }
  }, {
    highlighted: [3, 15],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz = { i: 1 };
    }
  }, {
    highlighted: [4],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [5, 7],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [8, 10],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [11, 13],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [14],
    note: `work in progress`,
    scopes() {
    }
  }, {
// third iteration
    highlighted: [2],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz = { i: 1 };
    }
  }, {
    highlighted: [3, 15],
    note: `work in progress`,
    scopes() {
      this.fizzBuzz = { i: 1 };
    }
  }, {
    highlighted: [4],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [5, 7],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [8, 10],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [11, 13],
    note: `work in progress`,
    scopes() {
    }
  }, {
    highlighted: [14],
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

export default {
  code,
  steps: steps.map(step => ({ ...step, zoom: 0.5 }))
};
