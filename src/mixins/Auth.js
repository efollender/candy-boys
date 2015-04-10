const FirebaseStore = require('../stores/FirebaseStore')

let Authenticated = {
  statics: {
    willTransitionTo: function(transition){
      if(!FirebaseStore.isLoggedIn){
        Login.attemptedTransition = transition;
        transition.redirect('login');
      }
    }
  }
};

module.exports = Authenticated;