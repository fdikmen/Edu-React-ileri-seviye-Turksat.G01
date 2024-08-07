//rcc
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import User from "./User";
import Post from "./Post";

export default function Main() {
  const [posts, setposts] = useState([]);
  const [users, setusers] = useState([]);
  // let testData = 123;
  const [testData, setTestData] = useState("123");
  const [counter, setCounter] = useState(10);

  const arttir = (deger) => {
    setCounter(deger);
  };

  const degistirTest = (deger) => {
    console.log("Degistir Test", deger);
    // testData = deger;
    setTestData(deger);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setposts(res.data);
    });
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setusers(res.data);
      });
    }, 3000);
  }, []);
  return (
    <div>
      <h1>Higher Order Component</h1>
      <h1>Test Data {testData}</h1>
      <button onClick={() => degistirTest("New Data")}>
        Test Data Degistir
      </button>
      <hr />
      <User users={users} counter={counter} arttir={arttir} />
      <Post posts={posts} yenidata="Denemeler" testData={testData} />
    </div>
  );
}




/*
export default class Main extends Component {
  state = {
    name: 'John Doe',
    age:32,
    email: "msiler@mail.com"
  }

  this.setState({name: "John Doe02", age: 22})

  render() {
    return (
      <div>Main
        {this.state.name}
        {this.state.age}
      </div>
    )
  }
}
  */


/*
function Main02() {
const [name,setName] = useState("John Doe");

setName("John Doe02");
  return (
    <div>Main</div>
  )
}

*/