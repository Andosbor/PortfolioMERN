import React, { Component } from 'react';
import Home from './pages/home/home';
import './App.css';

class App extends Component{
  
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {
    return (
      <Home />
    );
  }
}

export default App;
