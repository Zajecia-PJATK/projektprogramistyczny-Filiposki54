import './styles/app.scss';
import React, { useState, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizList from './Pages/QuizList';
import QuizPage from './Pages/QuizPage';
import quizzes from './helpers/quizzes.json';
import Menu from './Pages/Menu';
import ScoreBoard from './Pages/ScoreBorad';
import { QuizContext } from './helpers/Contexts';

const App = () => {
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');

  return (
    <>
      <div className='app'>
        <QuizContext.Provider value={{ score, setScore, name, setName }}>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/quizList' element={<QuizList quizzes={quizzes} />} />
            <Route path='/quiz/:title' element={<QuizPage />} />
            <Route path='/addQuiz' element={<QuizPage />} />
            <Route path='/scoreBoard' element={<ScoreBoard />} />
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </QuizContext.Provider>
      </div>
    </>
  );
};

export default App;
