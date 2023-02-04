import React from 'react'
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions'

function TodoList({ todos, toggle }) {
  return (
    <div className='d-flex flex-column'>
      <h3>List of Todos</h3>
      <ul>
        {
          todos && todos.map(t =>
            <li key={t.id} >
              <Todo
                id={t.id}
                desc={t.description}
                isComplete={t.isComplete} toggleTodo={toggle} />
            </li>
          )
        }
      </ul>
    </div>
  )
}

const Todo = ({ id, desc, isComplete, toggleTodo }) => {
  const alertType = isComplete ? 'primary' : 'danger';
  const dispatchToggle = e => {
    e.preventDefault()
    toggleTodo(id);
  }
  return (
    <div className={`alert alert-${alertType}`} role={'alert'} >
      <div><b>Description:</b> {desc}</div>
      <div >Is Done? {isComplete ? 'true' : 'false'}</div>
      <button className='btn btn-secondary' onClick={dispatchToggle}>
        {'Mark as ' + (!isComplete ? 'complete' : 'incomplete')}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer
})

const mapDispatchToProps = (dispatch) => ({
  toggle: id => {
    dispatch(toggleTodo(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
