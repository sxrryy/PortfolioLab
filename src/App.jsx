import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
