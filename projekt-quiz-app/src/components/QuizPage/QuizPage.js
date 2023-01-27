// import './QuizPages.css';
import { useParams } from 'react-router-dom';
import quizzes from '../../data/quizzes.json';

const QuizPage = () => {
  const { title } = useParams();
  const quiz = quizzes.filter((q) => q.title === title)[0];
  const questions = quiz.questions;
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  return (
    <>
      <h1>{quiz.title}</h1>
      {shuffledQuestions.map((question, index) => (
        <div key={index}>
          <h2>{question.question}</h2>
          <div>
            {question.answers
              .sort(() => Math.random() - 0.5)
              .map((answer, i) => (
                <div key={i}>
                  <label>{answer}</label>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default QuizPage;
