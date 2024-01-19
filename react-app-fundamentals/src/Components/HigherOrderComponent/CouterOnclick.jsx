import React, { Component } from "react";
import WithCouterActsHOC from "./WithCouterActsHOC.jsx";

class CouterOnclick extends Component {

    render() {
        const { counterr, incrementCounterr } = this.props
        return (
            <>
                <button onClick={incrementCounterr}>Clicker {counterr} times</button>
            </>
        )
    }
}
//Passing the CouterOnclick component and number value as parameter to thr=e Higher order component 
//Where:- WithCouterActsHOC is HOC component 
export default WithCouterActsHOC(CouterOnclick, 2)