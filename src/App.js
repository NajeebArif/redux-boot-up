
import './App.css';
import Counter from './components/Counter';
import AnotherCounter from './components/AnotherCounter';

function App() {
  return (
    <div className='container'>
      <div className="d-flex flex-column gap-2 justify-content-center m-3">
        <Counter />
        <AnotherCounter />
      </div>
    </div>
  );
}

export default App;
