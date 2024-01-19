import React, { Component} from 'react'

class LifeCycleChildUpdating extends Component{
    constructor(props){
        super(props)
        this.state = {
            greetingMsg: 'Welcome'
        }
        console.log('LifeCycleChildUpdating constructor method');  
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleChildUpdating getDerivedStateFromProps method');  
        return null;
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("LifeCycleChildUpdating in shouldComponentUpdate method")
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("LifeCycleChildUpdating in getSnapshotBeforeUpdate method")
        return null;
    }
    
    componentDidUpdate() {
        console.log('LifeCycleChildUpdating in componentDidUpdate method');
    }
    
    render(){
        console.log('LifeCycleChildUpdating render method');  
        return(
            <div>
                <h2>From LifeCycleChildUpdating class component</h2>
            </div>
        )
    }
}

export default LifeCycleChildUpdating