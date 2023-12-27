import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      My first deployment app
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default App;
