const React = require('react');

let VideoComponent = React.createClass({
	getID(url){
		let p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false ;
	},
	embedUrl(url){
		let id = this.getID(url);
    return 'http://www.youtube.com/embed/' + id + '?rel=0&controls=0&showinfo=0&theme=light';
	},
	render(){
		let video = this.props.video;
		return (
			<div className="large-4 small-12 columns">
	      <div className="flex-video">
	        <iframe width="420" height="315" src={this.embedUrl(video.url)} frameBorder="0" allowFullScreen></iframe>
	      </div>
	      <p>{video.title}</p>
     	</div>
		);
	}
});

module.exports = VideoComponent;