const React = require('react');
const Router = require('react-router');
const FirebaseStore = require('../stores/FirebaseStore');
const Logout = require('../components/Logout');
const Login = require('../components/Login');
const { RouteHandler } = Router;

let AdminContainer = React.createClass({
	getInitialState(){
		return FirebaseStore.getState();
	},
	componentWillMount(){
		FirebaseStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		FirebaseStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(FirebaseStore.getState());
	},
	render(){
		return (
			<div id="admin-view" className="row">
				{this.state.isLoggedIn ? <Logout /> : <Login />}
			</div>
		);
	}
});

module.exports = AdminContainer;