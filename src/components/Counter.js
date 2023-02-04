import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Counter() {

  const selectCounter = state => state.counterReducer.value;
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter)

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <div className='d-flex gap-2'>
      <span>Counter: {counter}</span>
      <button className='btn btn-primary' onClick={increment}>Increment</button>
      <button className='btn btn-danger' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;