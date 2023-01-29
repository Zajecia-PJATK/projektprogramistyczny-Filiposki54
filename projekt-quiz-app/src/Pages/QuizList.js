import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const QuizList = ({ quizzes }) => {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    setQuizList(quizzes);
  }, [quizzes]);

  return (
    <>
      <div className='quiz-list-container'>
        <h1 className='quiz-list-header'>QuizList</h1>
        <ul className='quiz-list'>
          {quizList.map((quiz, index) => (
            <li className='quiz-list-element' key={index}>
              <Link to={`/quiz/${quiz.title}`}>{quiz.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuizList;
