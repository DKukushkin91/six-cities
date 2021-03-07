import React from 'react';
import MainPage from '../main-page/main-page';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import DetailOfferScreen from '../detail-offer-screen/detail-offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {Paths} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Paths.MAIN}>
          <MainPage/>
        </Route>
        <PrivateRoute exact path={Paths.FAVORITES}
          render={()=> <FavoritesScreen/>}
        >
        </PrivateRoute>
        <Route exact path={Paths.LOGIN}>
          <LoginScreen/>
        </Route>
        <Route exact path={Paths.OFFER}>
          <DetailOfferScreen/>;
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
