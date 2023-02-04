import React from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state =>({
    counter: state.value
})

const mapDispatchToProps = dispatch =>({
    increment: ()=> dispatch({type:'INCREMENT'}),
    decrement: ()=> dispatch({type:'DECREMENT'}),
})

function AnotherCounter({counter, increment, decrement}) {
    return (
        <div>
          Another Counter: {counter}
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      )
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotherCounter);
