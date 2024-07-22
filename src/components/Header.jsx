import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl">Fundacja</h1>
        <nav>
          <Link to="/" className="mr-4">
            Start
          </Link>
          <Link to="/login" className="mr-4">
            Zaloguj
          </Link>
          <Link to="/register">Załóż konto</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
