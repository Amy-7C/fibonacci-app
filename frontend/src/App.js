import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fibonacci Number Generator</h1>
        <p>Input a number 'n' to display the first 'n' fibonacci numbers.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button type="submit">Get Results</button>
        </form>
      </header>
    </div>
  );
}

export default App;
