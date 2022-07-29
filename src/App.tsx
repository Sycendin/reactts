import React from "react";
import { TextField } from "./components/TextField/TextField";

import Counter from "./components/Counter/Counter";
import Message from "./components/Message/Message";
import Message2 from "./components/Message2/Message2";
import "./App.css";
const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text="string" />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <Message note={count} />
          </div>
        )}
      </Counter>
      <Message2 note="string">
        {(letter2, setLetter2) => (
          <div>
            {letter2}
            <button onClick={() => setLetter2("Hello")}>+</button>
          </div>
        )}
      </Message2>
    </div>
  );
};

export default App;
