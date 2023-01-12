import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const [quizId, setQuizId] = useState(null);
  const [name, setName] = useState('');

  const handleQuizSelection = (id) => {
    setQuizId(id);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please enter your name.');
      return;
    }
    // redirect to quiz
  };

  if (quizId) {
    return (
      <div>
        <form onSubmit={handleNameSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <p>Please select a quiz:</p>
      <ul>
        <li onClick={() => handleQuizSelection(1)}>Quiz 1</li>
        <li onClick={() => handleQuizSelection(2)}>Quiz 2</li>
        <li onClick={() => handleQuizSelection(3)}>Quiz 3</li>
      </ul>
    </div>
  );
};

export default Home;
