import React, { useEffect, useState } from "react";
import "./App.css";
import { isBalancedExpression } from "./utils";
function App() {
  const [value, setValue] = useState<string>();

  console.log(value);
  useEffect(() => {}, [value]);

  return (
    <div className="App">
      <input
        className="main-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Insira a sua expressão ..."
      />

      {value && (
        <p>
          A expressão {isBalancedExpression(value) ? "é" : "não é "} balanceada{" "}
        </p>
      )}
    </div>
  );
}

export default App;
