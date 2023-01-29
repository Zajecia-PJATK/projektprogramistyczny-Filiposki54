import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menu-header'>Menu</h1>
      <Link to='/quizList'>
        <span className='menu-link'>Zagraj</span>
      </Link>
    </div>
  );
};

export default Menu;
