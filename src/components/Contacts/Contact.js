import React, { Component } from 'react';

class Contact extends Component {
  render(props) {
    const { email, name, phone } = this.props;

    return (
      <div>
        <h3>Contant List</h3>
        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
