const React = require('react');
const Router = require('react-router');
const {RouteHandler} = Router;

let Main = React.createClass({
	render(){
		return (
			<div className="grid-frame home container">
				<RouteHandler/>
			</div>
		);
	}
});

module.exports = Main;