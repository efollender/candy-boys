const React = require('react');
const Router = require('react-router');
const { RouteHandler } = Router;
const AuthStore = require('../stores/AuthStore');

let AdminContainer = React.createClass({
	render(){
		return (
			<div id="admin-view" className="row">
				<RouteHandler />
			</div>
		);
	}
});

module.exports = AdminContainer;