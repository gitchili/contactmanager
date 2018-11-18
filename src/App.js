import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contacts/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation branding="branding" />
        <Contact name="james" email="jim@gmail.com" phone="333-333-3333" />
        <Contact name="kim" email="kim@gmail.com" phone="555-555-5555" />
        <Contact name="joe" email="joe@gmail.com" phone="777-777-7777" />
      </div>
    );
  }
}

export default App;
