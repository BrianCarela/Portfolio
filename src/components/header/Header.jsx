import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Brian Carela</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
      </div>
    </header>
  );
};

export default Header;
