import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
    render() {
      return (
        <div>
          <h1>React Boilerplate</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/input">Input</Link></li>
          </ul>
          {this.props.children}
        </div>
      );
    }
}
