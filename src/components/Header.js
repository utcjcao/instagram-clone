import React from "react";

const Header = () => {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="/home">home</a>
          </li>
          <li>
            <a href="/feed">feed</a>
          </li>
          <li>
            <a href="/login">login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
