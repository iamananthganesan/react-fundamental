import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";


class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Senthil'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Senthil Anand'
            })
        }, 2000)
    }

    render() {
        console.log('From Parent Component');
        return (
            <div>
                <h2>Parent Component</h2>
                <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent