import axios from 'axios'
import React, { Component } from 'react'

class CreatePost extends Component {
    constructor() {
        super()
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    handleCreatePostForm = (e) => {
        e.preventDefault()

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then((response) => { console.log(response) })
            .catch((error) => { console.log(error) })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleCreatePostForm}>
                    <input type='text' name='userId' placeholder='userid' onChange={this.handleChange} />
                    <input type='text' name='title' placeholder='usertitle' onChange={this.handleChange} />
                    <input type='text' name='body' placeholder='userbody' onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePost
