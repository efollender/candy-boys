const AppDispatcher = require('../dispatcher/AppDispatcher');
const { ActionTypes, SoundCloud } = require('../constants/AppConstants');
const { EventEmitter } = require('events');
const objAssign = require('react/lib/Object.assign');
const SoundcloudUtils = require('../utils/SoundcloudUtils');
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
		tracks.map(function(track){
			console.log('track', track);
			SoundcloudUtils.getTrack(track.uri)
				.then(function(response){
					track = track.concat(response.data);
					_SCstate.tracks.push(track);
					console.log('state!', _SCstate);
				})
				.catch(function(err){
					console.log('err', err.message);
				});
		});
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
  switch (action.actionType) {
  	case ActionTypes.GET_SC_SONGS_SUCCESS:
  		SoundCloudStore.setLoaded(true);
  		SoundCloudStore.setTracks(action.data);
  		break;
  	case ActionTypes.GET_SC_SONGS_ERROR:
  	  SoundCloudStore.setLoaded(true);
  	  console.log(action.err);
  		break;
  }

  SoundCloudStore.emit(CHANGE_EVENT);
});

module.exports = SoundCloudStore;
