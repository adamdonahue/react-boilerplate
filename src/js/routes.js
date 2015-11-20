/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import {Route} from 'react-router';

import App from './components/app';
import Input from './components/input';

export default (
    <Route path="/" component={App}>
      <Route path="/input" component={Input} />
    </Route>
);
