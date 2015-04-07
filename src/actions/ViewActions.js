const AppDispatcher = require('../dispatcher/AppDispatcher');
const { ActionTypes } = require('../constants/AppConstants');
const FirebaseUtils = require('../utils/FirebaseUtils');

let ViewActions = {
  getTourDates(){
    FirebaseUtils.homeInstance().child('tourDates').on('value', function(snapshot){
      AppDispatcher.handleViewAction({
        actionType: ActionTypes.LOAD_TOUR_DATES,
        data: FirebaseUtils.toArray(snapshot.val())
      });
    });
  }
};

module.exports = ViewActions;