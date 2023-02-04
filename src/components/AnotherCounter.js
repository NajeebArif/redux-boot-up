import React from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state =>({
    counter: state.counterReducer.value
})

const mapDispatchToProps = dispatch =>({
    increment: ()=> dispatch({type:'INCREMENT'}),
    decrement: ()=> dispatch({type:'DECREMENT'}),
})

function AnotherCounter({counter, increment, decrement}) {
    return (
        <div className='d-flex gap-2'>
          <span>Another Counter: {counter}</span>
          <button className='btn btn-primary' onClick={increment}>Increment</button>
          <button className='btn btn-danger' onClick={decrement}>Decrement</button>
        </div>
      )
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotherCounter);
