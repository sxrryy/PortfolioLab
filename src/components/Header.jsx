import React from "react";
import { Link } from "react-router-dom";

function Header() {

  const linkClasses = "text-black text-lg mx-1 pl-3 pr-3 pt-1 pb-1 border-2 border-transparent hover:border-black transition-colors duration-300";

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
          <Link to="/login" className={linkClasses}>
            Zaloguj
          </Link>
          <Link to="/register" className={linkClasses}>
            Załóż konto
          </Link>
        </div>
        <div className="flex justify-end w-full">
          <Link to="/" className={linkClasses}>
            Start
          </Link>
          <a href="#steps" onClick={() => scrollToSection('steps')} className={linkClasses}>
            O co chodzi?
          </a>
          <a href="#aboutus" onClick={() => scrollToSection('aboutus')} className={linkClasses}>
            O nas
          </a>
          <a href="#organizations" onClick={() => scrollToSection('organizations')} className={linkClasses}>
            Fundacja i organizacje
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className={linkClasses}>
            Kontakt
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;