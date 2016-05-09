import React from 'react';
import { sidebar } from './styles.css';

const dummyVariableTrackerData = (
`x: y

aString: asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf

y: 60000000`);

const SideBar = React.createClass({
  render() {
    return (
      <div className={sidebar}>
        <pre>
          {dummyVariableTrackerData}
        </pre>
      </div>
    );
  }
});

export default SideBar;
