// @flow
import React, { Component } from 'react';
import Button from 'antd/lib/button';
import SignUpFrom from './components/SignUpFrom';
import './App.css';
import { Row, Col } from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Row>
             <Col offset={4} span={16}>
                <SignUpFrom />
             </Col>
         </Row>
      </div>
    );
  }
}

export default App;
