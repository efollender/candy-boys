const React = require('react');
const SoundcloudUtils = require('../utils/SoundcloudUtils');

let SCTrack = React.createClass({
	componentDidMount(){
		SoundcloudUtils.getTrack(this.props.track.uri)
		.then(function(response){
			console.log('got track')
			document.getElementById(this.props.track.id).innerHTML = response.data.html;
		}.bind(this))
		.catch(function(err){
			console.log(err);
		});
	},
	render(){
		return (
			<div className="large-4 columns" id={this.props.track.id}></div>
		);
	}
});

module.exports = SCTrack;