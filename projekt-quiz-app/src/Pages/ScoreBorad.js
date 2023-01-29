import React, { useContext } from 'react';
import { QuizContext } from '../helpers/Contexts';

const ScoreBoard = () => {
  const { score, setScore, name, setName } = useContext(QuizContext);

  const restartScore = () => {
    setScore(0);
  };
  return (
    <>
      <h2>{score}</h2>
      <button onClick={restartScore}>Save and return</button>
    </>
  );
};

export default ScoreBoard;
