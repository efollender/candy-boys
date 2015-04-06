const AppDispatcher = require('../dispatcher/AppDispatcher');
const { ActionTypes, SoundCloud } = require('../constants/AppConstants');
const { EventEmitter } = require('events');

let state = {
	client_id: SoundCloud.CLIENT_ID,
	user: SoundCloud.USER
};

let SoundCloudStore = {
	getState(){
		return state;
	},

};

SoundCloudStore.dispatchToken = AppDispatcher.register((payload) => {
  let { action } = payload;

  switch action {
  	case ActionTypes.GET_SC_SONGS:
  	break;
  	case ActionTypes.GET_SC_SONGS_SUCCESS:
  	break;
  	case ActionTypes.GET_SC_SONGS_ERROR:
  	break;
  }

  SoundCloudStore.emitChange();
});

module.exports = SoundCloudStore;
