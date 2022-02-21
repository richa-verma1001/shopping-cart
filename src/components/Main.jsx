import React, { Component } from 'react'
import Counters from './Counters'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Counters
          counters={this.props.counters}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onDelete={this.props.onDelete}
        />
      </main >
    )
  }
}
