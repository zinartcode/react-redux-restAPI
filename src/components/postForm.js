import React, { Component } from 'react'

class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="">
        <div>
            <label>Title</label><br />
            <input type="text" name="title"></input>
        </div> 
        <div>
            <label>Body</label><br />
            <textarea name="body" />
        </div>       
        </form>
      </div>
    )
  }
}

export default PostForm;