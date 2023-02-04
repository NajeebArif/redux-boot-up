
import './App.css';
import Counter from './components/Counter';
import AnotherCounter from './components/AnotherCounter';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import ShowFilters from './components/ShowFilters';

function App() {
  return (
    <div className='d-flex flex-column gap-2 justify-content-center m-3 p-3'>
      <div className='d-flex'>
        <div className='d-flex flex-column'>
          <AddTodo />
          <ShowFilters />
        </div>
        <TodoList />
      </div>
      <div className='d-flex'>
        <Counter />
        <AnotherCounter />
      </div>
    </div>
  );
}

export default App;
