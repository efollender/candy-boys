const React = require('react');
const Router = require('react-router');
const {Link} = Router;
const LinksStore = require('../stores/LinksStore');

let Navigation = React.createClass({
	// getInitialState(){
	// 	return LinksStore.getState();
	// },
	componentDidMount(){
		let sideNav = document.getElementsByClassName('side-nav')[0];
		sideNav.className = 'side-nav mounted';
	},
	render(){
		return (
      <ul className="side-nav">
        <li><h1><a href="#"><img src="images/candy-flat.png"/></a></h1></li>
        <li id="tour-link"><Link to="tour">Tour</Link></li>
        <li id="soundcloud"><Link to="soundcloud">Soundcloud</Link></li>
        <li><a href="{ this.state.facebook }">Facebook</a></li>
        <li><a href="{ this.state.tumblr }">Tumblr</a></li>
        <li><a href="{ this.state.twitter }">Twitter</a></li>
        <li id="videos-link"><Link to="videos">Videos</Link></li>
        <li><a href="{ this.state.merch }">Etsy</a></li>
      </ul>
		);
	}
});

module.exports = Navigation;