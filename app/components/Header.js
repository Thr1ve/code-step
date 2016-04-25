import React from 'react';
import { Link } from 'react-router';

const Header = ({ previous, next }) => (
  <header className="header">
    <div className="container">
      <div className="header-left">
        <Link className="header-item" to="/"> Index </Link>
        <Link className="header-item" to="/test"> Testing </Link>
      </div>

      <div className="header-right header-menu">
        <span className="header-item">
          <button onClick={previous} className="button is-success">
            <span className="icon">
              <i className="fa fa-backward"></i>
            </span>
          </button>
        </span>
        <span className="header-item">
          <button onClick={next} className="button is-success">
            <span className="icon">
              <i className="fa fa-forward"></i>
            </span>
          </button>
        </span>
      </div>
    </div>
  </header>
);

export default Header;
