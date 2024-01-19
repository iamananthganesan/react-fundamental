import React, { Component } from 'react'
import LifeCycleChildUpdating from './LifeCycleChildUpdating';

class LifeCycleParentUpdating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Senthil Anand',
            role: 'Developer'
        }

        console.log('LifeCycleParentUpdating constructor')

        this.handleLifecycleMethod = this.handleLifecycleMethod.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleParentUpdating getDerivedStateFromProps');
        return null
    }

    shouldComponentUpdate(nextProps, nextState){        
        console.log("LifeCycleParentUpdating in shouldComponentUpdate method")
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("LifeCycleParentUpdating in getSnapshotBeforeUpdate method")
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleParentUpdate in componentDidUpdate method');
    }

    handleLifecycleMethod() {
        this.setState({
            role: "Full Stack developer"
        })
        console.log("perform event to check the lifecycle method")
    }
    render() {
        console.log('LifeCycleParentUpdating render method');
        return (
            <div>
                <h1>From LifeCycleParentUpdating</h1>
                <button onClick={this.handleLifecycleMethod}>perform event to check the lifecycle method</button>
                <LifeCycleChildUpdating />
            </div>
        )
    }
}

export default LifeCycleParentUpdating;