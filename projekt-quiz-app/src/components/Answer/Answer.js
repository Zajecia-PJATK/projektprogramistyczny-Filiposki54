import React, { useState } from 'react';
import './Answer.css';

const Answer = ({ answer, handleClick }) => {
  return (
    <div className='answer'>
      <button onClick={() => handleClick(answer.isCorrect)}>{answer}</button>
    </div>
  );
};

export default Answer;
