import { React, useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider, AuthContext } from "../components/AuthProvider";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <header>
        <h1>My Instagram Clone</h1>
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/images">Explore</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/login">
                {isLoggedIn ? <span>logout</span> : <span>login</span>}
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>{isLoggedIn ? <Outlet /> : <span>not logged in</span>}</main>

      <footer>
        <p>footer for now</p>
      </footer>
    </div>
  );
};

export default Layout;
