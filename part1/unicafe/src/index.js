import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, bad, neutral}) => {
  let total = good + bad + neutral;
  let average = (good - bad) / total;
  let positive = (good / total) * 100;

    return (
      <div>
        <p>Good: {good}</p>
        <p>Bad: {bad}</p>
        <p>Neutral: {neutral}</p>
        <p>All: {total}</p>
        <p>Average: {average ? average : 0}</p>
        <p>Positive: {positive ? positive : 0}%</p>
      </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
