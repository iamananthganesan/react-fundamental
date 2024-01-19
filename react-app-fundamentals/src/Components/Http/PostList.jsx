import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const fetchPosts = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    this.setState({ posts: response.data })
                })
                .catch((error) => { console.log('error', error.message) })
            console.log(this.state.posts)
        }
        fetchPosts()
    }

    render() {
        const { posts } = this.state        
        return (
            <div>
            <h1>Post Lists</h1>
                {posts?.map((post) => {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostList
