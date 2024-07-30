import React from 'react';

function ContactForm() {
  return (
    <div className="container mx-auto my-8 flex items-center">
      <div
          className="left-0 top-0 w-1/2 h-full bg-cover bg-left"
          style={{ backgroundImage: "url('../assets/Background-Contact-Form.jpg')" }}
        ></div>
      <div className="w-1/2 p-8">
        <form className="max-w-lg mx-auto">
          <h2 className="text-3xl mb-4">Kontakt</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Imię
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Twoje imię" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Twój email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Wiadomość
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Twoja wiadomość"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
