const React = require('react');
const VideoComponent = require('./Video');
const FirebaseStore = require('../stores/FirebaseStore');
const ViewActions = require('../actions/ViewActions');

let VideoContainer = React.createClass({
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
	render(){
		let videos = this.state.videos.map(function(el, index){
			return (
				<VideoComponent key={index} video={el} />
			);
		});
		return (
			<div className="videos" id="videos">
		        <div className="overlay">
		          <div className="row">
		          	<div className="flex-video large-12 columns">
				        <iframe id="large-video" width="420" height="315" src="#" frameBorder="0" allowFullScreen></iframe>
				     </div>
		            {videos}
		          </div>
		        </div>
		     </div>
		);
	}
});

module.exports = VideoContainer;