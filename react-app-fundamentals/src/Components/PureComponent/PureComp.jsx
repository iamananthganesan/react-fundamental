import React, { PureComponent } from "react";

class PureComp extends PureComponent {
    render() {
        console.log('From Pure Component');
        return (
            <div>
                <h2>Pure component</h2>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default PureComp;