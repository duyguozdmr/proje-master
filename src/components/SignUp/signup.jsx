import React from "react";
import signUpImg from "../../signup.png";
import {AppBar, Toolbar, IconButton,Badge,MenuItem,Menu ,Typography, Button} from '@material-ui/core';
import "./style.css";
import {Link } from 'react-router-dom';



export class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">SignUp</div>
        <div className="content">
          <div className="image">
            <img className="imageimg" src={signUpImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label className="lblTitle" htmlFor="username">Username</label>
              <input className="inputform" type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label className="lblTitle" htmlFor="password">Password </label>
              <input className="inputform" type="password" name="password" placeholder="password" />
            </div>

            <div className="form-group">
              <label className="lblTitle" htmlFor="email">E-Mail </label>
              <input className="inputform" type="email" name="email" placeholder="email" />
            </div>

            <div className="form-group">
              <label className="lblTitle" htmlFor="phonenum">Phone Number </label>
              <input className="inputform" type="phonenum" name="phonenum" placeholder="phonenum" />
            </div>

          </div>
        </div>
        <div className="footer">
            <IconButton component={Link} to="/giris"  color="inherit">
                    SignUp
            </IconButton>
        </div>
      </div>
    );
  }
}
export default SignUp;