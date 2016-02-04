const React = require('react');
const ViewActions = require('../../actions/ViewActions');
const FirebaseStore = require('../../stores/FirebaseStore');
const FirebaseUtils = require('../../utils/FirebaseUtils');
const mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin");
let TextField = mui.TextField;
let RaisedButton = mui.RaisedButton;
let DatePicker = mui.DatePicker;
let List = mui.List;
let CircularProgress = mui.CircularProgress;
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
		FirebaseUtils.getTour((data)=>{
			this.setState({
				dates: data
			});
		})
	},
	render(){

		return (
			<div className="container">
				
						<div className="new-date">
							<RaisedButton key="add-date" label="Add Date"/>
						</div>
						{!this.state.loaded &&
							<CircularProgress mode="determinate" value={10} size={2} />
						}
						<List>
						{this.state.dates &&
							this.state.dates.map((key, index)=>{
								console.log(index);
								return <EditTourDate onClick={this.removeDate.bind(this, index)} date={key} key={index} />
							})
						}
						</List>
			</div>
		);
	}
});


module.exports = EditTour;