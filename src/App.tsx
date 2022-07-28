import React from "react";
import { TextField } from "./components/TextField/TextField";
import "./App.css";
import Counter from "./components/Counter/Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text="string" />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
