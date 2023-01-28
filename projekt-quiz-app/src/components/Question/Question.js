import React, { useState } from 'react';
import './Question.css';

const Question = ({ question }) => {
  return (
    <div className='question'>
      <h3>{question.question}</h3>
    </div>
  );
};

export default Question;
