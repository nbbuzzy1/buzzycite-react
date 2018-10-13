import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../containers/DashboardPage';
import BuzzyCiteApp from '../playground/BuzzyCiteApp';
import SupremePost from '../containers/SupremePost';
import SupremePre from '../containers/SupremePre';
import AppealPostPrint from '../containers/AppealPostPrint';
import AppealPostNonPrint from '../containers/AppealPostNonPrint';
import AppealPrePrint from '../containers/AppealPrePrint';
import AppealPreNonPrint from '../containers/AppealPreNonPrint';
import NotFoundPage from '../containers/NotFoundPage';
import Header from '../containers/Header';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/SupremePost" component={SupremePost} />
        <Route path="/SupremePre" component={SupremePre} />
        <Route path="/AppealPostPrint" component={AppealPostPrint} />
        <Route path="/AppealPostNonPrint" component={AppealPostNonPrint} />
        <Route path="/AppealPrePrint" component={AppealPrePrint} />
        <Route path="/AppealPreNonPrint" component={AppealPreNonPrint} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
