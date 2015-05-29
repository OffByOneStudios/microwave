'use strict';

describe('MicrowaveApp', function () {
  var React = require('react/addons');
  var MicrowaveApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MicrowaveApp = require('components/MicrowaveApp.js');
    component = React.createElement(MicrowaveApp);
  });

  it('should create a new instance of MicrowaveApp', function () {
    expect(component).toBeDefined();
  });
});
