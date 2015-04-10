const React = require('react');
const EditNav = require('./EditNav');
const EditSC = require('./EditSC');
const EditTour = require('./EditTour');
const EditVideos = require('./EditVideos');

let DashboardComponent = React.createClass({
	render(){
		return (
			<div className="row admin-dashboard">
				<div className="small-6 columns">
					<EditNav />
					<EditSC />
				</div>
				<div className="small-6 columns">
					<EditTour />
					<EditVideos />
				</div>
			</div>
		);
	}
});

module.exports = DashboardComponent;