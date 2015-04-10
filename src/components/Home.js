const React = require('react');
const Router = require('react-router');
const {RouteHandler} = Router;

let Home = React.createClass({
	render(){
		return (
      <div id="jumbotron" className="row">
        <div className="large-3 small-12 columns">
        	<RouteHandler />
        </div>
      </div>
		);
	}
});

module.exports = Home;