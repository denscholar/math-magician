import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <input type="text" className="result" value="0" />
          <div className="calculator-buttons">
            <button type="button" className="btn is-clear span-2">AC</button>
            <button type="button" className="btn">&#177;</button>
            <button type="button" className="btn">%</button>
            <button type="button" className="btn orange">&divide;</button>
            <button type="button" className="btn">7</button>
            <button type="button" className="btn">8</button>
            <button type="button" className="btn">9</button>
            <button type="button" className="btn orange">x</button>
            <button type="button" className="btn">4</button>
            <button type="button" className="btn">5</button>
            <button type="button" className="btn">6</button>
            <button type="button" className="btn orange">-</button>
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
            <button type="button" className="btn orange">+</button>
            <button type="button" className="btn span-3">0</button>
            <button type="button" className="btn">.</button>
            <button type="button" className="btn orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
