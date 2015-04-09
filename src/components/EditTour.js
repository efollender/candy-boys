const React = require('react');
const ViewActions = require('../actions/ViewActions');
const FirebaseStore = require('../stores/FirebaseStore');

let EditTour = React.createClass({
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
	removeDate(date){
		return function(event) {
			ViewActions.removeDate(date);
		}
	},
	handleKeyDown(index){
		
			if(event.keyCode == 13){
				// ViewActions.addDate({
				// 	city: '',
		  // 		date: {
		  // 			day: '',
		  // 			month: '',
		  // 			year: '' 
		  // 		},
		  // 		state: '',
		  // 		venue: ''
				// });
			}
	},
	tourDates(){
		return this.state.dates.map(function(key, index){
			return (
				<tr key={index}>
					<td>{key.date}</td>
					<td>{key.venue}</td>
					<td><a href='#'  onClick={this.removeDate(index)}>X</a></td>
				</tr>
			);
		}.bind(this));
	},
	render(){
		return (
			<div>
				<table>
					<tr>
						<th>{"Date"}</th>
						<th>Venue</th>
						<th>Add/Remove</th>
					</tr>
					{this.tourDates()}
					<tr>
						<td colSpan="3">Add New</td>
					</tr>
					<tr className="new-date">
						<td><input ref="date" onKeyDown={this.handleKeyDown} type="text" /></td>
						<td><input onKeyDown={this.handleKeyDown} type="text" /></td>
					</tr>
				</table>
			</div>
		);
	}
});

module.exports = EditTour;