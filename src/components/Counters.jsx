import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {
  render() {
    return (
      <div className="counters">
        {
          this.props.counters.map((counter) =>
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete} />)
        }
      </div>
    )
  }
}
