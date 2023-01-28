import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import quizzes from '../helpers/quizzes.json';
import { QuizContext } from '../helpers/Contexts';

const QuizPage = () => {
  const { score, setScore } = useContext(QuizContext);

  const { title } = useParams();
  const quiz = quizzes.find((q) => q.title === title);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const nexQuestion = () => {
    if (optionChosen === true) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    alert(score);
  };

  return (
    <>
      <div>
        <h1>{quiz.title}</h1>
        <div>
          <h3>{quiz.questions[currentQuestion].question}</h3>
          {quiz.questions[currentQuestion].answers.map((answer, index) => (
            <button key={index} onClick={() => setOptionChosen(answer.correct)}>
              {answer.answer}
            </button>
          ))}
        </div>
      </div>
      <button onClick={nexQuestion}> NEXT</button>
    </>
  );
};

export default QuizPage;
