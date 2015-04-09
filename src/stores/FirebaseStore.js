const AppDispatcher = require('../dispatcher/AppDispatcher');
const { ActionTypes } = require('../constants/AppConstants');
const { EventEmitter } = require('events');
const FirebaseUtils = require('../utils/FirebaseUtils');
const CHANGE_EVENT = 'CHANGE_EVENT';
let objAssign = require('react/lib/Object.assign');

let _state = {
	dates: [],
	videos: [],
	links: {},
	isLoggedIn: null
};

let FirebaseStore = objAssign({}, EventEmitter.prototype, {
	getState(){
		return _state;
	},
	setAuth(user){
		_state.isLoggedIn = user;
		this.emit(CHANGE_EVENT);
	},
	setDates(dates){
		_state.dates = dates;
		this.emit(CHANGE_EVENT);
	},
	setVideos(videos){
		_state.videos = videos;
		console.log('videos', videos);
		this.emit(CHANGE_EVENT);
	},
	setLinks(links){
		_state.links = links;
		this.emit(CHANGE_EVENT);
	},
	addChangeListener(cb){
		this.addListener(CHANGE_EVENT, cb);
	},
	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;
	
	switch (action.actionType){
		case ActionTypes.LOGIN_SUCCESS:
			console.log('logged in');
			FirebaseStore.setAuth(action.data);
			break;
		case ActionTypes.LOGOUT:
			FirebaseStore.setAuth(null);
			break;
		case ActionTypes.LOAD_TOUR_DATES:
			FirebaseStore.setDates(action.data);
			break;
		case ActionTypes.GET_VIDEOS:
			FirebaseStore.setVideos(action.data);
			break;
		case ActionTypes.GET_LINKS:
			FirebaseStore.setLinks(action.data);
			break;
		default:
			return true;
	}
});

module.exports = FirebaseStore;