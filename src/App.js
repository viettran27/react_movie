import React from "react";
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import RoutesConfig from "./config/RoutesConfig.jsx";


function App() {
  return (
    <BrowserRouter>

      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
