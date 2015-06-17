const React = require('react');
const {RouteHandler, Link} = require('react-router');
const ViewActions = require('../../actions/ViewActions');
const FirebaseStore = require('../../stores/FirebaseStore');
const EditNav = require('./EditNav');
const EditSC = require('./EditSC');
const EditTour = require('./EditTour');
const EditVideos = require('./EditVideos');
const Auth = require('../../mixins/Auth');

let DashboardComponent = React.createClass({
	render(){
		return (
			<div className="grid-block admin-dashboard">
				<div className="grid-content small-8 small-offset-2 columns">
					<div className="admin-nav">
						<ul className="menu-bar">
							<li><Link to="edit-nav">Navigation</Link></li>
							<li><Link to="edit-sc">Soundcloud</Link></li>
							<li><Link to="edit-tour">Tour Dates</Link></li>
							<li><Link to="edit-videos">Videos</Link></li>
						</ul>
					</div>
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = DashboardComponent;