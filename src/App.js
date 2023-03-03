// import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Context from './Context/Context';

function App() {
  return (
    <div className="App">
      <Context>
      <Counter/>
      </Context>
   
    </div>
  );
}

export default App;
