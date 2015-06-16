const React = require('react');
const ViewActions = require('../../actions/ViewActions');
// const FirebaseStore = require('../../stores/FirebaseStore');
let Table = React.createFactory(require('react-bootstrap/lib/factories/Table'));

let EditTour = React.createClass({
	// getInitialState(){
	// 	return FirebaseStore.getState();
	// },
	// componentWillMount(){
	// 	ViewActions.getTourDates();
	// 	FirebaseStore.addChangeListener(this._onChange);
	// },
	// componentWillUnmount(){
	// 	FirebaseStore.removeChangeListener(this._onChange);
	// },
	// _onChange(){
	// 	this.setState(FirebaseStore.getState());
	// },
	// removeDate(date){
	// 	return function(date) {
	// 		ViewActions.removeDate(date);
	// 	}
	// },
	handleKeyDown(index){
			if(event.keyCode == 13){
				ViewActions.addDate({
					city: React.findDOMNode(this.refs.city).value(),
			  		date: {
			  			day: '',
			  			month: '',
			  			year: '' 
			  		},
			  		state: React.findDOMNode(this.refs.state).value(),
			  		venue: ''
				}.bind(this));
			}
	},
	tourDates(){
		return this.state.dates.map(function(key, index){
			return (
				<tr key={index}>
					<td>{key.date}</td>
					<td>{key.venue}</td>
					<td> x. </td>
				</tr>
			);
		}.bind(this));
	},
	render(){
		return (
			<table>
				<thead>
					<tr>
						<th>{"Date"}</th>
						<th>Venue</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					
					<tr>
						<td colSpan="3">Add New</td>
					</tr>
					<tr className="new-date">
						<td><input ref="city" onKeyDown={this.handleKeyDown} type="text" /></td>
						<td><input ref="state" onKeyDown={this.handleKeyDown} type="text" /></td>
					</tr>
				</tbody>
			</table>
		);
	}
});

module.exports = EditTour;