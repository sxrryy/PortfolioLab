import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Walidacja później tutaj
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Wpisz swoje imię</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border"
        />
      </div>
      <div>
        <label className="block">Wpisz swój email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border"
        />
      </div>
      <div>
        <label className="block">Wpisz swoją wiadomość</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border"
        />
      </div>
      <button
        type="submit"
        className="bg-white border border-black border-solid text-black p-2"
      >
        Wyślij
      </button>
    </form>
  );
}

export default ContactForm;
