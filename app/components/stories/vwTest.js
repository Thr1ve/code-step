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

const Test = React.createClass({
  render() {
    return (
      <div>
        <pre style={style}>
          This is exactly 100 characters. This is exactly 100 characters. This is exactly 100 characters. Th$
        </pre>
        <div style={{ display: 'flex' }}>
          {Array.from({ length: 100 }).map((v, i) =>
            <div
              key={i}
              style={{
                fontSize: '0.35%',
                margin: '0.5px',
                height: '1vw',
                width: '1vw',
                // border: '0.05px solid black',
                // background: 'blue'
              }}
    >i</div>)}
        </div>
        <div style={{ fontSize: '100vw' }}>
            W
        </div>
      </div>
    );
  }
});

storiesOf('vw', module)
  .add('accross screen', () => (
    <Test />
  ));
