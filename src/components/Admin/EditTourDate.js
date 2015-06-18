const React = require('react');
const mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin");
let TextField = mui.TextField;
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
		let key = this.props.date;	
		return (
				<tr ref="dateWrapper">
					<td>
						<DatePicker
							mode="portrait"
							ref="date"
							defaultDate={this.getDateObject(key.date)}
						  	hintText="Date" />
					</td>
					<td>
						<TextField
							defaultValue={key.venue}
							ref="venue"
						/>
					</td>
					<td><RaisedButton primary={true} label="Remove Date" onClick={this.props.onClick} /></td>
				</tr>
			);
	}
});

module.exports = EditTourDate;