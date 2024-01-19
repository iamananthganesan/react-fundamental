import React, { Component } from "react";

class OnClickCounterComponent extends Component {
    render() {
        const { counter, incrementCounter} = this.props
        return (
            <div>
                <h2>Increment your counter value on every click</h2>
                <button onClick={incrementCounter}> click {counter} times</button>
            </div>
        )
    }
}

export default OnClickCounterComponent;