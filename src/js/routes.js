import React from 'react';
import {Route} from 'react-router';

import App from './components/app';
import Input from './components/input';

export default (
    <Route path="/" component={App}>
      <Route path="/input" component={Input} />
    </Route>
);
