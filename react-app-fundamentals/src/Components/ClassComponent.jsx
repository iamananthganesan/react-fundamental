import React, { Component } from 'react';

//Basic class component basically we can create a class component with the es6 class keyword and it should be extend from component
class ClassComponent extends Component {
    constructor() {
        super()
        //Here we used to create the state for this component
    }

    //Render method helps to render the component by returning the JSX
    render() {

        return (
            <div>
                <h1>Hi am class component</h1>
            </div>
        )
    }
}


export default ClassComponent