const React = require('react');
const ViewActions = require('../../actions/ViewActions');
const FirebaseStore = require('../../stores/FirebaseStore');
const mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin");
let TextField = mui.TextField;
let RaisedButton = mui.RaisedButton;
let DatePicker = mui.DatePicker;

let EditTour = React.createClass({
	getInitialState(){
		return FirebaseStore.getState();
	},
	componentWillMount(){
		injectTapEventPlugin();
		ViewActions.getTourDates();
		FirebaseStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		FirebaseStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		ViewActions.getTourDates();
		this.setState(FirebaseStore.getState());
	},
	removeDate(date){
		ViewActions.removeDate(date);
	},
	handleKeyDown(index){
			if(event.keyCode == 13){
				ViewActions.addDate({
					city: React.findDOMNode(this.refs.city).value,
			  		date: {
			  			day: '',
			  			month: '',
			  			year: '' 
			  		},
			  		state: React.findDOMNode(this.refs.state).value,
			  		venue: ''
				}.bind(this));
			}
	},
	getMonthFromString(mon){
   		return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1;
	},
	getDateObject(stringDate){
		let month = this.getMonthFromString(stringDate.month);
		return new Date(month + "/"+stringDate.day+"/2014");

	},
	tourDates(dates){
		return dates.map(function(key, index){
			console.log(key);
			return (
				<tr key={index}>
					<td>
						<DatePicker
							mode="portrait"
							defaultDate={this.getDateObject(key.date)}
						  	hintText="Date" />
					</td>
					<td>
						<TextField
							defaultValue={key.venue}
						/>
					</td>
					<td><RaisedButton primary={true} label="Remove Date" onClick={this.removeDate.bind(this, index)}/></td>
				</tr>
			);
		}.bind(this));
	},
	render(){
		return (
			<div>
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
							<td>
								<TextField hintText="City" ref="city" onKeyDown={this.handleKeyDown} />
							</td>
							<td>
								<TextField hintText="State" ref="state" onKeyDown={this.handleKeyDown} />
							</td>
							<td>
								<RaisedButton style={styles.button} label="Add Date"/>
							</td>
						</tr>
						{!this.state.loaded &&
							<tr>
								<td colSpan="3" className="loading-state" data-loading-message="Loading&nbsp;tour...">Loading tour...</td>
							</tr>
						}
						{this.state &&
							this.tourDates(this.state.dates)
						}
					</tbody>
				</table>
			</div>
		);
	}
});

let styles = {
	button: {
		backgroundColor: "green",
		fontSize: "2rem"
	}
};

module.exports = EditTour;