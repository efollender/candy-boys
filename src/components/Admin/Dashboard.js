const React = require('react');
const ViewActions = require('../../actions/ViewActions');
const FirebaseStore = require('../../stores/FirebaseStore');
const EditNav = require('./EditNav');
const EditSC = require('./EditSC');
const EditTour = require('./EditTour');
const EditVideos = require('./EditVideos');
const Auth = require('../../mixins/Auth');

let DashboardComponent = React.createClass({
	
	getInitialState(){
		return FirebaseStore.getState();
	},
	componentWillMount(){
		ViewActions.getTourDates();
		ViewActions.getVideos();
		ViewActions.getLinks();
		FirebaseStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		FirebaseStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(FirebaseStore.getState());
	},
	render(){
		return (
			<div className="row admin-dashboard">
				<div className="small-6 columns">
					<EditNav items={this.state.links}/>
					<EditSC />
				</div>
				<div className="small-6 columns">
					<EditTour dates={this.state.dates}/>
					<EditVideos videos={this.state.videos}/>
				</div>
			</div>
		);
	}
});

module.exports = DashboardComponent;