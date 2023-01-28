import React, { useState } from 'react';

const MultipleChoice = ({
  question,
  answers,
  selectedAnswers,
  handleAnswerSelection,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      {answers.map((answer, index) => (
        <div key={index}>
          <input
            type='checkbox'
            name={question}
            id={answer.answer}
            value={answer.answer}
            checked={selectedAnswers.includes(answer.answer)}
            onChange={() => handleAnswerSelection(answer.answer)}
          />
          <label htmlFor={answer.answer}>{answer.answer}</label>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;
