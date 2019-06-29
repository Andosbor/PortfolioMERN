import React from 'react';
import { Route, Router, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import NavBar from "./components/NavBar";

export const makeMainRoutes = () => {
    return (
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/about" component={ Home } />
              <Route exact path="/contact" component={ Contact } />

            </Switch>
  
  
          </div>
        </Router>
        
    );
  }