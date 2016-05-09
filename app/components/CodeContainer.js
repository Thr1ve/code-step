import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';
import 'brace/keybinding/vim';

// Render editor
const CodeContainer = React.createClass({
  onChange(newValue) {
    console.log('change', newValue);
  },

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="solarized_dark"
        keyboardHandler="vim"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
      />
    )
  }
});

export default CodeContainer;


