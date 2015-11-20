import React from 'react';

var Input = React.createClass({
  getInitialState: function () {
    return {};
  },
  updateValue: function (e) {
    this.setState({value: e.target.value});
  },
  render: function () {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.updateValue} />
        <h1>{this.state.value}</h1>
      </div>
    );
  }
});

export default Input;

