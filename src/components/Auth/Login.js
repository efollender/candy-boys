const React = require('react');
const ViewActions = require('../../actions/ViewActions');
const FirebaseStore = require('../../stores/FirebaseStore');
const Router = require('react-router');
const {Link} = Router;

let Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  statics: {
  	willTransitionTo: function(transition){
      if(FirebaseStore.isLoggedIn){
      	transition.redirect('admin');
      }
    },
    attemptedTransition: null
  },
  getInitialState(){
  	console.log('logged in?', FirebaseStore.getState().isLoggedIn);
    return {
      error: false
    }
  },
  handleSubmit(e){
    e.preventDefault();
    ViewActions.login();
    if(Login.attemptedTransition){
	    var transition = Login.attemptedTransition;
	    Login.attemptedTransition = null;
	    transition.retry();
	  } else {
	    this.context.router.replaceWith('/admin');
	  }
  },
  render(){
    var errors = this.state.error ? <p> Error on Login </p> : '';
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-primary">Login</button>
          {errors}
        </form>
      </div>
    );
  }
});

module.exports = Login;