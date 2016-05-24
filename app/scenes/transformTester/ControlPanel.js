import React, { PropTypes } from 'react';

import Slider, { StandardSlider, DegreesSlider } from './components/Slider';
import TransformBox from './components/TransformBox';

import styles from './styles.css';

const defaultState = {
  tx: 0, ty: 0, tz: 0,
  rx: 0, ry: 0, rz: 0,
  scx: 1, scy: 1, scz: 1,
  skx: 0, sky: 0,
  perspective: 1000,
};

const Controller = React.createClass({
  propTypes: {
    snapShot: PropTypes.func
  },

  getInitialState() {
    return defaultState;
  },

  reset() {
    this.setState(defaultState);
  },

  sendState(e) {
    e.preventDefault();
    this.props.snapShot({ ...this.state });
  },

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content} style={{ perspective: `${this.state.perspective}px` }}>
          <TransformBox
            tx={this.state.tx} ty={this.state.ty} tz={this.state.tz}
            perspective={this.state.perspective}
            rx={this.state.rx} ry={this.state.ry} rz={this.state.rz}
            scx={this.state.scx} scy={this.state.scy} scz={this.state.scz}
            skx={this.state.skx} sky={this.state.sky}
          />
        </div>
        <div className={styles.controls}>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.sendState}>SnapShot</button>
          <StandardSlider label="TransformX" valueLink={linkState(this, 'tx')} />
          <StandardSlider label="TransformY" valueLink={linkState(this, 'ty')} />
          <StandardSlider label="TransformZ" valueLink={linkState(this, 'tz')} />
          <DegreesSlider label="RotateX" valueLink={linkState(this, 'rx')} />
          <DegreesSlider label="RotateY" valueLink={linkState(this, 'ry')} />
          <DegreesSlider label="RotateZ" valueLink={linkState(this, 'rz')} />
          <StandardSlider label="ScaleX" valueLink={linkState(this, 'scx')} />
          <StandardSlider label="ScaleY" valueLink={linkState(this, 'scy')} />
          <StandardSlider label="ScaleZ" valueLink={linkState(this, 'scz')} />
          <DegreesSlider label="SkewX" valueLink={linkState(this, 'skx')} />
          <DegreesSlider label="SkewY" valueLink={linkState(this, 'sky')} />
          <Slider
            label="Perspective" valueLink={linkState(this, 'perspective')}
            max={1000} min={0} step={10}
          />
        </div>
      </div>
    );
  }
});

export default Controller;

// https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112#.ej8992zvk
function linkState(component, attr) {
  return {
    value: component.state[attr],
    set(x) {
      component.setState({ [attr]: x });
    }
  };
}
