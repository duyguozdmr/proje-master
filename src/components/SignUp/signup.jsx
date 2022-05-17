import React from "react";
import signUpImg from "../../signup.png";
import {AppBar, Toolbar, IconButton,Badge,MenuItem,Menu ,Typography, Button} from '@material-ui/core';

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
            <img src={signUpImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input type="password" name="password" placeholder="password" />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-Mail </label>
              <input type="email" name="email" placeholder="email" />
            </div>

            <div className="form-group">
              <label htmlFor="phonenum">Phone Number </label>
              <input type="phonenum" name="phonenum" placeholder="phonenum" />
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