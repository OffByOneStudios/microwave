'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');
var Home = require('./Home');
var SelectGroup = require('./SelectGroup');
var SelectChoice = require('./SelectChoice');

var MicrowaveApp = React.createClass({
  getInitialState: function(){
    return {index:0};
  },

  navForward: function(){
    this.setState({index: Math.min(this.state.index + 1, 3)});
  },

  navBack: function(){
    this.setState({index: Math.min(this.state.index - 1, 0)});
  },

  navHome:function(){
    this.setState({index: 0});
  },

  selectGroup:function(e){
      this.setState({group:e.target.value, index:this.state.index + 1});
  },

  getNextChild : function(){
    var res = null;
    switch(this.state.index){
      case(0):
        res = <Home onMenu={this.navForward} onStart={this.startCook}/>;
        break;
      case(1):
        res = <SelectGroup setGroup={this.selectGroup}/>;
        break;
      case(2):
        res = <SelectChoice group={this.state.group} />;
    }
    return res;
  },

  startCook: function(){
    console.log("Time To Cook!");
  },

  render: function() {
    var child = this.getNextChild();
    var nav;
    if(this.state.index !== 0){
      nav= <div className="nav">
          <button onClick={this.navHome}>Clear</button>
          <button onClick={this.startCook}>Start</button>
          <button onClick={this.navBack}>Back</button>
        </div>;

    }
    return (
      <div className='main'>
        <button onClick={this.down}>-</button>
        <button onClick={this.up}>+</button>
        {child}
        {nav}

      </div>
    );
  }
});

module.exports = MicrowaveApp;
