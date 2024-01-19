import React, { Component } from "react";
import { UserContext } from "./UserContext/UserContext";

class ComponentC extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    
                    {
                        (username)=>{
                            return <>
                            <h2>Component C</h2>
                               == {username}==
                            </>
                        }
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentC