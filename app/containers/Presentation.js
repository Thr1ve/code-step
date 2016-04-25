import React from 'react';
import { render } from 'react-dom';
import { Markdown, Deck, Slide, Spectacle } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Keybindings from './Keybindings';

import code from '../code';

const createTheme = require('spectacle/lib/themes/default')['default'];
const theme = createTheme({
  primary: 'white',
  quartenary: '#122b45'
});

const keyMap = {
  'esc': (e) => {
    e.preventDefault()
    console.log('hello world');
  },
  'tab': (e) => {e.preventDefault()},
  'shift+tab': (e) => {e.preventDefault()}
}

const Presentation = React.createClass({
  render() {
    return (
      <Keybindings keyMap={keyMap}>
        <Spectacle theme={theme}>
          <Deck transition={[]} transitionDuration={0} progress="bar">
            <Slide>
              <Markdown>
  {`* hi
  * hi there
  * how are you`}
              </Markdown>
            </Slide>
            <CodeSlide transition={[]} lang="js" code={code} ranges={[
              { loc: [0, 5], title: 'While Loop' },
              {
                loc: [0, 1],
                note: 'First, we declare a variable "i" and set it to 0',
                noteTop: 'i:0'
              },
              {
                loc: [1, 2],
                note: 'Next, we begin our while-loop, passing in a condition that will evaluate to true as long as "i" is less than 3',
                noteTop: 'i:0'
              },
              {
                loc: [2, 3],
                note: 'We need to increment "i"; otherwise, we risk causing an infinite loop',
                noteTop: 'i:1'
              },
              {
                loc: [3, 4],
                note: 'Now that we have finished one iteration, we will return to the top of the loop and check our condition again',
                noteTop: 'i:1'
              },
              {
                loc: [1, 2],
                noteTop: 'i:1'
              },
              {
                loc: [2, 3],
                noteTop: 'i:2'
              },
              {
                loc: [3, 4],
                noteTop: 'i:2'
              },
              {
                loc: [1, 2],
                noteTop: 'i:2'
              },
              {
                loc: [ 2, 3],
                noteTop: 'i:3'
              },
              {
                loc: [ 3, 4],
                noteTop: 'i:3'
              },
              {
                loc: [1, 2],
                note: 'This time, since "i" is not less than 3, our condition will now evaluate to false...',
                noteTop: 'i:3'
              },
              {
                loc: [ 3, 4],
                note: '...and we skip down to the code after the while loop',
                noteTop: 'i:3'
              },
              {
                loc: [ 4, 5],
                note: '// -> 3',
              },
            ]}
          />
          </Deck>
        </Spectacle>
      </Keybindings>
    );
  }
})

export default Presentation;


