const FirebaseUtils = require('../utils/FirebaseUtils')

let Authenticated = {
  statics: {
    willTransitionTo: function(transition){
      if(!FirebaseUtils.isLoggedIn()){
        Login.attemptedTransition = transition;
        transition.redirect('login');
      }
    }
  }
};

module.exports = Authenticated;