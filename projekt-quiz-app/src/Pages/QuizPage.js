import '../styles/quizPage.scss';
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
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  if (!showQuiz) {
    return (
      <div className='name-prompt-container'>
        <label className='name-prompt-label'>
          Name:
          <input type='text' value={name} onChange={handleChange} />
        </label>
        <button
          className='name-prompt-btn-submit'
          disabled={!name}
          onClick={() => setShowQuiz(true)}>
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <>
      <h1 className='quiz-title'>{quiz.title}</h1>
      {quiz.questions[currentQuestion].type === 'singleChoice' ? (
        <div className='quiz-container'>
          <h3 className='quiz-question'>
            {quiz.questions[currentQuestion].question}
          </h3>
          {quiz.questions[currentQuestion].answers.map((answer, index) => (
            <button
              className='quiz-answer-btn'
              key={index}
              onClick={() => setOptionChosen(answer.correct)}>
              {answer.answer}
            </button>
          ))}
        </div>
      ) : quiz.questions[currentQuestion].type === 'multipleChoice' ? (
        <div className='quiz-container'>
          <h3 className='quiz-question'>
            {quiz.questions[currentQuestion].question}
          </h3>
          {quiz.questions[currentQuestion].answers.map((answer, index) => (
            <div key={index}>
              <input
                className='quiz-checkbox'
                type='checkbox'
                value={answer.answer}
                onChange={() => setOptionChosen(answer.correct)}
              />
              {answer.answer}
            </div>
          ))}
        </div>
      ) : quiz.questions[currentQuestion].type === 'trueFalse' ? (
        <div className='quiz-container'>
          <h3 className='quiz-question'>
            {quiz.questions[currentQuestion].question}
          </h3>
          {quiz.questions[currentQuestion].answers.map((answer, index) => (
            <button
              className='quiz-answer-btn'
              key={index}
              onClick={() => setOptionChosen(answer.correct)}>
              {answer.answer}
            </button>
          ))}
        </div>
      ) : quiz.questions[currentQuestion].type === 'shortAnswer' ? (
        <div className='quiz-container'>
          <h3 className='quiz-question'>
            {quiz.questions[currentQuestion].question}
          </h3>
          <input
            className='quiz-input-text'
            type='text'
            onChange={(event) => {
              if (
                event.target.value ===
                quiz.questions[currentQuestion].answers[0].answer
              ) {
                setOptionChosen(
                  quiz.questions[currentQuestion].answers[0].correct
                );
              }
            }}
          />
        </div>
      ) : quiz.questions[currentQuestion].type === 'selectFromList' ? (
        <div className=' quiz-container'>
          <h3 className='quiz question'>
            {quiz.questions[currentQuestion].question}
          </h3>
          <select onChange={(e) => setOptionChosen(e.target.value)}>
            {quiz.questions[currentQuestion].answers.map((answer, index) => (
              <option
                className='quiz-answer-option'
                key={index}
                value={answer.answer}>
                {answer.answer}
              </option>
            ))}
          </select>
        </div>
      ) : quiz.questions[currentQuestion].type === 'fillInTheBlank' ? (
        <div className='quiz-container'>
          <h3 className='quiz-question'>
            {quiz.questions[currentQuestion].question}
          </h3>
          <input
            className='quiz-input-text'
            type='text'
            onChange={(event) => {
              if (
                event.target.value ===
                quiz.questions[currentQuestion].answers[0].answer
              ) {
                setOptionChosen(
                  quiz.questions[currentQuestion].answers[0].correct
                );
              }
            }}
          />
        </div>
      ) : (
        <></>
      )}

      {currentQuestion === quiz.questions.length - 1 ? (
        <Link to='/scoreBoard'>
          <button className='quiz-finish-btn' onClick={nexQuestion}>
            Finish
          </button>
        </Link>
      ) : (
        <button className='quiz-next-btn' onClick={nexQuestion}>
          NEXT
        </button>
      )}
    </>
  );
};

export default QuizPage;
