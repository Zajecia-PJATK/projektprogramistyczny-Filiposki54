import './App.css';
import { Route, Routes } from 'react-router-dom';
import QuizList from './components/QuizList/QuizList';
import QuizPage from './components/QuizPage/QuizPage';
import quizzes from './data/quizzes.json';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<QuizList quizzes={quizzes} />} />
        <Route path='/quizlist' element={<QuizList />} />
        <Route path='/quiz/:title' element={<QuizPage />} />
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  );
};

export default App;
