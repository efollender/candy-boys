const React = require('react');
const Jumbotron = require('./Jumbotron');
const Tour = require('./TourContainer');
const Soundcloud = require('./Soundcloud');
let css = require('../styles/index.styl'); 


let Home = React.createClass({
	render(){
		return (
		<div>
	      <Jumbotron/>
	      <Tour/>
	      <Soundcloud/>
      	</div>
		);
	}
});

module.exports = Home;