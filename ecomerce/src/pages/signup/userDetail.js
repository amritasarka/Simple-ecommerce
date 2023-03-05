import React, { Component } from "react";
import "./login.css";




export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div className="userdetails">
      <h1 className="name">  Name</h1><h1 className="username">{this.state.userData.fname}</h1>
       <h1 className="name"> Email</h1> <h1 className="username">{this.state.userData.email}</h1>
       
      </div>
    );
  }
}