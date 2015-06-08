const React = require('react');
const ClickToEdit = require('../../mixins/Editor');

let EditNav = React.createClass({
	menuItems(){
		return Object.keys(this.props.items).map(function(key, value){
			let link = this.props.items[key];
			return (
				<tr key={value}>
					<td><ClickToEdit text={link.title}/></td>
					<td><ClickToEdit text={link.url}/></td>
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