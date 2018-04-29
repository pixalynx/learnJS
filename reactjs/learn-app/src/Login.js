import React from "react";
import axios from "axios";
import "./style.css";

var ServerUri = "http://45.32.190.35:2000";

class Login extends React.Component {
  state = {
    Email: "",
    Username: "",
    Password: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post(
      `${ServerUri}/Accounts`,
      {
        username: this.state.Username,
        password: this.state.Password,
        email: this.state.Email
      }
      

    );
  };

  render() {
    return (
      <div className="container">
        <div className="signup">Signup</div>
        <div className="login">Login</div>

        <div className="signup-form">
          <input
            name="Email"
            type="text"
            placeholder="Select Your Email Address"
            className="input"
            value={this.state.Email}
            onChange={e => this.change(e)}
          />
          <br />

          <input
            name="Username"
            type="text"
            placeholder="Enter a Username"
            className="input"
            value={this.state.Username}
            onChange={e => this.change(e)}
          />
          <br />

          <input
            name="Password"
            type="password"
            placeholder="Select a Password"
            className="input"
            value={this.state.Password}
            onChange={e => this.change(e)}
          />
          <br />

          <div className="btn" onClick={e => this.onSubmit(e)}>
            create account
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
