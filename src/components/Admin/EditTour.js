const React = require('react');
const ViewActions = require('../../actions/ViewActions');
const FirebaseStore = require('../../stores/FirebaseStore');
const mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin");
let TextField = mui.TextField;
let RaisedButton = mui.RaisedButton;
let DatePicker = mui.DatePicker;
let EditTourDate = require('./EditTourDate');

let EditTour = React.createClass({
	getInitialState(){
		return FirebaseStore.getState();
	},
	componentWillMount(){
		FirebaseStore.addChangeListener(this._onChange);
	},
	componentDidMount(){
		ViewActions.getTourDates();
	},
	componentDidUpdate(){
		//ViewActions.getTourDates();
	},
	componentWillUnmount(){
		FirebaseStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(FirebaseStore.getState());
	},
	removeDate(date){
		ViewActions.removeDate(date);
		let newDates = this.state.dates;
		newDates.splice(date, 1);
		this.setState({
			dates: newDates
		});
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
						<tr className="new-date">
							<td colSpan="3">
								<RaisedButton key="add-date" label="Add Date"/>
							</td>
						</tr>
						{!this.state.loaded &&
							<tr>
								<td colSpan="3" className="loading-state" data-loading-message="Loading&nbsp;tour...">Loading tour...</td>
							</tr>
						}
						{this.state.dates &&
							this.state.dates.map((key, index)=>{
								console.log(index);
								return <EditTourDate onClick={this.removeDate.bind(this, index)} date={key} key={index} />
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
});


module.exports = EditTour;