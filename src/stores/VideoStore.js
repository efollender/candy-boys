const AppDispatcher = require('../dispatcher/AppDispatcher');
const { ActionTypes } = require('../constants/AppConstants');
const { EventEmitter } = require('events');

let state = {
	videos: []
};

let VideoStore = {
	getState(){
		return state;
	}
};

module.exports = VideoStore;