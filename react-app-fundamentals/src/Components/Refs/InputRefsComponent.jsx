import React, { Component } from "react";

class InputRefsComponent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.inputRefs.current.focus();
    }
    render() {
        return (
            <input placeholder="auto focus using refs" type="text" ref={inputRefs} />
        )
    }
}

export default InputRefsComponent;