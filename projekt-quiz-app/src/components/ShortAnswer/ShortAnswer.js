import React, { useState } from 'react';

const ShortAnswer = ({ question, handleAnswerSelection }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAnswerSelection(answer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{question}</p>
      <input
        type='text'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ShortAnswer;
