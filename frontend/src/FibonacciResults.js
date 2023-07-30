import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
export function FibonacciResults() {
  const { num } = useParams();
  const [results, setResults] = useState("");
  const fetchData = async () => {
    if(num > 91) return setResults("Can display only up to 91 numbers. Please go back.")
    await fetch(`http://localhost:3001/fibnumbers/${num}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.result) {
        setResults(data.result);
      }
    })
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <header className="App-header">
        {results}
      </header>
    </div>
  )
}