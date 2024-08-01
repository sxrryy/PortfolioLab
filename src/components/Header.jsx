import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white p-4">
      <nav className="container mx-auto flex flex-col items-end">
        <div className="flex justify-end w-full mb-2">
          <Link to="/login" className="text-black text-lg mx-2">
            Zaloguj
          </Link>
          <Link to="/register" className="text-black text-lg mx-2">
            Załóż konto
          </Link>
        </div>
        <div className="flex justify-end w-full">
          <Link to="/" className="text-black text-lg mx-2">
            Start
          </Link>
          <a href="#steps" onClick={() => scrollToSection('steps')} className="text-black text-lg mx-2">
            O co chodzi?
          </a>
          <a href="#aboutus" onClick={() => scrollToSection('aboutus')} className="text-black text-lg mx-2">
            O nas
          </a>
          <a href="#organizations" onClick={() => scrollToSection('organizations')} className="text-black text-lg mx-2">
            Fundacja i organizacje
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="text-black text-lg mx-2">
            Kontakt
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;