import React from "react";
import Nav from "./components/Nav.jsx";
import Home from "./components/pages/Home.jsx";
import Footer from "./components/Footer";
import "./index.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const App = () => {
  return (
    <>
      <KindeProvider
        clientId="4ddde1c825134c638b4f0fc90eec9989"
        domain="https://littlelemon.kinde.com"
        redirectUri="https://little-lemon-wheat.vercel.app"
        logoutUri="https://little-lemon-wheat.vercel.app">
        <Nav />
        <Footer />
      </KindeProvider>
    </>
  );
};

export default App;
