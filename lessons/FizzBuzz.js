import React from 'react';

// Examples from: http://ditam.github.io/posts/fizzbuzz/

export const code = (
`function fizzBuzz(){
  for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0){
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
    note: () => (
      <div>
      </div>
    ),
    scopes() {
    }
  }, {
    highlighted: [1],
    note: (dispatch, state) => {
    },
    scopes() {
    }
  }, {
    highlighted: [2],
    note: ``,
    scopes() {
    }
  }
];

export default { code, steps };
