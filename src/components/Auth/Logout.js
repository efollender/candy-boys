const React = require('react');
const ViewActions = require('../../actions/ViewActions');
const Router = require('react-router');
const {Link} = Router;

let LogoutComponent = React.createClass({
	logout(){
		ViewActions.logout();
	},
	render(){
		return (
			<div className="login-panel small-offset-3 small-6 columns">
				<button>
					<Link to="home" onClick={this.logout}>Logout</Link>
				</button>
			</div>
		);
	}
});

module.exports = LogoutComponent;