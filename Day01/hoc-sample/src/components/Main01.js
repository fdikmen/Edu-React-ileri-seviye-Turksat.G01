//rcc
import React, { Component } from "react";
import axios from "axios";
import User from "./User";
import Post from "./Post";

export default class Main extends Component {
  state = {
    posts: [],
    users: [],
    loading: true,
    err: "",
  };

  componentDidMount() {

    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({posts: res.data, loading: false})   });

    setTimeout(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            this.setState({users: res.data,loading: false});
          }); 
    }, 3000);
  }

  render() {
    return <div>
        <h1>Higher Order Component</h1>
        <hr />
        <User users={this.state.users} />
        <Post posts={this.state.posts} />
    </div>;
  }
}
