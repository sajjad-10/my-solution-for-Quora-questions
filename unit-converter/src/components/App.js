import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [getInput, setGetInput] = useState(0);
  const [selectFrom, setSelectFrom] = useState(1);
  const [selectTo, setSelectTo] = useState(1);
  // // console.log('get input Work =>', getInput);
  // console.log('get Select From Work =>', selectFrom);
  // console.log('get Select To Work =>', selectTo);
  const handleConvert = () => {
    if (selectFrom > selectTo) {
      setResult(getInput * (selectFrom / selectTo))
    } else (
      setResult(getInput * (selectFrom / selectTo))

    )
  }
  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input label='Amount' onChange={(e) => { setGetInput(e.target.value) }} />
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label='From' items={units} onChange={(e) => { setSelectFrom(e.target.value) }} />
          <Select label='To' items={units} onChange={(e) => { setSelectTo(e.target.value) }} />
          <button onClick={handleConvert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
