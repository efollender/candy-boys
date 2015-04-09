const React = require('react');
const SoundcloudUtils = require('../utils/SoundcloudUtils');

let SCTrack = React.createClass({
	componentDidMount(){
		SoundcloudUtils.getTrack(this.props.track.uri)
		.then(function(response){
			document.getElementById(this.props.track.id).innerHTML = response.data.html;
		}.bind(this))
		.catch(function(err){
			console.log(err);
		});
	},
	render(){
		let track = this.props.track;
		return (
			<div className="large-4 columns" id={track.id}></div>
		);
	}
});

module.exports = SCTrack;