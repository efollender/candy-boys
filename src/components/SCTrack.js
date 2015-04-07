const React = require('react');
const SoundcloudUtils = require('../utils/SoundcloudUtils');

let SCTrack = React.createClass({
	getInitialState(){
		return {
			link: ''
		}
	},
	componentDidMount(){
		this.setState({
			link: this.props.track.uri,
			embed: SoundcloudUtils.getSCTrack(this.props.track.uri)
		});
	},
	render(){
		let track = this.props.track;
		console.log('embeded', this.state.embed);
		return (
			<div className="large-4 columns" id={track.id}>
				{this.state.embed}
			</div>
		);
	}
});

module.exports = SCTrack;