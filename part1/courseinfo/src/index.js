import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  } 
  

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

const Header = (props) => (
  <h1>{ props.course.name }</h1>
);

const Content = (props) => (
  <div>
    <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
    <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
    <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
  </div>
);

const Total = (props) => {
  let total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>
}

const Part = (props) => (
  <p>{props.part} {props.exercises}</p>
);

ReactDOM.render(<App />, document.getElementById('root'))