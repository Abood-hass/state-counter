import './App.css';
import CounterClicker from './Components/CounterClicker';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    counter1: 0,
    counter2: 0,
    sum: 0,

  }

  counter_1_Increment(step = 1) {
    this.setState((prevState) => ({ counter1: parseInt(prevState.counter1) + step }))
  }


  counter_2_Increment(step = 1) {
    this.setState((prevState) => ({ counter2: parseInt(prevState.counter2) + step }))
  }

  counter_3_Increment(step = 1) {
    this.setState((prevState) => ({ counter3: parseInt(prevState.counter3) + step }))
  }



  componentWillUpdate() {

    if (parseInt(this.state.counter1) + parseInt(this.state.counter2) == this.state.sum) {
      this.setState(() => ({ sum: parseInt(this.state.counter1) + parseInt(this.state.counter2) }))
    }
  }
  render() {
    return (

      <div className="App">
        <CounterClicker counterValue={this.state.counter1} onIncrement={_ => this.counter_1_Increment(1)} />
        <CounterClicker counterValue={this.state.counter2} onIncrement={_ => this.counter_2_Increment(1)} />
        <h2>{this.state.sum}</h2>

      </div>
    )
  }
}
