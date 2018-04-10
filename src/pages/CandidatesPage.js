import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Table from '../components/Table/Table';

export default class CandidatesPage extends Component {

  render() {
    return (
      <Row>
        <Col span={24}>
          <Table />
        </Col>
      </Row>
    );
  }
}
