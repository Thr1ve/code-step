// TODO: split to own module
import 'mousetrap';
import React from 'react';

const Keybindings = React.createClass({
  componentDidMount() {
    const { keyMap } = this.props;
    for (let key in keyMap) {
      Mousetrap.bind(key, keyMap[key]);
    }
  },

  componentWillUnmount() {
    const { keyMap } = this.props;
    for (var key in keyMap){
      Mousetrap.unbind(key);
    }
  },

  render() {
    return <span>{this.props.children}</span>;
  }
});

export default Keybindings
