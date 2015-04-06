const React = require('react');
const Router = require('react-router');
const { Route, DefaultRoute, RouteHandler, Link } = Router;
const App = require('../components/Main');
const Tour = require('../components/TourContainer');
const Home = require('../components/Home');
let Videos = require('../components/VideoContainer');
let Soundcloud = require('../components/Soundcloud');

module.exports = (
  <Route name="app" path="/" handler={App}>
    <Route name="tour" path="/tour" handler={Tour} />
    <Route name="soundcloud" path="/soundcloud" handler={Soundcloud} />
    <Route name="videos" path="/videos" handler={Videos} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
  );