import React, { Component } from 'react';

class Contact extends Component {
  // COMPONENT LIFECYCLE ───────────────────────────────────────────────────/
  // EVENT HANDLERS ───────────────────────────────────────────────────────/
  // RENDER METHOD ───────────────────────────────────────────────────────/
  render(props) {
    // Destructuring (props) ───────────────────────────────────────────────────────/
    const { email, name, phone } = this.props;

    return (
      <div className=" card card-body mb-3">
        <h3>Contant List</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
