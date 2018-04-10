// @flow

import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import SignUpPage from './pages/SignUp';
import AppLayout from './Layout/AppLayout';

class App extends Component {
	render() {
		console.log('log : props : ');
		return (
			<AppLayout>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={() => <Redirect to="signup" />} />
						<Route path="/signup" exact component={SignUpPage} />
					</Switch>
				</BrowserRouter>
			</AppLayout>
		);
	}
}

export default App;
