import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import FitsPage from '../pages/FitPages/FitsPage';
import NewFitPage from '../pages/FitPages/NewFitPage';
import EditFitPage from '../pages/FitPages/EditFitPage';
import ShowFitPage from '../pages/FitPages/ShowFitPage';
import SOSsPage from '../pages/SOSPages/SOSsPage';
import NewSOSPage from '../pages/SOSPages/NewSOSPage';
import EditSOSPage from '../pages/SOSPages/EditSOSPage';
import ShowSOSPage from '../pages/SOSPages/ShowSOSPage';
import SignupPage from '../pages/User/SignupPage';
import LoginPage from '../pages/User/LoginPage';
import ProfilePage from '../pages/User/ProfilePage';
import EditProfilePage from '../pages/User/EditProfilePage';

const routes = ({ token, setToken }) => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/about' component={AboutPage} />
    <Route path='/signup' component={SignupPage} />
    <Route path='/login' component={() => <LoginPage setToken={setToken} />} />
    <Route path='/edit-profile/:id' component={EditProfilePage} />
    {token ? <Route path='/profile' component={ProfilePage} /> : <Redirect to='login' />} 
    <Route path='/fits' component={FitsPage} />
    <Route path='/new-fit' component={NewFitPage} />
    <Route path='/edit-fit/:id' component={EditFitPage} />
    <Route path='/show-fit/:id' component={ShowFitPage} />
    <Route path='/soss' component={SOSsPage} />
    <Route path='/new-sos' component={NewSOSPage} />
    <Route path='/edit-sos/:id' component={EditSOSPage} />
    <Route path='/show-sos/:id' component={ShowSOSPage} />
    <Route path='*' component={() => <div><h2>Page Not Found</h2></div>} />
  </Switch>
);

export default routes;
