const React = require('react');
const Router = require('react-router');
const {RouteHandler} = Router;

let Main = React.createClass({
	render(){
		return (
			<div className="home">
				<RouteHandler/>
			</div>
		);
	}
});

module.exports = Main;