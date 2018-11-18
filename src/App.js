import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Contacts from './components/Contacts/Contacts';
import './App.css';

class App extends Component {
  // COMPONENT LIFECYCLE ───────────────────────────────────────────────────/
  // EVENT HANDLERS ───────────────────────────────────────────────────────/
  // RENDER METHOD ───────────────────────────────────────────────────────/
  render() {
    return (
      <div className="App">
        <Navigation branding="branding" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
