// @flow

import React, { Component } from 'react';
import SignUpFrom from '../components/SignUpFrom';
import { Row, Col } from 'antd';


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
