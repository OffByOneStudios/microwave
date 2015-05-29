'use strict';

describe('SelectChoice', function () {
  var React = require('react/addons');
  var SelectChoice, component;

  beforeEach(function () {
    SelectChoice = require('components/SelectChoice.js');
    component = React.createElement(SelectChoice);
  });

  it('should create a new instance of SelectChoice', function () {
    expect(component).toBeDefined();
  });
});
