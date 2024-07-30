import React from "react";

function Register() {
  return (
    <div>
      <main className="container mx-auto p-4">
        <h2 className="text-2xl mb-4">Załóż konto</h2>
        <form>
          <div>
            <label htmlFor="name">Imię:</label>
            <input id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" required />
          </div>
          <div>
            <label htmlFor="password">Hasło:</label>
            <input id="password" type="password" required />
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-white text-black border border-solid border-black"
          >
            Zarejestruj się
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
