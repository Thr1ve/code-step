import React from 'react';
import { connect } from 'react-redux';

import Line from '../components/Line';
import { initialize, updateHighlights } from '../actions';

import code from '../code';

const TestContainer = React.createClass({
  componentDidMount() {
    this.props.dispatch(initialize(code.split('\n')));
    this.props.dispatch(updateHighlights([1, 2, 4]));
  },

  render() {
    const { lines } = this.props
    return (
      <div>
        <pre>
          {lines.map((line, i) => <Line key={i} {...line} />)}
        </pre>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    lines: state.code.lines
  }
}

export default connect(mapStateToProps)(TestContainer);
