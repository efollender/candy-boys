const AppDispatcher = require('../dispatcher/AppDispatcher');
const { ActionTypes } = require('../constants/AppConstants');
const { EventEmitter } = require('events');
const FirebaseUtils = require('../utils/FirebaseUtils');
const CHANGE_EVENT = 'CHANGE_EVENT';
var objAssign = require('react/lib/Object.assign');

let _state = {
	dates: []
};

let TourStore = objAssign({}, EventEmitter.prototype, {
	getState(){
		return _state;
	},
	setDates(dates){
		_state.dates = dates;
		this.emit(CHANGE_EVENT);
	},
	addChangeListener(cb){
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch (action.actionType){
		case ActionTypes.LOAD_TOUR_DATES:
			TourStore.setDates(action.data);
			break;
		default:
			return true;
	}
});

module.exports = TourStore;