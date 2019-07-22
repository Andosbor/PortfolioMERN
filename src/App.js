import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import Home from './pages/home/home';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import ResumePic from './assets/images/TechnicalResumeAO.pdf'

import NavBar from "./components/NavBar";


class App extends Component{

  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ Home } />
          <Route path="/contact" component={ Contact } />
          <Route path="/portfolio" component={ Portfolio } />
          <Route path="/resume" component={ Resume } />
          {/* <Redirect from='*' to='/' /> */}


        </Switch>


      </div>
    </BrowserRouter>
    );
  }
}

export default App;
