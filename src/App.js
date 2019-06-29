import React, { Component } from 'react';

import './App.css';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import Home from './pages/home/home';
import Contact from './pages/contact';

import NavBar from "./components/NavBar";


class App extends Component{

  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/about" component={ Home } />
          <Route exact path="/contact" component={ Contact } />

        </Switch>


      </div>
    </BrowserRouter>
    );
  }
}

export default App;
