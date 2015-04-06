const React = require('react');
const Navigation = require('./Navigation');

let Home = React.createClass({
	render(){
		return (
      <div id="jumbotron">
        <div className="large-3 columns">
        	<Navigation />
        </div>
      </div>
		);
	}
});

module.exports = Home;