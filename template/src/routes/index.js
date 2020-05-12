import React from 'react';
import {Switch} from 'react-router-dom';
import Signin from '../pages/Signin/index';
import Signup from '../pages/Signup/index';
import Dashboard from '../pages/Dashboard/index';
import Profile from '../pages/Profile/index';
import Route from './Route';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Signin} />
			<Route path="/register" component={Signup} />
			<Route path="/dashboard" component={Dashboard} isPrivate />
			<Route path="/profile" component={Profile} isPrivate />
		</Switch>
	);
}
