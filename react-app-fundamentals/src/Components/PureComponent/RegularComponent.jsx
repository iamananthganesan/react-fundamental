import React, { Component } from "react";


class RegularComponent extends Component {

    render() {
        console.log('From Regular Component');
        return (
            <div>
                <h2>Regular Component</h2>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default RegularComponent;