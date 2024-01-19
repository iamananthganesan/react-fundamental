import React, { Component } from "react";

class ErrorBoundaryClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerirvedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        console.log('error', error, 'info', info)
    }
    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h2>Something went wrong!!!</h2>
                </>
            )
        }

        return this.props.children

    }
}

export default ErrorBoundaryClassComponent