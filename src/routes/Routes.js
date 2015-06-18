const React = require('react');
const Router = require('react-router');
const { Route, DefaultRoute, RouteHandler, Link } = Router;
const App = require('../components/Main');
const Tour = require('../components/TourContainer');
const Home = require('../components/Home');
const AdminContainer = require('../components/Admin/AdminContainer');
const Login = require('../components/Login');
const Dashboard = require('../components/Admin/Dashboard');
let Videos = require('../components/VideoContainer');
let Soundcloud = require('../components/Soundcloud');
let Navigation = require('../components/Navigation');
let EditNav = require('../components/Admin/EditNav');
let EditSC = require('../components/Admin/EditSC');
let EditTour = require('../components/Admin/EditTour');
let EditVideos = require('../components/Admin/EditVideos');

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="admin" path="/admin" handler={AdminContainer}>
    	<Route path="/dashboard" name="dashboard" handler={Dashboard}>
        <Route path="/edit-nav" name="edit-nav" handler={EditNav} />
        <Route path="/edit-sc" name="edit-sc" handler={EditSC} />
        <Route path="/edit-tour" name="edit-tour" handler={EditTour} />
        <Route path="/edit-videos" name="edit-videos" handler={EditVideos} />
      </Route>
    </Route>
  </Route>
  );