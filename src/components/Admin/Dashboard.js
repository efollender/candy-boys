const React = require('react');
const {RouteHandler, Link} = require('react-router');
const ViewActions = require('../../actions/ViewActions');
const FirebaseStore = require('../../stores/FirebaseStore');
const EditNav = require('./EditNav');
const EditSC = require('./EditSC');
const EditTour = require('./EditTour');
const EditVideos = require('./EditVideos');
const Auth = require('../../mixins/Auth');
const mui = require('material-ui');
const {AppBar, List, ListItem} = mui;

let DashboardComponent = React.createClass({
	render(){
		return (
			<div className="grid-block admin-dashboard">
				<AppBar title='Candy Boys Admin' iconClassNameRight="muidocs-icon-navigation-expand-more"/>
				<div className="grid-content small-8 small-offset-2 columns">
					<div className="admin-nav">
						<List subheader="Edit Data" className="menu-bar">
							<ListItem><Link to="edit-nav">Navigation</Link></ListItem>
							<ListItem><Link to="edit-sc">Soundcloud</Link></ListItem>
							<ListItem><Link to="edit-tour">Tour Dates</Link></ListItem>
							<ListItem><Link to="edit-videos">Videos</Link></ListItem>
						</List>
					</div>
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = DashboardComponent;