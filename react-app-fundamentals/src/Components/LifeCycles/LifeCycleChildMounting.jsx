import React, { Component} from 'react'

class LifeCycleChildMounting extends Component{
    constructor(props){
        super(props)
        this.state = {
            greetingMsg: 'Welcome'
        }
        console.log('LifeCycleChildMounting constructor method');  
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleChildMounting getDerivedStateFromProps method');  
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleChildMounting componentDidMount method');  
    }
    render(){
        console.log('LifeCycleChildMounting render method');  
        return(
            <div>
                <h2>From LifeCycleChildMounting class component</h2>
            </div>
        )
    }
}

export default LifeCycleChildMounting