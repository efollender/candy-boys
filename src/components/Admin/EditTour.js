const React = require('react');
const EditTourDate = require('./EditTourDate');
const ViewActions = require('../../actions/ViewActions');

let EditTour = React.createClass({
	removeDate(date){
		return function(date) {
			ViewActions.removeDate(date);
		}
	},
	handleKeyDown(index){
		if(event.keyCode == 13){
			ViewActions.addDate({
				city:this.refs.city.getDOMNode().value,
		  		date: {
		  			day: '',
		  			month: '',
		  			year: '' 
		  		},
		  		state:this.refs.state.getDOMNode().value,
		  		venue: ''
			}.bind(this));
		}
	},
	componentWillUpdate(){
		console.log(this.props.dates);
	},
	handleChange(index, child){
		console.log('chanksdjfhsakjfh')
		this.props.dates[index] = child.state;
	},
	render(){
		let tourDates = this.props.dates.map(function(key, index){
			return (
				<EditTourDate date={key} key={index} onChange={this.handleChange.bind(this, index)}/>
			);
		}.bind(this));
		return (
			<div>
				<table>
					<tr>
						<th>{"Date"}</th>
						<th>Venue</th>
						<th>Add/Remove</th>
					</tr>
					{tourDates}
					<tr>
						<td colSpan="3">Add New</td>
					</tr>
					<tr className="new-date">
						<td><input ref="city" onKeyDown={this.handleKeyDown} type="text" /></td>
						<td><input ref="state" onKeyDown={this.handleKeyDown} type="text" /></td>
					</tr>
				</table>
			</div>
		);
	}
});

module.exports = EditTour;