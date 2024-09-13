import React, { useState } from "react";
import { closeMenu, menu } from "../constants";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { Home, About, Blog } from "./pages";
import { MainReservationForm } from "./pages/ReservationForms";
import Payment from "./pages/Payment";
import { logo } from "../constants";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import Auth from "./pages/auth/Auth";
import ProtectedRoute from "./pages/ProtectedRoute";
import PaymentNotification from "./pages/PaymentNotification";

const Nav = () => {
  const { login, register, logout, isAuthenticated, isLoading, user } =
    useKindeAuth();

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <div>
          <div className={`${showMenu ? "show" : ""} navLink-container`}>
            <ul className="navLinks">
              <li className="cursor-pointer" onClick={handleShowMenu}>
                <Link className="navLink" to="/">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer" onClick={handleShowMenu}>
                <Link className="navLink" to="/about">
                  About
                </Link>
              </li>
              <li className="cursor-pointer" onClick={handleShowMenu}>
                <Link className="navLink" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="cursor-pointer" onClick={handleShowMenu}>
                <Link className="navLink" to="/reserve">
                  Reserve Table
                </Link>
              </li>
            </ul>
            {isLoading && <div>...Loading your details</div>}
            {!isLoading && !isAuthenticated && (
              <div className="user-auth-container">
                <button
                  className="auth-button"
                  type="button"
                  onClick={() => login()}>
                  Sign In
                </button>
                <button
                  className="auth-button white-button"
                  type="button"
                  onClick={() => register()}>
                  Sign Up
                </button>
              </div>
            )}
            {!isLoading && isAuthenticated && (
              <div className="user-auth-container">
                <img
                  className="user-avatar desktop-nav"
                  src={user?.picture}
                  alt="user"
                />
                <button
                  className="auth-button"
                  type="button"
                  onClick={() => {
                    logout();
                  }}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        {isLoading && (
          <div className="for-mobile-nav">...Loading your details</div>
        )}
        {!isLoading && isAuthenticated && (
          <div className="user-auth-container mobile-nav">
            <img className="user-avatar" src={user?.picture} alt="user" />
          </div>
        )}
        <button onClick={() => handleShowMenu()} className="menuButton">
          <img src={showMenu ? closeMenu : menu} alt="menu" />
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<PaymentNotification />} />
        {/* Protected Route for the reservation form */}
        <Route
          path="/reserve"
          element={<ProtectedRoute element={<MainReservationForm />} />}
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default Nav;
