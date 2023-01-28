const TrueFalse = ({
  question,
  answer,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  return (
    <div>
      <p>{question}</p>
      <div>
        <input
          type='radio'
          id='true'
          name='answer'
          value={true}
          checked={selectedAnswer === true}
          onChange={() => handleAnswerSelection(true)}
        />
        <label htmlFor='true'>True</label>
      </div>
      <div>
        <input
          type='radio'
          id='false'
          name='answer'
          value={false}
          checked={selectedAnswer === false}
          onChange={() => handleAnswerSelection(false)}
        />
        <label htmlFor='false'>False</label>
      </div>
    </div>
  );
};

export default TrueFalse;
