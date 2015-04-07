const AppDispatcher = require('../dispatcher/AppDispatcher');
const { ActionTypes, SoundCloud } = require('../constants/AppConstants');
const { EventEmitter } = require('events');
const objAssign = require('react/lib/Object.assign');
let CHANGE_EVENT = 'CHANGE_EVENT';

let _SCstate = {
	tracks: [],
	loaded: null
};

let SoundCloudStore = objAssign({}, EventEmitter.prototype, {
	getState(){
		return _SCstate;
	},
	setTracks(tracks){
		_SCstate.tracks = tracks;
		this.emit(CHANGE_EVENT);
	},
	setLoaded(val){
		_SCstate.loaded = val;
		this.emit(CHANGE_EVENT);
	},
	addChangeListener(cb){
		this.addListener(CHANGE_EVENT, cb);
	},
	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb);
	}
});

AppDispatcher.register((payload) => {
  let { action } = payload;
  console.log('actions', action.data)
  switch (action.actionType) {
  	case ActionTypes.GET_SC_SONGS_SUCCESS:
  		SoundCloudStore.setLoaded(true);
  		SoundCloudStore.setTracks(action.data);
  		console.log('success!');
  		break;
  	case ActionTypes.GET_SC_SONGS_ERROR:
  	  SoundCloudStore.setLoaded(true);
  	  console.log(action.err);
  		break;
  }

  SoundCloudStore.emit(CHANGE_EVENT);
});

module.exports = SoundCloudStore;
