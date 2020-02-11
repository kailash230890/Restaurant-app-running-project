import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import NavBarManu from "./NavBarManu";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      password: ""
    };
  }
  login() {
    console.log(this.state);
    fetch("http://localhost:3000/login/?q=" + this.state.name).then(data => {
      data.json().then(resp => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          localStorage.setItem("login", JSON.stringify(resp));
          console.warn(this.props.history.push("list"));
        } else {
          alert("Please check username & password");
        }
      });
    });
  }
  render() {
    return (
      <div>
        <NavBarManu />
        <label htmlFor="name">Name : </label>
        <input
          type="text" required
          onChange={event => {
            this.setState({ name: event.target.value });
          }}
          placeholder="Name enter"
          
        />

        <br />
        <label htmlFor="name">Password : </label>
        <input
          type="password" required
          onChange={event => {
            this.setState({ password: event.target.value });
          }}
          placeholder="Password enter"
          
        />

        <br />

        <br />
        <Button
          type="submit"
          onClick={() => {
            this.login();
          }}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default Login;
