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
        className={`main-input ${ value && ( isBalancedExpression(value)  ?  "main-input-balanced"  : "main-input-not-balanced" )}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Insira a sua expressão ..."
      />
      <div className="result-wrapper">
        {value && (
          <p>
            A expressão {isBalancedExpression(value) ? "é " : "não é "}balanceada
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
