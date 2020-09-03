import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name:'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header title={course}/>
      <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} e1={parts[0].exercises} e2={parts[1].exercises} e3={parts[2].exercises}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
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