import './App.css';

import React, {useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // 👇️ Move hooks above condition that might return
  const [message, setMessage] = useState('');

  // 👇️ Any conditions that might return must be below all hooks
  if (count > 0) {
    return <h1>Count is greater than 0</h1>;
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
