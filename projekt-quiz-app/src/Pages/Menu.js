import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='Menu'>
      <h1>Menu</h1>
      <Link to='/quizList'>Zagraj</Link>
      <br></br>
      <Link to='/addQuiz'>Dodaj własny Quiz</Link>
    </div>
  );
};

export default Menu;
