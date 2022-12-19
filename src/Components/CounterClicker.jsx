import React, { Component } from 'react'
import './style.css'

export default class CounterClicker extends Component {
    counterValue = this.props.counterValue
    onIncrement = this.props.onIncrement
    onDecrement = this.props.onDecrement
    state = {
        counter: this.counterValue
    }
    componentWillUpdate(nextProps) {
        if (this.props.counterValue !== nextProps.counterValue) {
            this.setState(() => ({ counter: nextProps.counterValue }))
        }
    }

    render() {
        return (
            <div className='counter'>
                <span>{this.state.counter}</span>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}
