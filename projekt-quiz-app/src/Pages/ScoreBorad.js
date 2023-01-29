import React, { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from '../helpers/Contexts';

const initialState = [];

const scoreBoardReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state, action.payload];
    default:
      return state;
  }
};

const ScoreBoard = () => {
  const [scoreBoard, dispatch] = useReducer(scoreBoardReducer, initialState);
  const { score, setScore, name, setName } = useContext(QuizContext);

  const saveScore = () => {
    setScore(0);
    setName('');
    dispatch({
      type: 'ADD_PLAYER',
      payload: { name: name, score: score },
    });
  };
  return (
    <>
      <h2>Twój wynik:{score}</h2>
      <button onClick={saveScore}>Zapisz wynik</button>
      <Link to='/'>Wróć do strony głównej</Link>
      <div>
        {scoreBoard.map((player, index) => (
          <div key={index}>
            <p>
              {player.name}:{player.score}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ScoreBoard;
