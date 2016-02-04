const React = require('react');
const Router = require('react-router');
const { RouteHandler } = Router;
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();

let AdminContainer = React.createClass({
	childContextTypes: {
	  muiTheme: React.PropTypes.object
	},
	getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
	render(){
		return (
			<div id="admin-view" className="">
				<RouteHandler />
			</div>
		);
	}
});

module.exports = AdminContainer;