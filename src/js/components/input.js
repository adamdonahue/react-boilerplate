import React from 'react';

/*
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateValue(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    console.log('rendering');
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.updateValue.bind(this)} />
        <h1>{this.state.value}</h1>
      </div>
    );
  }
}
*/


var Input = React.createClass({
  getInitialState: function () {
    return {}
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

