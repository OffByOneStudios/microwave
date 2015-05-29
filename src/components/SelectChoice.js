'use strict';

var React = require('react/addons');


require('styles/SelectChoice.less');

var SelectChoice = React.createClass({

  render: function () {
    return (
        <div className="SelectChoice">
          <h1>Choices</h1>
          <p>{this.props.group}</p>
        </div>
      );
  }
});

module.exports = SelectChoice;
