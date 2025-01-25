import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>hello World</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          Vite
        </a>
        <span> | </span>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          React
        </a>
      </div>
      <p>Edit src/App.tsx and save to test HMR</p>
    </div>
  );
}

export default App;
