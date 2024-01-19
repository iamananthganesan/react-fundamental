import React, { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component{
    render(){
        return(
            <div>
                <h2>Component A</h2>
                <ComponentB/>
            </div>
        )
    }
}

export default ComponentA