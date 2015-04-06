"use strict";
const React = require('react');
const Router = require('react-router');
const routes = require('./routes/Routes');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});