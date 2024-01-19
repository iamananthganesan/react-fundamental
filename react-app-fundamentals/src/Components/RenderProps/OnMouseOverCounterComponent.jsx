import React, { Component } from "react";

class OnMouseOverCounterComponent extends Component {
    render() {
        return (
            <div>
                <button onMouseOver={incrementCounter}> click {counter} times</button>
            </div>
        )
    }
}

export default OnMouseOverCounterComponent;