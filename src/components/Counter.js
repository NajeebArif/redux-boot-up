import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Counter() {

  const selectCounter = state => state.value;
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter)

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <div>
      Counter: {counter}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;