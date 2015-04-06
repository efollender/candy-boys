const React = require('react');

let VideoComponent = React.createClass({
	render(){
		let video = this.props.video;
		return (
			<div className="large-4 columns">
	      <div className="flex-video">
	        <iframe width="420" height="315" src="{{ embedUrl(video.url) }}" frameborder="0" allowfullscreen></iframe>
	      </div>
	      <p>{video.title}</p>
     	</div>
		);
	}
});

module.exports = VideoComponent;