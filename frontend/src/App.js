import './App.css';
import { Routes, Route } from 'react-router-dom';
import { FibForm } from './FibForm';
import { FibonacciResults } from './FibonacciResults';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FibForm />}/>
        <Route path="/results/:num" element={<FibonacciResults />} />
        <Route path="/results" element={<FibonacciResults />} />
      </Routes>
    </>
  )
}

export default App;
