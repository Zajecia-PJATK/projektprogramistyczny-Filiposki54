import './Quiz.css';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { title } = useParams();
  return <h1>{title}</h1>;
};

export default Quiz;
