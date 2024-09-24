import React from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer";
import "./index.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Blog } from "./components/pages/index.js";
import PaymentNotification from "./components/pages/ReservationForms/PaymentNotification.jsx";
import ProtectedRoute from "./components/pages/ProtectedRoute.jsx";
import MainReservationForm from "./components/pages/ReservationForms/MainReservationForm.jsx";
import Auth from "./components/pages/auth/Auth.jsx";

const App = () => {
  return (
    <>
      <KindeProvider
        clientId="4ddde1c825134c638b4f0fc90eec9989"
        domain="https://littlelemon.kinde.com"
        redirectUri="https://little-lemon-wheat.vercel.app"
        logoutUri="https://little-lemon-wheat.vercel.app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/confirmation" element={<PaymentNotification />} />
          <Route
            path="/reserve"
            element={<ProtectedRoute element={<MainReservationForm />} />}
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </KindeProvider>
    </>
  );
};

export default App;
