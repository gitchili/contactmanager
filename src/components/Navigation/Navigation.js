import React from 'react';

const Navigation = props => {
  // Destructuring (props) ───────────────────────────────────────────────────────/
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
        <div className="container">
          <a style={{ color: 'white' }} href="/" className="nav-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-tiem">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
