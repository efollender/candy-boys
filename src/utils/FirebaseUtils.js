const axios = require('axios');
const Firebase = require('firebase');
const { Firebase_Creds } = require('../constants/AppConstants');

let firebaseUtils = {
  homeInstance(){
    return new Firebase(Firebase_Creds.DB_ROOT);
  },
  getTourDates(){
    this.homeInstance().child('tourDates').once('value', function(snapshot){
      return this.toArray(snapshot.val());
    }.bind(this));
  },
  addNote(noteObj){
    this.homeInstance().child(noteObj.user).push(noteObj.note);
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