import React, { Component } from 'react';

class Contact extends Component {
  // COMPONENT LIFECYCLE ───────────────────────────────────────────────────/
  state = {
    showContactInfo: true
  };
  // EVENT HANDLERS ───────────────────────────────────────────────────────/
  onClickHandler = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  // RENDER METHOD ───────────────────────────────────────────────────────/
  render(props) {
    // Destructuring ───────────────────────────────────────────────────────/
    const { email, name, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className=" card card-body mb-3">
        <h3>
          {name}{' '}
          <i
            onClick={this.onClickHandler}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i className="fas fa-times-circle float-right" />
        </h3>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              <i className="fas fa-envelope-open" /> {email}
            </li>
            <li className="list-group-item">
              <i className=" fas fa-mobile-alt" /> {phone}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
