import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function FibForm() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results/${input}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fibonacci Number Generator</h1>
        <p>Pick a number from 1-91 to display the first 'n' fibonacci numbers.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button type="submit">Get Results</button>
        </form>
      </header>
    </div>
  );
}