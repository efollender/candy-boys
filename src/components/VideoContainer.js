const React = require('react');
const VideoComponent = require('./Video');
const VideoStore = require('../stores/VideoStore');

let VideoContainer = React.createClass({
	getInitialState(){
		return VideoStore.getState();
	},
	render(){
		let videos = this.state.videos.map(function(el){
			return (
				<VideoComponent video={el} />
			);
		});
		return (
			<div className="videos" id="videos">
        <div className="overlay">
          <div className="row">
            <div className="large-4 columns large-offset-4">
              <center><h2 >VIDEOS</h2></center><hr/>
            </div>
          </div>
          {videos}
        </div>
      </div>
		);
	}
});

module.exports = VideoContainer;