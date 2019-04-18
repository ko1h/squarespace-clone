import React from 'react';
import boardroom from '../assets/img/board-room.jpg';


function Header() {
  var boardStyle = {
    width: '100%',
    height: '660px'

  };
  return(
    <div>
      <img style={boardStyle} src={boardroom}/>
    </div>
  );
}

export default Header;
