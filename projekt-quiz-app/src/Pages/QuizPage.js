import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import quizzes from '../helpers/quizzes.json';
const QuizPage = () => {
  const { title } = useParams();
  const quiz = quizzes.find((q) => q.title === title);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <div>{quiz.title}</div>
    </>
  );
};

export default QuizPage;
