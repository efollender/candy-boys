const AppDispatcher = require('../dispatcher/AppDispatcher');
const { ActionTypes } = require('../constants/AppConstants');
const FirebaseUtils = require('../utils/FirebaseUtils');
const SoundcloudUtils = require('../utils/SoundcloudUtils');

let ViewActions = {
  getTourDates(){
    FirebaseUtils.homeInstance().child('CandyData/tourDates').on('value', function(snapshot){
      AppDispatcher.handleViewAction({
        actionType: ActionTypes.LOAD_TOUR_DATES,
        data: FirebaseUtils.toArray(snapshot.val())
      });
    });
  },
  getTracks(){
  	SoundcloudUtils.getTracks()
  		.then(function(response){
  			console.log(response);
  			AppDispatcher.handleViewAction({
  				actionType: ActionTypes.GET_SC_SONGS_SUCCESS,
  				data: response.data
  			});
  		})
  		.catch(function(error){
  			AppDispatcher.handleViewAction({
  				actionType: ActionTypes.GET_SC_SONGS_ERROR,
  				err: error.message
  			});
  		});
  },
  getVideos(){
    FirebaseUtils.homeInstance().child('CandyData/videos').on('value', function(snapshot){
      AppDispatcher.handleViewAction({
        actionType: ActionTypes.GET_VIDEOS,
        data: FirebaseUtils.toArray(snapshot.val())
      });
    });
  },
  getLinks(){
    FirebaseUtils.homeInstance().child('CandyData/contact').on('value', function(snapshot){
      AppDispatcher.handleViewAction({
        actionType: ActionTypes.GET_LINKS,
        data: snapshot.val()
      });
    });
  },
  login(){
		AppDispatcher.handleViewAction({
      actionType: ActionTypes.LOGIN_SUCCESS,
      data: FirebaseUtils.loginWithTwitter()
    });
  },
  logout(){
  	AppDispatcher.handleViewAction({
  		actionType: ActionTypes.LOGOUT
  	});
  }
};

module.exports = ViewActions;