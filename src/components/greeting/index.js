import React from 'react';
import logo from '../../images/react-logo.png';
import './greeting.scss';

const Greeting = () => {
  return (
    <div>
      <h1 className="greeting">Hello World!</h1>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Greeting;