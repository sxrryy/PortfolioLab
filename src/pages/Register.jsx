import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!email.includes("@")) {
      errors.email = "Podany email jest nieprawidłowy!";
    }
    if (password.length < 6) {
      errors.password = "Podane hasło jest za krótkie!";
    }
    if (password2.length < 6) {
      errors.password2 = "Podane hasło jest za krótkie!";
    }
    if (password !== password2) {
      errors.password2 = "Podane hasła się nie zgadzają!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Registered");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl mb-3 mt-10 text-center">Załóż konto</h2>
      <div className="flex justify-center m-3">
        <img className="mb-10" src="../assets/Decoration.svg"></img>
      </div>
      <div className="bg-gray-200 border border-gray-200 p-6">
        <form id="registerForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border-b-2 border-gray-600 bg-gray-200 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Hasło
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border-b-2 border-gray-600 bg-gray-200 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Powtórz hasło
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border-b-2 border-gray-600 bg-gray-200 sm:text-sm"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {errors.password2 && (
              <span className="text-red-500 text-sm">{errors.password2}</span>
            )}
          </div>
        </form>
      </div>
      <div className="mt-4 flex justify-between">
        <Link
          to="/login"
          className="w-1/2 mr-2 py-2 px-4 bg-white text-black border border-solid border-black hover:bg-gray-300 text-center"
        >
          Zaloguj się
        </Link>
        <button
          type="submit"
          form="registerForm"
          className="w-1/2 ml-2 py-2 px-4 bg-white text-black border border-solid border-black hover:bg-gray-300 text-center"
        >
          Załóż konto
        </button>
      </div>
    </div>
  );
};

export default Register;
