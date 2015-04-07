const React = require('react');
const ViewActions = require('../actions/ViewActions');
const Router = require('react-router');
const {Link} = Router;

let Login = React.createClass({
	login(){
		ViewActions.login();
	},
	render(){
		return (
			<div className="login-panel small-offset-3 small-6 columns">
				<button>
					<Link to="admin" onClick={this.login}>Login</Link>
				</button>
			</div>
		);
	}
});

module.exports = Login;