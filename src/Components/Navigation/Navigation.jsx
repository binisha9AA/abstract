import React from 'react';
import { FiGrid } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { ImSearch } from 'react-icons/im';
import './Navigation.css';
import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

export default function Navigation() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleSearchToggle = () => {
    const searchBar = document.getElementById('searchbar');
    searchBar.style.display =
      searchBar.style.display === 'none' ? 'flex' : 'none';
  };
  const handleCloseSearch = () => {
    const search = document.getElementById('searchbar');
    search.style.display = 'none';
  };
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="left_nav">
            <a href="#">
              <FiGrid className="nav-logo" />
            </a>
            <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Abstract
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div id="searchbar">
            <input type="text" placeholder="Search.." className="searchbar" />
            <GrFormClose className="close_menu" onClick={handleCloseSearch} />
          </div>

          <div className="login">
            <button className="submit">Submit a request</button>
            <button className="signin">Sign in</button>
          </div>

          <div className="hamburger">
            <h2 className="hamburger_dropdown" onClick={handleSearchToggle}>
              <ImSearch />
            </h2>
            <h2 className="hamburger_dropdown" onClick={handleToggle}>
              <FiMenu />
            </h2>
          </div>
        </nav>
      </header>
    </>
  );
}
