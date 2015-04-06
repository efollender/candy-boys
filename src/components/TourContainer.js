const React = require('react');
const TourDate = require('./TourDate');
const TourStore = require('../stores/TourStore');

let TourContainer = React.createClass({
	getInitialState(){
		return TourStore.getState();
	},
	createDates(){
		this.state.dates
	},
	render(){
		return (
			<div id="tourdates-wrap">
        <div id="tourdates" className="tour-dates small-12 columns">
          
        </div>
      </div>
		);
	}
});

module.exports = TourContainer;