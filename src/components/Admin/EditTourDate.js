const React = require('react');
const ClickToEdit = require('../../mixins/Editor');

let EditTourDate = React.createClass({
	componentWillMount(){
		this.setState(this.props.date);
	},
	handleChange(event){
		if(event.keyCode == 13){
			this.setState({
				city: this.refs.city.getDOMNode().innerText,
		  		date: {
		  			day: this.refs.day.getDOMNode().innerText,
		  			month: this.refs.month.getDOMNode().innerText,
		  			year: this.refs.year.getDOMNode().innerText
		  		},
		  		state: this.refs.state.getDOMNode().innerText,
		  		venue: this.refs.venue.getDOMNode().innerText
			});
			this.props.onChange(this);
		}
	},
	render(){
		let key = this.props.date;	
		return (
			<tr onKeyDown={this.handleChange}>
				<td>
					<ClickToEdit text={key.date.month} ref="month"/>
					<ClickToEdit ref="day" text={key.date.day} />
					<ClickToEdit ref="year" text={key.date.year} />
				</td>
				<td>
					<ClickToEdit text={key.venue} ref="venue" />
					<ClickToEdit text={key.city} ref="city" />
					<ClickToEdit text={key.state} ref="state" />
				</td>
				<td><a href='#'  >X</a></td>
			</tr>
		);
	}
});

module.exports = EditTourDate;