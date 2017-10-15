import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
  <Router history={browserHistory}>
    <Route path='/' component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path='billingCycles' component={BillingCycle} />
    </Route>
    <Redirect from='*' to='/'/>
  </Router>
)