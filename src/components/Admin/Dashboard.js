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
const {AppBar, List, ListItem, LeftNav, MenuItem} = mui;

let DashboardComponent = React.createClass({
	getInitialState(){
		return {
			openNav: true
		}
	},
	toggleNav(){
		LeftNav.toggle();
		this.setState({
			openNav: !this.state.openNav
		});
		console.log('tapped');
	},
	render(){
		return (
			<div className="admin-dashboard">
				<AppBar 
					title='Candy Boys Admin' 
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonTouchTap={this.toggleNav}
				/>
				<LeftNav
					isOpen={this.state.openNav}
					docked={false}
					menuItems={[
						{ type: MenuItem.Types.SUBHEADER, text: 'Edit Data' },
						{ route: 'edit-nav', text: 'Navigation' },
						  { route: 'edit-sc', text: 'Soundcloud' },
						  { route: 'edit-tour', text: 'Tour Dates' },
						  { route: 'edit-videos', text: 'Videos' }

						]}
				/>
				<div>
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = DashboardComponent;