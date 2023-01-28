import './QuizPage.css';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import quizzes from '../../data/quizzes.json';
import Question from '../Question/Question.js';
import Answer from '../Answer/Answer.js';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const { title } = useParams();
  const quiz = quizzes.filter((q) => q.title === title)[0];
  const questions = quiz.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const answers = currentQuestion.answers;

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      // show final score
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  return (
    <div className='quiz-page'>
      <Question question={currentQuestion} />
      {answers.map((answer, index) => (
        <Answer
          key={index}
          answer={answer}
          handleClick={handleAnswerClick}></Answer>
      ))}
    </div>
  );
};

export default QuizPage;
