const React = require('react');

let EditVideos = React.createClass({
	createVideos(){
		return this.props.videos.map(function(key, index){
			return (
				<tr key={index}>
					<td>{key.url}</td>
					<td>{key.title}</td>
				</tr>
			);
		});
	},
	render(){
		return (
			<div className="edit-videos">
				<table>
					<tr>
						<th>URL</th>
						<th>Title</th>
					</tr>
					{this.createVideos()}
				</table>
			</div>
		);
	}
});

module.exports = EditVideos;