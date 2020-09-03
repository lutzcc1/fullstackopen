import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };

  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course}/>
      <Content part1={part1.name} part2={part2.name} part3={part3.name} e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
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