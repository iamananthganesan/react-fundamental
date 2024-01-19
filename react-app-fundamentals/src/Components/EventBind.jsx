import React, { Component } from "react";

class EventBind extends Component {
    constructor() {
        super();
        this.state = {
            name: "Senthil Anand",
            message: "Hi"
        }

       // this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
    }

    handleChangeLanguage() {

        this.setState({
            message: 'Hola'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <h3>{this.state.name} {this.state.message}</h3>                
                <button onClick={()=>{this.handleChangeLanguage()}}> Say hi in german</button>
            </div>
        )
    }
}

export default EventBind