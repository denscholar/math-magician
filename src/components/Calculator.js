import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/Calculate';

const Calculator = () => {
  let output = 0;
  const [calculateValaue, setCalculateValaue] = useState({});

  const handleClick = (obj, value) => {
    setCalculateValaue(calculate(obj, value));
  };

  if (Object.keys(calculateValaue).length === 0 || (calculateValaue.total === null
    && calculateValaue.next === null
    && calculateValaue.operation === null)) {
    output = 0;
  } else {
    output = calculateValaue.next !== null ? calculateValaue.next : calculateValaue.total;
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="result">
          { output }
        </div>
        <div className="calculator-buttons">
          <Button value="AC" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="+/-" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="%" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="&divide;" className="btn orange" onClick={handleClick} calcObject={calculateValaue} />

          <Button value="7" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="8" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="9" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="x" className="btn orange" onClick={handleClick} calcObject={calculateValaue} />

          <Button value="4" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="5" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="6" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="-" className="btn orange" onClick={handleClick} calcObject={calculateValaue} />

          <Button value="1" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="2" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="3" className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="+" className="btn orange" onClick={handleClick} calcObject={calculateValaue} />

          <Button value="0" className="btn span-3" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="." className="btn" onClick={handleClick} calcObject={calculateValaue} />
          <Button value="=" className="btn orange" onClick={handleClick} calcObject={calculateValaue} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
