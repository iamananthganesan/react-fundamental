import React, { Component } from 'react'
import LifeCycleChildMounting from './LifeCycleChildMounting';

class LifeCycleParentMounting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Senthil Anand',
            role: 'Developer'
        }

        console.log('LifeCycleParentMounting constructor')

        this.handleLifecycleMethod = this.handleLifecycleMethod.bind(this)
    }

    static getDerivedStateFromProps() {
        console.log('LifeCycleParentMounting getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifeCycleParentMounting componentDidMount method');
    }

    handleLifecycleMethod(){
        this.setState({
            role: "Full Stack developer"
        })
        console.log("perform event to check the lifecycle method")
    }
    render() {
        console.log('LifeCycleParentMounting render method');
        return (
            <div>
                <h1>From LifeCycleParentMounting</h1>
                <button onClick={this.handleLifecycleMethod}>perform event to check the lifecycle method</button>
                <LifeCycleChildMounting />
            </div>
        )
    }
}

export default LifeCycleParentMounting;