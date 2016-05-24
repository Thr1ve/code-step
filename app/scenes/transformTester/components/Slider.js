import React, { PropTypes } from 'react';

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

Slider.propTypes = {
  valueLink: PropTypes.object,
  label: PropTypes.string
};

export default Slider;

export const StandardSlider = ({ label, valueLink, ...props }) =>
  <Slider label={label} valueLink={valueLink} max={100} min={-100} step={1} {...props} />;

StandardSlider.propTypes = {
  valueLink: PropTypes.object,
  label: PropTypes.string
};

export const DegreesSlider = ({ label, valueLink, ...props }) =>
  <Slider label={label} valueLink={valueLink} max={180} min={-180} step={1} {...props} />;

DegreesSlider.propTypes = {
  valueLink: PropTypes.object,
  label: PropTypes.string
};
