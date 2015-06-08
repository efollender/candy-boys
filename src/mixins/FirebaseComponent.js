const React = require('react');
const FirebaseStore = require('../stores/FirebaseStore');

let FirebaseComponent = {
	getInitialState(){
		return FirebaseStore.getState();
	},
	componentWillUnmount(){
		FirebaseStore.removeChangeListener(this._onChange);
	},
	_onChange(){
		this.setState(FirebaseStore.getState());
	}	
};


module.exports = FirebaseComponent;