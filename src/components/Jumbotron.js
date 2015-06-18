const React = require('react');
const Navigation = require('./Navigation');

let Jumbotron = React.createClass({
	render(){
		return (
		<div id="jumbotron" className="grid-block row">
	        <div className="grid-content large-4 small-12 home-nav-container">
	        	<Navigation/>
	        </div>
	      </div>
		);
	}
});

module.exports = Jumbotron;