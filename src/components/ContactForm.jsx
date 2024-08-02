import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Imię nie może być puste!";
    } else if (name.split(" ").length > 1) {
      newErrors.name = "Imię powinno być pojedynczym wyrazem!";
    }

    if (!email.trim()) {
      newErrors.email = "Email nie może być pusty!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Podany email jest nieprawidłowy!";
    }

    if (!message.trim()) {
      newErrors.message = "Wiadomość nie może być pusta!";
    } else if (message.length < 120) {
      newErrors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://fer-api.coderslab.pl/v1/portfolio/contact",
          {
            name,
            email,
            message,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200 && response.data.status === "success") {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrors(error.response.data.errors);
        } else {
          setErrors({ form: "Coś poszło nie tak. Proszę spróbuj ponownie." });
        }
        setSuccess(false);
      }
    } else {
      setSuccess(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative max-w-8xl mx-auto mt-36 h-96 lg:h-auto bg-cover bg-center overflow-hidden"
      style={{
        height: "750px",
        backgroundImage: "url('../assets/Background-Contact-Form.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="relative w-full lg:w-1/3 p-12 ml-auto">
        <h2 className="flex justify-center text-4xl mb-8">
          Skontaktuj się z nami
        </h2>
        <div className="flex justify-center mb-10">
          <img src="../assets/Decoration.svg"></img>
        </div>
        <form onSubmit={handleSubmit}>
          {errors.form && (
            <div className="text-red-500 mb-4">{errors.form}</div>
          )}
          {success && (
            <div className="text-green-500 mb-4">
              Wiadomość została wysłana! Wkrótce się skontaktujemy.
            </div>
          )}
          <div className="flex mb-8 space-x-8">
            <div className="w-1/2">
              <label htmlFor="name" className="block text-gray-700">
                Wpisz swoje imię
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-3 mt-2 border-b-2 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <div className="text-red-500 mt-2">{errors.name}</div>
              )}
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block text-gray-700">
                Wpisz swój email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 mt-2 border-b-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <div className="text-red-500 mt-2">{errors.email}</div>
              )}
            </div>
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 ">
              Wpisz swoją wiadomość
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full p-3 mt-2 border-b-2 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              rows="6"
            ></textarea>
            {errors.message && (
              <div className="text-red-500 mt-2">{errors.message}</div>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-white text-black border border-solid border-black p-2"
            >
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
