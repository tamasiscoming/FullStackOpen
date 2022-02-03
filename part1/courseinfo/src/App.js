import React from 'react'

const Header = (props) => {
  console.log("Header: " + props.course.name)
  return (
    <div>
      {props.course.name}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.course} {props.exercises}
      </p>
    </div>
  ) 
 }

const Content = (props) => {
  console.log("CONTENT")
  console.log(props.parts)
  console.log("props.parts.parts.name: "+ props.parts.parts[0].name)
  console.log("props.parts.name: "+ props.parts.parts[0].exercises)

  return (
    <div>
      <Part course={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises}/>
      <Part course={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises}/>
      <Part course={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises}/>
    </div>
  )
}

const sum = (p1, p2, p3) => {
  console.log("exercise1: " + p1)
  console.log("exercise1: " + p2)
  console.log("exercise1: " + p3)
  return p1 + p2 + p3
}

const Total = (props) => {
  const total = sum(props.parts.parts[0].exercises, props.parts.parts[1].exercises, props.parts.parts[2].exercises)
  console.log(total)
  
  return (
    <div>
      {total}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
     {
       name: 'Using props to pass data',
       exercises: 7
     },
     {
       name: 'Fundamentals of React',
       exercises: 10
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
      <Content parts={course}/>
      <Total parts={course}/>
    </div>
  )
}

export default App