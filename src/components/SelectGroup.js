'use strict';

var React = require('react/addons');


require('styles/SelectGroup.less');

var SelectGroup = React.createClass({

  render: function () {
    return (
        <div className="SelectGroup">
          <button value="food" onClick={this.props.setGroup}>Food</button>
          <button value="Beverages" onClick={this.props.setGroup}>Beverages</button>
        </div>
      );
  }
});

module.exports = SelectGroup;
