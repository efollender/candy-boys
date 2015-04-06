const AppDispatcher = require('../dispatcher/AppDispatcher');
const { ActionTypes } = require('../constants/AppConstants');
const { EventEmitter } = require('events');

let state = {
	dates: []
};

let TourStore = {
	getState(){
		return state;
	}
};

module.exports = TourStore;