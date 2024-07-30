import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
          <Link to="/about" className="text-black text-lg mx-2">
            O co chodzi?
          </Link>
          <Link to="/about-us" className="text-black text-lg mx-2">
            O nas
          </Link>
          <Link to="/organizations" className="text-black text-lg mx-2">
            Fundacja i organizacje
          </Link>
          <Link to="/contact" className="text-black text-lg mx-2">
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
