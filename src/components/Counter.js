import React, { Component } from "react";

class Counter extends Component {

    render() {
        return (
            <div className="counter" >
                <h5>{this.props.data.name}</h5>
                <div>
                    <button onClick={() => { this.props.decreaseCount(this.props.data.index) }} >-</button>
                    {this.props.data.count}
                    <button onClick={() => { this.props.increaseCount(this.props.data.index) }} >+</button>
                </div>

            </div>
        );
    }

}

export default Counter;