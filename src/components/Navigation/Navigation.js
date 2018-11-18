import React from 'react';

const Navigation = props => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-s py-0">
        <div className="container">
          <a href="/" className="nav-brand">
            {branding}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
