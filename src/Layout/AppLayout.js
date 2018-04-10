import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import SideBar from './SideBar';

const { Header, Content, Footer } = Layout;

export default class AppLayout extends Component {
	render() {
		return (
			<Layout>
				<SideBar />
				<Layout style={{ marginLeft: 200 }}>
					<Header className="header" />
					<Content className="body">
						<div
							style={{ padding: 24, background: '#fff' }}
						>
							{this.props.children}
						</div>
					</Content>

					<Footer className="footer">
						Talent Envoy ©2016 Created by SAAD BIN SAEED
					</Footer>
				</Layout>
			</Layout>
		);
	}
}
