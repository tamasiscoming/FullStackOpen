import React, { useState } from 'react'

const StatisticLine = (props) => {
    return (
      <div>
    <p>good {props.good.value}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
  </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral
  const average = (good*1 + bad*-1 + neutral*0) / all
  const positivity = good / all

  if (all > 0 )
    return ( 
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value = {good}/>
        <StatisticLine text="neutral" value = {neutral}/>
        <StatisticLine text="bad" value = {bad}/>


        <p>all {all}</p>
        <p>average {average}</p>
        <p>positivity {positivity} %</p>
      </div>
    )
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
}

const Button = () => {

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App