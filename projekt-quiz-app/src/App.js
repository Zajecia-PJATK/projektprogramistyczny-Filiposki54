import './App.css';
import { Route, Routes } from 'react-router-dom';
import QuizList from './components/QuizList/QuizList';
import Quiz from './components/Quiz/Quiz';
import quizzes from './data/quizzes.json';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<QuizList quizzes={quizzes} />} />
        <Route path='/quiz/:title' element={<Quiz />} />
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  );
};

export default App;
