const React = require('react');
const ViewActions = require('../actions/ViewActions');
const FirebaseStore = require('../stores/FirebaseStore');

let EditNav = React.createClass({
	getInitialState(){
		return FirebaseStore.getState();
	},
	componentWillMount(){
		ViewActions.getLinks();
		FirebaseStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		FirebaseStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(FirebaseStore.getState());
	},
	menuItems(){
		return Object.keys(this.state.links).map(function(key, value){
			let link = this.state.links[key]['url'];
			let title = this.state.links[key]['title'];
			return (
				<tr key={value}>
					<td>{title}</td>
					<td>{link}</td>
				</tr>
			)
		}.bind(this));
	},
	render(){
		let links = this.menuItems();
		return (
			<div>
				<table>
					<tr>
						<th>Title</th>
						<th>Url</th>
					</tr>
					{links}
				</table>
			</div>
		);
	}
});

module.exports = EditNav;