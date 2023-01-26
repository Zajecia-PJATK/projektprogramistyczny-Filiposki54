import './App.css';
import QuizList from './components/QuizList/QuizList';
import quizzes from './data/quizzes.json';

function App() {
  return (
    <>
      <div className='App'>
        <QuizList quizzes={quizzes} />
      </div>
    </>
  );
}

export default App;
