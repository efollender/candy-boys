const React = require('react');
const Router = require('react-router');
const {Link} = Router;
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
		let links = Object.keys(this.state.links).map(function(key, value){
			let current = this.state.links.key;
			return (
				<li>
					<a>{current.value}</a>
				</li>
			);
		});
		return (
      <ul className="side-nav">
        <li><h1><a href="#"><img src="images/candy-flat.png"/></a></h1></li>
        <li id="tour-link"><Link to="tour">Tour</Link></li>
        <li id="soundcloud"><Link to="soundcloud">Soundcloud</Link></li>
        <li id="videos-link"><Link to="videos">Videos</Link></li>
        {links}
      </ul>
		);
	}
});

module.exports = Navigation;