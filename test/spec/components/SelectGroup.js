'use strict';

describe('SelectGroup', function () {
  var React = require('react/addons');
  var SelectGroup, component;

  beforeEach(function () {
    SelectGroup = require('components/SelectGroup.js');
    component = React.createElement(SelectGroup);
  });

  it('should create a new instance of SelectGroup', function () {
    expect(component).toBeDefined();
  });
});
