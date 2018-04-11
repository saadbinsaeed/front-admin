import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SideBar extends React.Component {
	render() {
		// console.log('log SideBar Props : ', this.props);
		const { pathname } = this.props.location;
		return (
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0
				}}
			>
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={[`${pathname}`]}>
					<Menu.Item key="/candidates">
						<Link to="candidates">
							<Icon type="user" />
							<span className="nav-text">Candidates</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="/signup">
						<Link to="signup">
							<Icon type="video-camera" />
							<span className="nav-text">Sign Up</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="upload" />
						<span className="nav-text">nav 3</span>
					</Menu.Item>
					<SubMenu
						key="sub1"
						title={
							<span>
								<Icon type="user" />
								<span>User</span>
							</span>
						}
					>
						<Menu.Item key="sub3">Tom</Menu.Item>
						<Menu.Item key="sub4">Bill</Menu.Item>
						<Menu.Item key="sub5">Alex</Menu.Item>
					</SubMenu>
					<Menu.Item key="4">
						<Icon type="bar-chart" />
						<span className="nav-text">nav 4</span>
					</Menu.Item>
					<Menu.Item key="5">
						<Icon type="cloud-o" />
						<span className="nav-text">nav 5</span>
					</Menu.Item>
					<Menu.Item key="6">
						<Icon type="appstore-o" />
						<span className="nav-text">nav 6</span>
					</Menu.Item>
					<Menu.Item key="7">
						<Icon type="team" />
						<span className="nav-text">nav 7</span>
					</Menu.Item>
					<Menu.Item key="8">
						<Icon type="shop" />
						<span className="nav-text">nav 8</span>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

export default withRouter(SideBar);
