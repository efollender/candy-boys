const React = require('react');
const Router = require('react-router');
const { RouteHandler } = Router;

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