const React = require('react');
const Router = require('react-router');
const {RouteHandler} = Router;

let Home = React.createClass({
	render(){
		return (
      <div id="jumbotron" className="grid-block row">
        <div className="grid-content large-4 small-12 home-nav-container">
        	<RouteHandler />
        </div>
      </div>
		);
	}
});

module.exports = Home;