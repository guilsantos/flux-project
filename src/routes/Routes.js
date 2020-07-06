import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard'
import Sidebar from '../components/Sidebar'
// import Login from '../../containers/Login'
// import Accounts from '../../containers/Accounts'
// import Account from '../../containers/Account'
// import Transactions from '../../containers/Transactions'
// import Transaction from '../../containers/Transaction'

import PATCHES from './patch'

const {
  LOGIN,
  BACK_OFFICE,
  DASHBOARD,
  // ACCOUNT,
  // TRANSACTIONS,
  // TRANSACTION
} = PATCHES

const BackOffice = () => (
  <div>
    <Sidebar />
    <Switch>
      <Route exact path={DASHBOARD} component={Dashboard} />
      {/* <Route exact path={ACCOUNTS} component={Accounts} /> */}
      {/* <Route path={ACCOUNT} component={Account} /> */}
      {/* <Route exact path={TRANSACTIONS} component={Transactions} /> */}
      {/* <Route exact path={TRANSACTION} component={Transaction} /> */}
      {/* <Redirect to={ACCOUNTS} /> */}
      <Redirect to={DASHBOARD} />
    </Switch>
  </div>
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={BACK_OFFICE} component={BackOffice} />
      <Route exact path={LOGIN} component={Login} />
      <Redirect to={LOGIN} />
      <Redirect to={BACK_OFFICE} />
    </Switch>
  </BrowserRouter>
)

export default Routes
