
import './App.css';
import Counter from './components/Counter';
import AnotherCounter from './components/AnotherCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <hr />
        <AnotherCounter />
      </header>
    </div>
  );
}

export default App;
