import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import BaseLayout from '../components/templates/BaseLayout';
import { A001 } from '../pages/A001';

const Routes = () => {
  return (
    <Router>
        <Route path="/">
          <BaseLayout>
            <Switch>
              <Route path="/A001" component={A001} />
              <Redirect to="/A001" />
            </Switch>
          </BaseLayout>
        </Route>
    </Router>
  )
};

export default Routes;