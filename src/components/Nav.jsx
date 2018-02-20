import React from 'react';

const Nav = (props) => (
  <nav>
    <span>top nav</span>

    <button onClick={() => props.history.push('/world')}>
      {props.location.pathname}
    </button>
  </nav>
);

export default Nav;
