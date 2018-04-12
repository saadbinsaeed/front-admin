// @flow

import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import SignUpPage from './pages/SignUpPage';
import CandidatesPage from './pages/CandidatesPage';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<AppLayout>
						<Switch>
							<Route path="/" exact component={() => <Redirect to="signup" />} />
							<Route path="/signup" exact component={SignUpPage} />
							<Route path="/candidates" exact component={CandidatesPage} />
						</Switch>
				</AppLayout>
			</BrowserRouter>
		);
	}
}

export default App;
