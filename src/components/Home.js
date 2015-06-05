const React = require('react');
const Router = require('react-router');
const {RouteHandler} = Router;

let Home = React.createClass({
	render(){
		return (
      <div id="jumbotron" className="row">
        <div className="large-4 small-12 large-offset-4 columns">
        	<RouteHandler />
        </div>
      </div>
		);
	}
});

module.exports = Home;