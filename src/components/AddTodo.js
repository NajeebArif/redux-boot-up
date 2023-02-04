import React from 'react'
import { connect } from 'react-redux'
import { addTodo as addTodoAction } from '../actions/actions';

function AddTodo({dispatch}) {
    let input;
    const addTodo = e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      const val = input.value
      console.log(`todo added: ${val}`)
      dispatch(addTodoAction(val));
      input.value = ''
    }
    return (
      <div className="mb-3">
        <form onSubmit={addTodo}>
          <label htmlFor="addTodoItem" className="form-label">Add Todo item</label>
          <input type="text" className="form-control"
            id="addTodoItem" ref={node => { input = node; }} />
          <button className='btn btn-primary' type='submit'>Add todo</button>
        </form>
      </div>
    )
}

export default connect()(AddTodo)