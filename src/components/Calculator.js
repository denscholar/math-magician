import React from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/Calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj, value) {
    this.setState({ result: calculate(obj, value) });
  }

  render() {
    const { result } = this.state;
    let output = 0;
    if (Object.keys(result).length === 0 || (result.total === null
      && result.next === null
      && result.operation === null)) {
      output = 0;
    } else {
      output = result.next !== null ? result.next : result.total;
    }
    return (
      <div className="container">
        <div className="calculator">
          <div className="result">
            { output }
          </div>
          <div className="calculator-buttons">
            <Button value="AC" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="+/-" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="%" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="&divide;" className="btn orange" onClick={this.handleClick} calcObject={result} />

            <Button value="7" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="8" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="9" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="x" className="btn orange" onClick={this.handleClick} calcObject={result} />

            <Button value="4" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="5" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="6" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="-" className="btn orange" onClick={this.handleClick} calcObject={result} />

            <Button value="1" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="2" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="3" className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="+" className="btn orange" onClick={this.handleClick} calcObject={result} />

            <Button value="0" className="btn span-3" onClick={this.handleClick} calcObject={result} />
            <Button value="." className="btn" onClick={this.handleClick} calcObject={result} />
            <Button value="=" className="btn orange" onClick={this.handleClick} calcObject={result} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
