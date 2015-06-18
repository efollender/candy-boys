const React = require('react');
const FirebaseStore = require('../stores/FirebaseStore');
const ViewActions = require('../actions/ViewActions');

let Navigation = React.createClass({
	getInitialState(){
		return FirebaseStore.getState();
	},
	componentWillMount(){
		ViewActions.getLinks();
		FirebaseStore.addChangeListener(this._onChange);
	},
	componentDidMount(){
		let sideNav = document.getElementsByClassName('side-nav')[0];
		sideNav.className = 'side-nav mounted';
	},
	componentWillUnmount(){
		FirebaseStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(FirebaseStore.getState());
	},
	render(){
		let links = Object.keys(this.state.links).map(function(key, index){
			let current = this.state.links[key];
			if (current.onNavMenu){
				return (
					<li>
						<a href={current.url}>{current.title}</a>
					</li>
				);
			}
		}.bind(this));
		return (
      <ul className="side-nav">
        <li id="logo"><h1><a href="#"><img src="images/candy-flat.png"/></a></h1></li>
        <li id="tour-link"><a href="#tour">Tour</a></li>
        <li id="soundcloud"><a href="#soundcloud">Soundcloud</a></li>
        <li id="videos-link"><a href="#videos">Videos</a></li>
        {links}
      </ul>
		);
	}
});

module.exports = Navigation;