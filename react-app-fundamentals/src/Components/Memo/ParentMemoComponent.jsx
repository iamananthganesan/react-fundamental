import React, { Component } from "react";
import MemoComponent from "./MemoComponent";

class ParentMemoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Anand'
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
        return (
            <div>
                <MemoComponent />
            </div>
        )
    }
}

export default ParentMemoComponent;