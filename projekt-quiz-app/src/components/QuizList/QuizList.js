import './QuizList.css';
import React, { useEffect, useState } from 'react';
const QuizList = ({ quizzes }) => {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    setQuizList(quizzes);
  }, [quizzes]);

  return (
    <>
      <div className='quizlist'>
        <h1>QuizList</h1>
        <ul>
          {quizList.map((quiz, index) => (
            <li key={index}>{quiz.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuizList;
