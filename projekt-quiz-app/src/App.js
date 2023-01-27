import './App.css';
import QuizList from './components/QuizList/QuizList';
import quizzes from './data/quizzes.json';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<QuizList quizzes={quizzes} />} />
      </Routes>
    </>
  );
};

export default App;
