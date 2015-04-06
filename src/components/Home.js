const React = require('react');
const Navigation = require('./Navigation');

let Home = React.createClass({
	render(){
		return (
      <div id="jumbotron" className="row">
        <div className="large-3 small-12 columns">
        	<Navigation />
        </div>
      </div>
		);
	}
});

module.exports = Home;