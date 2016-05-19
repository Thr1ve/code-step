import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Visualizer from '../Visualiser';

storiesOf('Visualizer', module)
  .add('with text', () => (
    <Visualizer
      data={{ global: { foo: 'bar', beep: 'boop' } }}
      useHljs='false'
    />
));
