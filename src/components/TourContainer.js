const React = require('react');
const TourDate = require('./TourDate');
const TourStore = require('../stores/TourStore');
const ViewActions = require('../actions/ViewActions');

let TourContainer = React.createClass({
	getInitialState(){
		return TourStore.getState();
	},
	componentDidMount(){
		ViewActions.getTourDates();
		TourStore.addChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(TourStore.getState());
	},
	render(){
		let tour = this.state.dates.map(function(el){
			return (
				<TourDate date={el} />
			);
		});
		return (
			<div id="tourdates-wrap" className="row">
        <div id="tourdates" className="tour-dates small-12 columns">
          {tour}
        </div>
      </div>
		);
	}
});

module.exports = TourContainer;