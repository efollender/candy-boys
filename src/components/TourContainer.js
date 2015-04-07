const React = require('react');
const TourDate = require('./TourDate');
const FirebaseStore = require('../stores/FirebaseStore');
const ViewActions = require('../actions/ViewActions');

let TourContainer = React.createClass({
	getInitialState(){
		return FirebaseStore.getState();
	},
	componentWillMount(){
		ViewActions.getTourDates();
		FirebaseStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		FirebaseStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(FirebaseStore.getState());
	},
	render(){
		console.log('state?',this.state.dates);
		let tourDates = this.state.dates.map(function(el, index){
			return (
				<TourDate key={index} date={el} />
			);
		});
		return (
			<div id="tourdates-wrap" className="row">
        <div id="tourdates" className="tour-dates">
          {tourDates}
        </div>
      </div>
		);
	}
});

module.exports = TourContainer;