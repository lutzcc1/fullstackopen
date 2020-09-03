import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course}/>
      <Content part1={part1} part2={part2} part3={part3} e1={exercises1} e2={exercises2} e3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) => (
  <h1>{ props.title }</h1>
);

const Content = (props) => (
  <div>
    <Part part={props.part1} exercises={props.e1}/>
    <Part part={props.part2} exercises={props.e2}/>
    <Part part={props.part3} exercises={props.e3}/>
  </div>
);

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
);

const Part = (props) => (
  <p>{props.part} {props.exercises}</p>
);

ReactDOM.render(<App />, document.getElementById('root'))