import './App.css';
import QuizList from './components/QuizList/QuizList';
import quizzes from './data/quizzes.json';

const App = () => {
  return (
    <>
      <div className='App'>
        <QuizList quizzes={quizzes} />
      </div>
    </>
  );
}

export default App;
