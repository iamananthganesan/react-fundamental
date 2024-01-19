import React, { Component } from "react";

class FormClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            gender: 'Male',
            techStack: ["Angular", "Reactjs", "Vue Js", "Nextjs"]
        }
    }

    handleUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    handleGender = (event) => {
        this.setState({ gender: event.target.value })
    }

    handleTechStack = (event) => {
        this.setState((prev)=>{
            
            console.log('prev', prev.techStack)
        })
        
        //push(event.target.value)
        
        
        // this.setState({
        //     techStack: ['Node']
        // })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="formControl">
                        <label htmlFor="username">
                            username
                        </label>
                        <input type="text" onChange={this.handleUserName} id="username" value={this.state.userName} />
                    </div>
                    <div className="formControl">
                        <label>
                            Gender
                        </label> <br />
                        <label htmlFor="male">
                            Male
                        </label>
                        <input type="radio" checked={this.state.gender === 'Male'} name="gender" id="male" onClick={this.handleGender} value="Male" />

                        <label htmlFor="female">
                            Female
                        </label>
                        <input type="radio" name="gender" id="female" onChange={this.handleGender} value="Female" />
                    </div>
                    <div className="formControl">
                        <label>
                            Tech Stack
                        </label> <br />

                        {this.state.techStack.map((tech, index) => {
                            return (
                                <div key={tech}>
                                    <label>{tech}</label>
                                    <span><input type="checkbox" name="techStack" value={tech} onChange={this.handleTechStack} />{tech}</span>
                                </div>
                            )
                        })}

                    </div>
                    <div className="formControl">
                        <button type="submit">Submit my details</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormClassComponent;