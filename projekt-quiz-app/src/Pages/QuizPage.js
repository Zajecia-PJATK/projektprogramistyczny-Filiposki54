import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import quizzes from '../helpers/quizzes.json';
import { QuizContext } from '../helpers/Contexts';

const QuizPage = () => {
  const { score, setScore, name, setName } = useContext(QuizContext);

  const { title } = useParams();
  const quiz = quizzes.find((q) => q.title === title);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const [showQuiz, setShowQuiz] = useState(false);

  const nexQuestion = () => {
    if (optionChosen === true) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    alert(score);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  if (!showQuiz) {
    return (
      <div>
        <label>
          Name:
          <input type='text' value={name} onChange={handleChange} />
        </label>
        <button disabled={!name} onClick={() => setShowQuiz(true)}>
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <>
      {quiz.questions[currentQuestion].type === 'singleChoice' ? (
        <div>
          <h1>{quiz.title}</h1>
          <div className='singleChoice'>
            <h3>{quiz.questions[currentQuestion].question}</h3>
            {quiz.questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => setOptionChosen(answer.correct)}>
                {answer.answer}
              </button>
            ))}
          </div>
        </div>
      ) : quiz.questions[currentQuestion].type === 'multipleChoice' ? (
        <div>
          <h1>{quiz.title}</h1>
          <div className='multipleChoice'>
            <h3>{quiz.questions[currentQuestion].question}</h3>
            {quiz.questions[currentQuestion].answers.map((answer, index) => (
              <div key={index}>
                <input
                  type='checkbox'
                  value={answer.answer}
                  onChange={() => setOptionChosen(answer.correct)}
                />
                {answer.answer}
              </div>
            ))}
          </div>
        </div>
      ) : quiz.questions[currentQuestion].type === 'trueFalse' ? (
        <div>
          <h1>{quiz.title}</h1>
          <div className='trueFalse'>
            <h3>{quiz.questions[currentQuestion].question}</h3>
            {quiz.questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => setOptionChosen(answer.correct)}>
                {answer.answer}
              </button>
            ))}
          </div>
        </div>
      ) : quiz.questions[currentQuestion].type === 'shortAnswer' ? (
        <div>
          <h1>{quiz.title}</h1>
          <div className='shortAnswer'>
            <h3>{quiz.questions[currentQuestion].question}</h3>
            <input
              type='text'
              onChange={(event) => setOptionChosen(event.target.value)}
            />
          </div>
        </div>
      ) : quiz.questions[currentQuestion].type === 'selectFromList' ? (
        <div>
          <h1>{quiz.title}</h1>
          <div className='selectFromList'>
            <h3>{quiz.questions[currentQuestion].question}</h3>
            <select onChange={(e) => setOptionChosen(e.target.value)}>
              {quiz.questions[currentQuestion].answers.map((answer, index) => (
                <option key={index} value={answer.answer}>
                  {answer.answer}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : quiz.questions[currentQuestion].type === 'fillInTheBlank' ? (
        <div>
          <h1>{quiz.title}</h1>
          <div className='fillInTheBlank'>
            <h3>{quiz.questions[currentQuestion].question}</h3>
            <form>
              <input
                type='text'
                onChange={(event) => setOptionChosen(event.target.value)}
              />
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}

      {currentQuestion === quiz.questions.length - 1 ? (
        <Link to='/scoreBoard'>
          <button onClick={nexQuestion}>Finish</button>
        </Link>
      ) : (
        <button onClick={nexQuestion}> NEXT</button>
      )}
    </>
  );
};

export default QuizPage;
