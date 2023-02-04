import React from 'react'
import {legacy_createStore as createStore} from 'redux'

function counterReducer(state={value:0}, action){
  switch(action.type){
    case 'INCREMENT':
      return {value: state.value+1}
    case 'DECREMENT':
      return {value: state.value-1}
    default:
      return state;
  }
}

function Counter() {

  const store = createStore(counterReducer);

  const increment = ()=>{
    store.dispatch({type: 'INCREMENT'})
  }

  const decrement = ()=>{
    store.dispatch({type: 'DECREMENT'})
  }

  store.subscribe(()=> console.log('Value',store.getState().value))

    return (
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )
  }

export default Counter;