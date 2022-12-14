import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
      <>
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#"><span
                className="text-warning">Build</span>Con</a>
            <button aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation" className="navbar-toggler"
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                    type="button"><span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse"
                 id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Blogs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">Team</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="./login/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="./signup/signup">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  );
};

export default Header;