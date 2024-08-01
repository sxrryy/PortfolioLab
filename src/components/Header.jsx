import React from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Header() {
  const linkClasses =
    "text-black text-lg mx-1 pl-3 pr-3 pt-1 pb-1 border-2 cursor-pointer border-transparent hover:border-black transition-colors duration-300";

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (to) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroll.scrollTo(document.getElementById(to).offsetTop, {
          duration: 500,
          smooth: true,
        });
      }, 100);
    }
  };

  return (
    <header className="bg-white p-4">
      <nav className="container mx-auto flex flex-col items-end">
        <div className="flex justify-end w-full mb-2">
          <RouterLink to="/login" className={linkClasses}>
            Zaloguj
          </RouterLink>
          <RouterLink to="/register" className={linkClasses}>
            Załóż konto
          </RouterLink>
        </div>
        <div className="flex justify-end w-full">
          <RouterLink to="/" className={linkClasses}>
            Start
          </RouterLink>
          <ScrollLink
            to="steps"
            smooth={true}
            duration={500}
            className={linkClasses}
            onClick={() => handleClick("steps")}
          >
            O co chodzi?
          </ScrollLink>
          <ScrollLink
            to="aboutus"
            smooth={true}
            duration={500}
            className={linkClasses}
            onClick={() => handleClick("aboutus")}
          >
            O nas
          </ScrollLink>
          <ScrollLink
            to="organizations"
            smooth={true}
            duration={500}
            className={linkClasses}
            onClick={() => handleClick("organizations")}
          >
            Fundacja i organizacje
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={linkClasses}
            onClick={() => handleClick("contact")}
          >
            Kontakt
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
