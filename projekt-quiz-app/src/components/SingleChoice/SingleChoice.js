import React, { useState } from 'react';

const SingleChoice = ({ question, answers }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      <h3>{question}</h3>
      {answers.map((answer, index) => (
        <div key={index}>
          <input
            type='radio'
            name={question}
            id={answer.answer}
            value={answer.answer}
            checked={selectedAnswer === answer.answer}
            onChange={() => handleAnswerSelection(answer.answer)}
          />
          <label htmlFor={answer.answer}>{answer.answer}</label>
        </div>
      ))}
    </div>
  );
};

export default SingleChoice;
