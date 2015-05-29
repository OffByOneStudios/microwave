'use strict';

var MicrowaveApp = require('./MicrowaveApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={MicrowaveApp}>
    <Route name="/" handler={MicrowaveApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
