const React = require('react');
const Jumbotron = require('./Jumbotron');
const Tour = require('./TourContainer');


let Home = React.createClass({
	render(){
		return (
		<div>
	      <Jumbotron/>
	      <Tour/>
      	</div>
		);
	}
});

module.exports = Home;