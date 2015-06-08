const React = require('react');
const Router = require('react-router');
const {RouteHandler} = Router;
const PageSlider = require('../mixins/PageSlider');

let Main = React.createClass({
	mixins: [PageSlider],
    componentDidMount: function() {
    	this.slidePage(<RouteHandler key="home"/>);
    },
	render(){
		return (
			<div className="grid-frame pageslider-container container">
				<RouteHandler />
			</div>
		);
	}
});

module.exports = Main;