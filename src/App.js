import React, { Component } from 'react'
import Nav from './components/Nav'
import Main from './components/Main'


export default class App extends Component {
  counters = [
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.getTotalItems = this.getTotalItems.bind(this);
    this.state = {
      counters: [...this.counters]
    }
  }

  handleReset() {
    console.log('Reset clicked');
    console.log(this.counters);
    this.setState({
      counters: [...this.counters]
    });
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters];
    // counter.value++;
    counters[counter.id] = { id: counter.id, value: counter.value + 1 };
    this.updateCounter(counters);
  }

  handleDecrement(counter) {
    const counters = [...this.state.counters];
    // counter.value--;
    counters[counter.id] = { id: counter.id, value: counter.value - 1 };
    this.updateCounter(counters);
  }

  handleDelete(counter) {
    let counters = [...this.state.counters];
    counters = counters.filter(c => c.id != counter.id);
    this.updateCounter(counters);
  }

  updateCounter(counters) {
    this.setState({ counters })
  }
  getTotalItems() {
    const counters = this.state.counters;
    const values = counters.map((counter) => counter.value);
    return values.reduce((prev, curr) => {
      return prev + curr;
    }, 0)
  }

  render() {
    return (
      <div className='container'>
        <Nav
          totalItems={this.getTotalItems()}
          onReset={this.handleReset}
        />
        <Main
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete} />
      </div >
    )
  }
}

