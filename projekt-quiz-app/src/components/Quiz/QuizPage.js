// import './QuizPages.css';
import { useParams } from 'react-router-dom';
import quizzes from '../../data/quizzes.json';

const QuizPage = () => {
  const { title } = useParams();
  const quiz = quizzes.filter((q) => q.title === title)[0];
  return (
    <div>
      <h1>{quiz.title}</h1>
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <h2>{question.question}</h2>
          <ul>
            {question.answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizPage;
