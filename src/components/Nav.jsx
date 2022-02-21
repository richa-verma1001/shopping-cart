import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Navbar</h3>
        <span>{this.props.totalItems}</span>
        <button onClick={this.props.onReset} className="reset">Reset</button>
      </nav>
    )
  }
}
