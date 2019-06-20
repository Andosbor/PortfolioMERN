import React from 'react';
import { Route, Router, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import history from './history';
import NavBar from "./components/NavBar";

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
          <div>
            <NavBar history={history} />
            <Switch>
              <Route exact path="/" render={(props) => <App {...props} />} />
              <Route path="/home" render={(props) => {
                return <Home {...props} /> 
              }}/>
              <Route exact path="/home" render={(props) => <App {...props} />} />
                
              <Route exact path="/contact" render={(props) => {
                return (auth.isAuthenticated())
                  ? <Contact history={props.history} />
                  : <Redirect to="/" />;
                }}
              />
              <Route exact path="/play/:id" render={(props) => {
                return (auth.isAuthenticated())
                  ? <Play auth={auth} history={props.history} match={props.match} />
                  : <Redirect to="/" />;
                }}
              />
              <Route exact path="/choosegame" render={(props) => {
                return (auth.isAuthenticated())
                  ? <ChooseGame auth={auth} history={props.history} />
                  : <Redirect to="/" />;
                }}
              />
            {/* Else (no match), redirect them to home page */}
              <Route render={() =>
                <Redirect to="/" />
              }
              />
  
            </Switch>
  
  
          </div>
        </Router>
        
    );
  }