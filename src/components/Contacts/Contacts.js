import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  // COMPONENT LIFECYCLE ───────────────────────────────────────────────────/
  state = {
    contacts: [
      {
        id: 1,
        name: 'james Chili',
        email: 'james@gmail.com',
        phone: '333-333-3333'
      },
      {
        id: 2,
        name: 'jeff foobar',
        email: 'jeff@gmail.com',
        phone: '222-222-2222'
      },
      {
        id: 3,
        name: 'Kim Nan',
        email: 'Kim@gmail.com',
        phone: '555-555-5555'
      }
    ]
  };

  // EVENT HANDLERS ───────────────────────────────────────────────────────/

  // RENDER METHOD ───────────────────────────────────────────────────────/
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
