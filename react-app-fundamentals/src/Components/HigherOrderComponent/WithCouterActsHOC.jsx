import React, { Component } from "react";
//Basicall the HOC receives the component and return a new enhanced component 
const WithCouterActsHOC = (OriginalComponent, incrementalNumber) => {
    class EnhancedComponent extends Component {
        constructor() {
            super()
            this.state = {
                counter: 0
            }
        }

        incrementCounter = () => {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter + incrementalNumber
                }
            })
        }
        render() {
            return (
                //passing the counter value and incrementl value as props and ...this.props we spreads the props if we receive anything from its parent component
                <OriginalComponent counter={this.state.counter} incrementCounter={this.incrementCounter} {...this.props} />
            )
        }
    }

    return (EnhancedComponent)
}

export default WithCouterActsHOC