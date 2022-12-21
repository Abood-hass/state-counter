import './App.css';
import CounterClicker from './Components/CounterClicker';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    sum: 0,
  }


  counterChange(step, index) {
    this.setState((prevState) => ({ ['counter' + index]: parseInt(prevState["counter" + index]) + step }))
  }

  componentDidUpdate() {
    const sum = this.state.counter1 + this.state.counter2 + this.state.counter3
    if (this.state.sum !== sum) {
      this.setState({ sum })
    }
  }

  render() {
    return (

      <div className="App">
        {Object.keys(this.state)
          .slice(0, Object.keys(this.state).lastIndexOf())
          .map(i =>
            <CounterClicker
              key={parseInt(i.charAt(i.length - 1))}
              counterValue={this.state[i]}
              onIncrement={_ => this.counterChange(1, parseInt(i.charAt(i.length - 1)))}
              onDecrement={_ => this.counterChange(-1, parseInt(i.charAt(i.length - 1)))} />
          )}
        <h2>Summation: {this.state.sum}</h2>

      </div>
    )
  }
}
