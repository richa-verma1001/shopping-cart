import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div className="counter">
        <div className="count">{counter.value}</div>
        <button onClick={() => this.props.onIncrement(counter)} className="increment">+</button>
        <button onClick={() => this.props.onDecrement(counter)} className="decrement">-</button>
        <button onClick={() => this.props.onDelete(counter)} className="delete">x</button>
      </div>
    )
  }
}
