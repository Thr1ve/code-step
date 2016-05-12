import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

const boxStyle = {
  height: '150px',
  width: '150px',
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
    {valueLink.value}
  </label>;

const TransformBox = ({
  perspective,
  tx, ty, tz,
  rx, ry, rz,
  scx, scy, scz,
  skx, sky
}) =>
  <div style={{
    ...boxStyle,
    transform: `
      translateX(${tx}vw)
      translateY(${ty}vh)
      translateZ(${tz}vh)
      rotateX(${rx}deg)
      rotateY(${ry}deg)
      rotateZ(${rz}deg)
      scaleX(${scx})
      scaleY(${scy})
      scaleZ(${scz})
      skewX(${skx}deg)
      skewY(${sky}deg)
    `
  }}>
    translateX: {tx}
    <br />
    translateY: {ty}
    <br />
    translateZ: {tz}
    <br />
    perspective: {perspective}
    <br />
    rotateX: {rx}
    <br />
    rotateY: {ry}
    <br />
    rotateY: {rz}
    <br />
    ScaleX: {scx}
    <br />
    ScaleY: {scy}
    <br />
    ScaleY: {scz}
    <br />
    SkewX: {skx}
    <br />
    SkewY: {sky}
  </div>;

const defaultValues = {
  tx: 0, ty: 0, tz: 0,
  rx: 0, ry: 0, rz: 0,
  scx: 1, scy: 1, scz: 1,
  skx: 0, sky: 0,
  perspective: 1000,
};

const Controller = React.createClass({
  getInitialState() {
    return defaultValues;
  },

  reset() {
    this.setState(defaultValues);
  },

  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ height: '80vh', width: '100vw', perspective: `${this.state.perspective}px`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <TransformBox
            tx={this.state.tx}
            ty={this.state.ty}
            tz={this.state.tz}
            perspective={this.state.perspective}
            rx={this.state.rx}
            ry={this.state.ry}
            rz={this.state.rz}
            scx={this.state.scx}
            scy={this.state.scy}
            scz={this.state.scz}
            skx={this.state.skx}
            sky={this.state.sky}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', height: '20vh' }}>
          <button onClick={this.reset}>Reset</button>
          <Slider label="TransformX" valueLink={linkState(this, 'tx')} max={100} min={-100} step={1} />
          <Slider label="TransformY" valueLink={linkState(this, 'ty')} max={100} min={-100} step={1} />
          <Slider label="TransformZ" valueLink={linkState(this, 'tz')} max={100} min={-100} step={1} />
          <Slider label="Perspective" valueLink={linkState(this, 'perspective')} max={1000} min={0} step={10} />
          <Slider label="RotateX" valueLink={linkState(this, 'rx')} max={180} min={-180} step={1} />
          <Slider label="RotateY" valueLink={linkState(this, 'ry')} max={180} min={-180} step={1} />
          <Slider label="RotateZ" valueLink={linkState(this, 'rz')} max={180} min={-180} step={1} />
          <Slider label="ScaleX" valueLink={linkState(this, 'scx')} max={100} min={0} step={0.5} />
          <Slider label="ScaleY" valueLink={linkState(this, 'scy')} max={100} min={0} step={0.5} />
          <Slider label="ScaleZ" valueLink={linkState(this, 'scz')} max={100} min={0} step={0.5} />
          <Slider label="SkewX" valueLink={linkState(this, 'skx')} max={180} min={-180} step={1} />
          <Slider label="SkewY" valueLink={linkState(this, 'sky')} max={180} min={-180} step={1} />
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
