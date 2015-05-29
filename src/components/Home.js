'use strict';

var React = require('react/addons');


require('styles/Home.less');

var Home = React.createClass({

  render: function () {
    return (
        <div className="Home">
          <button onClick={this.props.onMenu}>Menu</button>
          <button onClick={this.props.onStart}>Start</button>
        </div>
      );
  }
});

module.exports = Home;
