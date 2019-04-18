import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  return (
    <div>
      <style jsx>{`
          div {
            text-align: center;
            margin: 10px
          }
            `}</style>
      <Link to="/">About</Link> | <Link to="/newticket">Careers</Link> | <Link to="/support">Our Team</Link> | <Link to="/support">Location</Link>
    </div>
  );
}

export default Nav;
