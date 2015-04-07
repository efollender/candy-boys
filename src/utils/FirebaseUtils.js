const Firebase = require('firebase');
const { Firebase_Creds } = require('../constants/AppConstants');

let firebaseUtils = {
  homeInstance(){
    return new Firebase(Firebase_Creds.DB_ROOT);
  },
  loginWithTwitter(){
  	this.homeInstance().authWithOAuthPopup("twitter", function(error, authData) {
		  if (error) {
		  	console.log(error);
		    return error;
		  } else {
		  	console.log(authData);
		    return authData;
		  }
		});
  },
  isLoggedIn(){
    return cachedUser && true || this.homeInstance().getAuth() || false;
  },
  logout(){
  	this.homeInstance().unauth();
  },
  toArray(obj){
    var arr = [];
    for(var key in obj){
      arr.push(obj[key]);
    }
    return arr;
  }
};

module.exports = firebaseUtils;