import React from "react";
import loginImg from "../../login.svg";
import {AppBar, Toolbar, IconButton,Badge,MenuItem,Menu ,Typography, Button} from '@material-ui/core';
import "./style.css";
import {Link } from 'react-router-dom';



export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img className="imageimg" src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label className="labelTitleUsername" htmlFor="username">Username</label>
              <input className="inputUsername"  type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label className="labelTitlePassword" htmlFor="password">Password </label>
              <input className="inputPassword" type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
            <IconButton component={Link} to="/giris"  color="inherit">
                    Login
            </IconButton>
        </div>
      </div>
    );
  }
}
export default Login;