import React, { Component } from "react";

class SetStateClassComponent extends Component{
    constructor(){
        super()
        this.state = {
            user: "Anand Ganesan",
            role: "React Developer",
            counter: 0
        }

        //Event binding
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handleCounter = this.handleCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);

        this.dealWithPrevstate = this.dealWithPrevstate.bind(this)
    }

    handleRoleChange(){
        this.setState({
            role: 'Web Full stack Developer'
        })
    }

    handleCounter(){
        this.setState({
            counter: this.state.counter + 5
        })
        console.log("Current state counter value",this.state.counter)

        this.dealWithPrevstate()
    }

    decreaseCounter(){
        this.setState({
            counter: this.state.counter - 1
        })

        this.dealWithPrevstate()
    }
    dealWithPrevstate(){
        this.setState((prevState) => {
            console.log(this.state.counter)
            console.log("Previous state counter value",prevState.counter);
        })
    }
    render(){
        return(
            <div className="">
                <h1>Hello {this.state.user} - {this.state.role}</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.decreaseCounter}> Decrease the counter value</button>
                <button onClick={this.handleCounter}> increase the counter value</button>
                <button onClick={this.handleRoleChange}>Click to update his role</button>
            </div>
        )
    }
}

export default SetStateClassComponent