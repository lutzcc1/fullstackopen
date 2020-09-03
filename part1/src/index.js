import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => (
  <div>
    <p>Hello, {props.name} {props.lastName}</p>
  </div>
)

const App = () => {
  const now = new Date();
  return (
    <div>
      <h1>I rock!</h1>
      <Hello name="Luis" lastName="César"/>
      <Hello name="Frank" lastName="Underwood"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
