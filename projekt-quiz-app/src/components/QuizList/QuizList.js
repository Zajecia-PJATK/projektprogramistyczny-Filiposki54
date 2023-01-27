import './QuizList.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <li key={index}>
              <Link to={`/quiz/${quiz.title}`}>{quiz.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuizList;
