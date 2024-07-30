import React from "react";

function Login() {
  return (
    <div>
      <main className="container mx-auto p-4">
        <h2 className="text-2xl mb-4">Zaloguj się</h2>
        <form>
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
            Zaloguj się
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
