const React = require('react');

let Login = React.createClass({
	render(){
		return (
			<div className="small-6 columns">
				<input type="email" placeholder="Enter your email" />
				<input type="password" placeholder="pw here" />
				<input type="submit" value="submit" />
			</div>
		);
	}
});

module.exports = Login;