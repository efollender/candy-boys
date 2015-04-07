const React = require('react');
const ViewActions = require('../actions/ViewActions');
const SCTrack = require('./SCTrack');
const SoundcloudStore = require('../stores/SoundcloudStore');

let Soundcloud = React.createClass({
	getInitialState(){
		return SoundcloudStore.getState();
	},
	componentWillMount(){
		ViewActions.getTracks();
		SoundcloudStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		SoundcloudStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(SoundcloudStore.getState());
		console.log(this.state);
	},
	render(){
		let tracks = this.state.tracks.map(function(el, index){
			return (
				<SCTrack track={el} key={index} />
			);
		});
		return (
			<div id="tracks">
				{tracks}
			</div>
		);
	}
});

module.exports = Soundcloud;