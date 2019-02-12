import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home/index';
import RegisterLogin from './components/Register_login/index';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register_login' exact component={RegisterLogin} />
      </Switch>
   
    </Layout>
  );   
};

export default Routes;
