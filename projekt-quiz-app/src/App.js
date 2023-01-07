import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/Home';
import { Quiz } from './pages/quiz/Quiz';
import { Result } from './pages/result/Result';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/quiz'>Quiz</Link>
          </li>
          <li>
            <Link to='/result'>Result</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
