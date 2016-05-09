import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Layout from '../Layout';

storiesOf('Layout', module)
  .add('test', () => (
    <Layout />
  ))
