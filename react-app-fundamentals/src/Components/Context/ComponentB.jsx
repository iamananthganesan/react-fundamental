import React, { Component } from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./UserContext/UserContext";
//ComponentB.Context = UserContext;
class ComponentB extends Component {

    render() {
        return (
            <div>
                <h2>Component B {this.context}</h2>
                <ComponentC />
            </div>
        )
    }

}


export default ComponentB