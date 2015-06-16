const React = require('react');
const ViewActions = require('../../actions/ViewActions');
const FirebaseStore = require('../../stores/FirebaseStore');

let EditVideos = React.createClass({
	getInitialState(){
		return FirebaseStore.getState();
	},
	componentWillMount(){
		ViewActions.getVideos();
		FirebaseStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		FirebaseStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(FirebaseStore.getState());
	},
	createVideos(){

	},
	render(){
		return (
			<div className="edit-videos">

			</div>
		);
	}
});

module.exports = EditVideos;