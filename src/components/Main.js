const React = require('react');
const Router = require('react-router');
const {RouteHandler} = Router;

let Main = React.createClass({
	render(){
		return (
			<body>
				<RouteHandler />
			</body>
		);
	}
});

module.exports = Main;