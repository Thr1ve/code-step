import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

const style = {
  fontSize: '0.35%',
  // in <pre>
  // fontSize: '3.18vh'
  // fontSize: '1.66vw'

  // normal
  // fontSize: '4.89vh'
  // fontSize: '2.56vw'
};


const str = 'This is exactly 100 characters. This is exactly 100 characters. This is exactly 100 characters. Th$';
const Test = React.createClass({
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {Array.from({ length: 100 }).map((v, i) =>
            <div
              key={i}
              style={{
                fontFamily: 'monospace',
                fontSize: '1.9vw',
                // width: '1vw',
                // border: '0.05px solid black',
                // background: 'blue'
              }}
            >{str[i]}</div>)}
        </div>
      </div>
    );
  }
});

const Test2 = React.createClass({
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {Array.from({ length: 100 }).map((v, i) =>
            <div
              key={i}
              style={{
                height: '1vw',
                width: '1vw',
                border: '0.05px solid black',
                // background: 'blue'
              }}
            ></div>)}
        </div>
      </div>
    );
  }
});

storiesOf('vw', module)
  .add('accross screen with letters', () => (
    <Test />
  ))
  .add('accross screen with just boxes', () => (
    <Test2 />
  ))
  .add('big letter', () => (
        <div style={{ fontSize: '100vw' }}>
            W
        </div>
  ));
