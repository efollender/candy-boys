const { Dispatcher } = require('flux');
const { PayloadSources } = require('../constants/AppConstants');
const assign = require('react/lib/Object.assign');

let AppDispatcher = assign(new Dispatcher(), {

  handleServerAction (action) {
    let payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    //this.dispatch(payload);
  },

  handleViewAction (action) {
    console.log('dispatcher', action);
    let payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;