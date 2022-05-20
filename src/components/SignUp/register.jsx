import React from "react";
import loginImg from "../../login.svg";
import "./style.css";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img className="imageimg" src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label className="lblTitle" htmlFor="username">
                Username
              </label>
              <input
                className="inputform"
                type="text"
                name="username"
                placeholder="username"
              />
            </div>
            <div className="form-group">
              <label className="lblTitle" htmlFor="email">
                Email
              </label>
              <input
                className="inputform"
                type="text"
                name="email"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <label className="lblTitle" htmlFor="password">
                Password
              </label>
              <input
                className="inputform"
                type="text"
                name="password"
                placeholder="password"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
