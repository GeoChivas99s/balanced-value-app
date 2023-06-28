import React, { useState } from "react";
import { isBalancedExpression } from "./utils";
import "./App.css";

function App() {

  const [value, setValue] = useState<string>();
  const ISBALANCEDRESPONSE = "A expressão é balanceada ✅";
  const ISNOTBALANCEDRESPONSE = "A expressão não é balanceada ❌  ";

  return (
    <div className="App">
      <input
        className={`main-input ${
          value &&
          (isBalancedExpression(value)
            ? "main-input-balanced"
            : "main-input-not-balanced")
        }`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Insira a sua expressão ..."
      />
      <div className="result-wrapper">
        {value && (
          <p>
            {isBalancedExpression(value)
              ? ISBALANCEDRESPONSE
              : ISNOTBALANCEDRESPONSE}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
