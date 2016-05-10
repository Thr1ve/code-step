import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

const boxStyle = {
  height: '100px',
  width: '100px',
  background: 'lightblue',
  fontSize: '8px',
  transformStyle: 'preserve-3d'
};

const Slider = ({ valueLink, label = '', ...props }) =>
  <label> {label}
    <input
      {...props}
      type="range"
      value={valueLink.value}
      onChange={e => {
        valueLink.set(e.target.value);
      }}
    />
  </label>;

const TransformBox = ({ x, y, z, perspective }) =>
  <div style={{
    ...boxStyle,
    transform: `
      translateX(${x}vw)
      translateY(${y}vh)
      translateZ(${z}vh)
    `
  }}
>
    translateX: {x}
    <br />
    translateY: {y}
    <br />
    translateZ: {z}
    <br />
    perspective: {perspective}
  </div>;

const Controller = React.createClass({
  getInitialState() {
    return {
      tx: 1,
      ty: 1,
      tz: 1,
      perspective: 1,
    };
  },

  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ height: '80vh', width: '100vw', perspective: `${this.state.perspective}px`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <TransformBox
            x={this.state.tx}
            y={this.state.ty}
            z={this.state.tz}
            perspective={this.state.perspective}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', height: '20vh' }}>
          <Slider label="X" valueLink={linkState(this, 'tx')} max={100} min={0} step={0.5} />
          <Slider label="Y" valueLink={linkState(this, 'ty')} max={100} min={0} step={0.5} />
          <Slider label="Z" valueLink={linkState(this, 'tz')} max={500} min={0} step={10} />
          <Slider label="Perspective" valueLink={linkState(this, 'perspective')} max={1000} min={0} step={10} />
        </div>
      </div>
    );
  }
});

// https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112#.ej8992zvk
function linkState(component, attr) {
  return {
    value: component.state[attr],
    set(x) {
      component.setState({ [attr]: x });
    }
  };
}

storiesOf('transform', module)
  .add('accross screen', () => (
    <div>
      <Controller />
    </div>
  ));
