const React = require('react');
const mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin");
let ListItem = mui.ListItem;
let RaisedButton = mui.RaisedButton;
let DatePicker = mui.DatePicker;

let EditTourDate = React.createClass({
	componentWillMount(){
		injectTapEventPlugin();
	},
	componentWillUnmount(){
		React.findDOMNode(this.refs.dateWrapper).class = 'remove';
	},
	getMonthFromString(mon){
   		return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1;
	},
	getDateObject(stringDate){
		let month = this.getMonthFromString(stringDate.month);
		return new Date(month + "/"+stringDate.day+"/2014");

	},
	handleChange(event){
		if(event.keyCode == 13){
			this.setState({
				city: React.findDOMNode(this.refs.city).value,
		  		date: React.findDOMNode(this.refs.date).value,
		  		state: React.findDOMNode(this.refs.state).value,
		  		venue: React.findDOMNode(this.refs.venue).value
			});
			this.props.onChange(this);
		}
	},
	render(){
		let show = this.props.date;	
		return (
				<ListItem ref="dateWrapper"
					secondaryText={show.city + ", " + show.state}
					secondaryLines={2}
					rightToggle={<RaisedButton label="Edit"/>}
					>
					<strong>{this.getDateObject(show.date).toDateString()}</strong> at <strong>{show.venue}</strong>
				</ListItem>
			);
	}
});

module.exports = EditTourDate;

// <DatePicker
// 	mode="portrait"
// 	ref="date"
// 	defaultDate={this.getDateObject(show.date)}
//   	hintText="Date" />
// <TextField
// 	defaultValue={show.venue}
// 	ref="venue"
// />