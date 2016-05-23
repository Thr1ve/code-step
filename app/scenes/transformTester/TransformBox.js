import React, { PropTypes } from 'react';

const boxStyle = {
  height: '150px',
  width: '150px',
  background: 'lightblue',
  fontSize: '8px',
  transformStyle: 'preserve-3d'
};

const TransformBox = ({
  perspective,
  tx, ty, tz, rx, ry, rz,
  scx, scy, scz, skx, sky
}) => <div
  style={{
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
    skewY(${sky}deg)`
  }}
      >
  <div>translateX: {tx} </div>
  <div>translateY: {ty} </div>
  <div>translateZ: {tz} </div>
  <div>perspective: {perspective} </div>
  <div>rotateX: {rx} </div>
  <div>rotateY: {ry} </div>
  <div>rotateY: {rz} </div>
  <div>ScaleX: {scx} </div>
  <div>ScaleY: {scy} </div>
  <div>ScaleY: {scz} </div>
  <div>SkewX: {skx} </div>
  <div>SkewY: {sky} </div>
</div>;

export default TransformBox;
