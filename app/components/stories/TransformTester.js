import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import TransformTester from 'scenes/transformTester';

storiesOf('transform', module)
  .add('accross screen', () => (
    <TransformTester />
  ));
