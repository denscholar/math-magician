/* eslint-disable react/prop-types */
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { value, onClick, calcObject } = this.props;
    onClick(calcObject, value);
  }

  render() {
    const { value, className } = this.props;
    return (
      <button className={className} type="button" onClick={this.handleClick}>{ value }</button>
    );
  }
}

export default Button;
