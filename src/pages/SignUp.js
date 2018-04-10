// @flow

import React, { Component } from 'react';
import SignUpFrom from '../components/SignUpFrom';
import { Row, Col } from 'antd'

// import GoogleLogin from 'react-google-login';

// const responseGoogle = (response) => {
//   console.log(response);
//
// }

class SignUpPage extends Component {
  render() {
    return (
          <Row>
              <Col offset={4} span={16}>
                    <SignUpFrom />
                </Col>
            </Row>
    );
  }
}

export default SignUpPage;
//
// <GoogleLogin
//   clientId="934096203911-uef732cfanhk6blsft6va35fipuknb7g.apps.googleusercontent.com"
//   buttonText="Login"
//   redirectUri="http://localhost"
//   onSuccess={responseGoogle}
//   onFailure={responseGoogle}
//   />
