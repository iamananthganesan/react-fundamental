import React, { Component } from "react";
import WithCouterActsHOC from "./WithCouterActsHOC";

class CounterOnHover extends Component {
    render() {
        const { counter, incrementCounter } = this.props
        return (
            <>
                <h2 onMouseOver={incrementCounter}>Clicker {counter} times</h2>
            </>
        )
    }
}

export default WithCouterActsHOC(CounterOnHover, 5)