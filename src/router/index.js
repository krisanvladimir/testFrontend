import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { useState } from 'react';

export const Routers = () => {
  const [auth, setAuth] = useState(false);

  const onAuthChange = () => {
    setAuth(true);
  };
  return (
    <Router>
      <Switch>
        {auth && (
          <Route path={'/'} exact>
            <HomePage />
          </Route>
        )}
        {!auth && (
          <Route path={'/login'}>
            <LoginPage setAuth={onAuthChange} />
          </Route>
        )}
        {auth ? <Redirect to={'/'} /> : <Redirect to={'/login'} />}
      </Switch>
    </Router>
  );
};
